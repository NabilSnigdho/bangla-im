import { createStore } from "idb-keyval"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Converter } from "./converter"

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

export const layoutsStore = createStore("banglaIMLayouts", "banglaIMLayouts")
