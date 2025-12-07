import { createStore } from "idb-keyval"
import { atom } from "jotai"
import { atomWithStorage as _atomWithStorage, loadable } from "jotai/utils"
import { MimConverter } from "./converter/mim-converter"
import { RulesBasedConverter } from "./converter/rule-bases-converter"

function atomWithStorage<T>(key: string, initialValue: T) {
	return _atomWithStorage("bangla-im:" + key, initialValue, undefined, {
		getOnInit: true,
	})
}

export const themeAtom = atomWithStorage<"dark" | "light" | "system">(
	"ui-theme",
	"system",
)

export const textAtom = atomWithStorage("text", "")

export const khiproLayout = {
	name: "ক্ষিপ্র",
	type: "mim",
	content: "khipro",
	url: "https://cdn.jsdelivr.net/gh/rank-coder/khipro-m17n/bn-khipro.mim",
	documentation: "https://khiprokeyboard.github.io/docs/",
} as const

export const layoutAtom = atomWithStorage<{
	name: string
	type: "mim" | "rule-based"
	content: string
	url: string
	documentation: string
}>("layout", khiproLayout)

export const converterAtom = loadable(
	atom(async (get) => {
		const layout = get(layoutAtom)
		let content
		if (layout.url) {
			try {
				const response = await fetch(layout.url)
				content = await response.text()
				if (layout.type === "mim") {
					content = content.replace(
						/description([^)]*\n)+[^)]*/,
						'description (_ "Ai\nms")',
					)
				}
			} catch (e) {
				console.warn(e)
			}
		}
		if (!content) {
			content = layout.content
		}
		return layout.type === "mim"
			? new MimConverter(content)
			: new RulesBasedConverter(content)
	}),
)
export const bufferAtom = atom("")
export const selectedSuggestionAtom = atom(0)

export const layoutsStore = createStore("banglaIMLayouts", "banglaIMLayouts")
