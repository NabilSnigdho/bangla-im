import { Converter } from "./converter"
import { M17nMim } from "m17n-mim-wasm"

export class MimConverter implements Converter {
	m17nMim

	constructor(public mimString: string) {
		try {
			this.m17nMim = new M17nMim(mimString)
		} catch (e) {
			console.error(e)
		}
	}

	convert(rawInput: string) {
		return this.m17nMim?.convert(rawInput) || rawInput
	}
}
