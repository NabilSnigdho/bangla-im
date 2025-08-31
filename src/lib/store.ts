import { createStore } from "idb-keyval"
import { atom } from "jotai"
import { atomWithStorage as _atomWithStorage } from "jotai/utils"
import { Converter } from "./converter"

function atomWithStorage<T>(key: string, initialValue: T) {
	return _atomWithStorage(key, initialValue, undefined, {
		getOnInit: true,
	})
}

export const themeAtom = atomWithStorage<"dark" | "light" | "system">(
	"ui-theme",
	"system",
)

export const textAtom = atomWithStorage("text", "")

export const rtAtom = atomWithStorage<string>("rt", "")
export const layoutAtom = atomWithStorage<string>("layout", "")
export const layoutNameAtom = atomWithStorage<string>("layoutName", "")
export const converterAtom = atom((get) => new Converter(get(rtAtom)))
export const bufferAtom = atom("")
export const selectedSuggestionAtom = atom(0)

export const layoutsStore = createStore("banglaIMLayouts", "banglaIMLayouts")
