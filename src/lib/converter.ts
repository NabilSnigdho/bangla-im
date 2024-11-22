/**
 * Acknowledgement: https://github.com/gulshan/okkhor/
 */

import { parse } from "@vanillaes/csv"
import BTree from "sorted-btree"

export enum Target {
	Suffix = 0,
	Prefix = 1,
}

export enum Is {
	Vowel = 0,
	Consonant = 1,
	Alphabet = 2,
	Digit = 3,
}

export type Condition = {
	target: Target
	is: Is | string
	not: boolean
}

export type Rule = {
	replacement: string
	conditions: Condition[]
}

export type Pattern = {
	match: string
	defaultReplacement: string
	rules: Rule[]
}

export class Converter {
	private readonly patterns: BTree<string, Pattern>

	constructor(csv: string) {
		this.patterns = new BTree(
			parse(csv)
				.filter(([match, patternStr]) => !!match && patternStr !== undefined)
				.map(([match, patternStr]: [string, string]) => {
					patternStr = patternStr.replaceAll("ZWNJ", "\u200C")
					patternStr = patternStr.replaceAll("ZWJ", "\u200D")
					const [defaultReplacement, ...rules] = patternStr
						.split(/(?<!\\);/)
						.map((x) => x.replaceAll("\\;", ";"))
					const pattern = {
						match,
						defaultReplacement,
						rules: rules
							.map((rule) => {
								const [replacement, conditions] = rule
									.split(/(?<!\\):/, 2)
									.map((x) => x.replaceAll("\\:", ":"))

								if (!conditions) return null

								return {
									replacement,
									conditions: conditions.split("&&").map((condition) => {
										const x = condition.substring(4)
										return {
											target: condition.startsWith("$p")
												? Target.Prefix
												: Target.Suffix,
											is:
												{
													$v: Is.Vowel,
													$c: Is.Consonant,
													$a: Is.Alphabet,
													$d: Is.Digit,
												}[x] ?? x,
											not: condition.substring(2, 4) === "!=",
										}
									}),
								} as const
							})
							.filter(Boolean),
					}
					return [match, pattern]
				}),
		)
	}

	convert(rawInput: string) {
		let prefix = " "
		let input = rawInput
		let output = ""
		while (input) {
			const pattern = this.patterns
				.getRange(this.patterns.minKey() ?? "", input, true)
				.findLast(([k]) => input.startsWith(k))
			if (pattern) {
				output += getReplacement(pattern, input, prefix)
				prefix = pattern[0].at(-1) ?? " "
				input = input.substring(pattern[0].length)
			} else if (input[0] !== input[0].toLowerCase()) {
				input = input[0].toLowerCase() + input.substring(1)
			} else {
				prefix = input[0]
				output += prefix
				input = input.substring(1)
			}
		}
		return output
	}

	getPatterns() {
		return this.patterns
			.valuesArray()
			.toReversed()
			.map((pattern) => {
				const rules = pattern.rules.map((rule) => ({
					replace: rule.replacement,
					matches: rule.conditions.map((condition) => {
						const { is } = condition
						const value = typeof is === "string" ? is : undefined

						return {
							type: condition.target === Target.Prefix ? "prefix" : "suffix",
							scope: `${condition.not !== (is === Is.Alphabet) ? "!" : ""}${
								value
									? "exact"
									: is === Is.Alphabet
										? "punctuation"
										: is === Is.Vowel
											? "vowel"
											: is === Is.Consonant
												? "consonant"
												: "number"
							}`,
							value,
						}
					}),
				}))

				return {
					find: pattern.match,
					replace: pattern.defaultReplacement,
					rules,
				}
			})
	}

	getOBKPhoneticLayout(layout: {
		developer: {
			comment: string
			name: string
		}
		image0: string
		name: string
		version: string
	}) {
		return {
			info: {
				layout,
				type: "phonetic",
				version: "2",
			},
			layout: {
				casesensitive: "",
				consonant: "bcdfghjklmnpqrstvwxyz",
				number: "1234567890",
				patterns: this.getPatterns().toSorted(
					(a, b) => b.find.length - a.find.length || (a.find > b.find ? 1 : -1),
				),
				vowel: "aeiou",
			},
		}
	}
}

const alpha = /^[a-z]$/i
const vowel = /^[aeiou]$/i
const digit = /^[0-9]$/i

function getReplacement(
	[match, { defaultReplacement, rules }]: [string, Pattern],
	input: string,
	prefix: string,
) {
	if (!rules.length) return defaultReplacement
	const suffix = input.substring(match.length, match.length + 1)
	for (let i = 0; i < rules.length; i++) {
		const { conditions, replacement } = rules[i]
		if (
			conditions.every(({ target, not, is }) => {
				let c: string
				if (target === Target.Prefix) c = prefix
				else c = suffix

				switch (is) {
					case Is.Vowel:
						return not !== vowel.test(c)
					case Is.Consonant:
						return not !== (!vowel.test(c) && alpha.test(c))
					case Is.Alphabet:
						return not !== alpha.test(c)
					case Is.Digit:
						return not !== digit.test(c)
					default:
						return not !== (c === is)
				}
			})
		)
			return replacement
	}
	return defaultReplacement
}
