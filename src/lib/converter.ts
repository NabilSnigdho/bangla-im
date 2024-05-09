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
					const [defaultReplacement, ...rules] = patternStr.split(";")
					const pattern = {
						match,
						defaultReplacement,
						rules: rules
							.map((rule) => {
								const [replacement, conditions] = rule.split(":", 2)

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
			} else {
				prefix = input[0]
				output += prefix
				input = input.substring(1)
			}
		}
		return output
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