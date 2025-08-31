import { distance } from "fastest-levenshtein"
import { getDefaultStore, useSetAtom } from "jotai"
import { useRef } from "react"
import { suggest } from "../../suggestion/pkg/suggestion"
import {
	bufferAtom,
	converterAtom,
	selectedSuggestionAtom,
	textAtom,
} from "./store"

export function useEngine() {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const suggestionsRef = useRef<string[]>([])
	const setText = useSetAtom(textAtom)
	const setBuffer = useSetAtom(bufferAtom)
	const setSelectedSuggestion = useSetAtom(selectedSuggestionAtom)

	return useRef({
		start: null as number | null,
		end: null as number | null,
		buffer: "",
		lastSelection: null as [number, number] | null,
		textareaRef,
		suggestionsRef,

		getDiff(old: string, cur: string) {
			if (this.lastSelection) {
				const [a, b] = this.lastSelection
				this.lastSelection = null
				if (a !== b)
					return [old.slice(a, b), cur.slice(a, b - old.length || undefined)]
			}

			const l = Math.min(old.length, cur.length)
			let i = 0
			while (i < l && old[i] === cur[i]) ++i
			let j = 1
			while (i + j <= l && old.at(-j) === cur.at(-j)) ++j
			--j
			return [old.slice(i, -j || undefined), cur.slice(i, -j || undefined)]
		},

		newSession(cur: number | null, buffer = ""): void {
			this.start = cur
			this.end = null
			this.buffer = buffer
			setBuffer(buffer)
		},

		onSelect(): void {
			const el = textareaRef.current
			if (!el) return
			this.lastSelection = [el.selectionStart, el.selectionEnd]
		},

		onSuggestionClick(suggestion: string) {
			const el = textareaRef.current
			if (!el || this.start === null || this.end === null) return
			let text = el.value

			text = text.slice(0, this.start) + suggestion + text.slice(this.end)

			const end = this.start + suggestion.length

			setText(text)
			this.newSession(null)

			setTimeout(() => {
				el.focus()
				el.setSelectionRange(end, end)
			}, 0)
		},

		onSuggestionMove(n: number) {
			const suggestions = this.suggestionsRef.current
			const i =
				(getDefaultStore().get(selectedSuggestionAtom) +
					n +
					suggestions.length) %
				suggestions.length
			const suggestion = suggestions[i]
			const el = textareaRef.current
			if (!el || this.start === null || this.end === null) return
			let text = el.value

			text = text.slice(0, this.start) + suggestion + text.slice(this.end)

			this.end = this.start + suggestion.length

			setText(text)
			setSelectedSuggestion(i)

			setTimeout(() => {
				el.focus()
				el.setSelectionRange(this.end, this.end)
			}, 0)
		},

		_onChange(el: HTMLTextAreaElement): string {
			let text = el.value
			const oldText = getDefaultStore().get(textAtom)
			const [toRemove, toInsert] = this.getDiff(oldText, text)
			const end = el.selectionStart

			if (toRemove && toInsert) {
				this.newSession(end - toInsert.length, toInsert)
			} else {
				if (
					this.start === null ||
					end < this.start ||
					(this.end !== null &&
						end - this.end !== toInsert.length - toRemove.length)
				) {
					this.newSession(end - toInsert.length)
					if (toRemove) return text
				}
				if (toInsert) this.buffer += toInsert
				else if (toRemove) this.buffer = this.buffer.slice(0, -toRemove.length)
			}

			if (/[ \n]$/.test(this.buffer)) this.newSession(null)
			else if (this.start !== null) {
				const transformed =
					getDefaultStore().get(converterAtom).convert(this.buffer) ||
					this.buffer
				this.suggestionsRef.current = sortByPhoneticRelevance(
					transformed,
					suggest(transformed),
				)
				if (!this.suggestionsRef.current.includes(transformed))
					this.suggestionsRef.current.unshift(transformed)
				setSelectedSuggestion(0)
				text = text.slice(0, this.start) + transformed + text.slice(end)

				this.end = this.start + transformed.length
				setTimeout(() => {
					el.setSelectionRange(this.end, this.end)
				}, 0)
			}

			return text
		},
		onChange() {
			const el = textareaRef.current
			if (!el) return
			setText(this._onChange(el))
			setBuffer(this.buffer)
		},
	}).current
}

const sortByPhoneticRelevance = (phonetic: string, dictSuggestion: string[]) =>
	dictSuggestion.slice(0).sort((a: string, b: string) => {
		const da = distance(phonetic, a)
		const db = distance(phonetic, b)

		if (da < db) return -1
		else if (da > db) return 1
		else return 0
	})
