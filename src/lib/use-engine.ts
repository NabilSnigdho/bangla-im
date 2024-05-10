import { getDefaultStore, useAtomValue } from "jotai"
import { useEffect, useRef } from "react"
import { converterAtom, textAtom } from "./store"

export function useEngine() {
	const converter = useAtomValue(converterAtom)
	const converterRef = useRef(converter)

	useEffect(() => {
		converterRef.current = converter
	}, [converter])

	return useRef({
		start: null as number | null,
		end: null as number | null,
		buffer: "",
		lastSelection: null as [number, number] | null,

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
		},

		onSelect(el: HTMLTextAreaElement): void {
			this.lastSelection = [el.selectionStart, el.selectionEnd]
		},

		onChange(el: HTMLTextAreaElement): string {
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
				const transformed = converterRef.current.convert(this.buffer)
				text = text.slice(0, this.start) + transformed + text.slice(end)

				this.end = this.start + transformed.length
				setTimeout(() => {
					el.setSelectionRange(this.end, this.end)
				}, 0)
			}

			return text
		},
	}).current
}
