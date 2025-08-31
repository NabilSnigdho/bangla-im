import { useAtomValue } from "jotai"
import { selectedSuggestionAtom, textAtom } from "@/lib/store"
import { useEngine } from "@/lib/use-engine"
import { Suggestions } from "./suggestions"

export function Editor() {
	const text = useAtomValue(textAtom)
	const selectedSuggestion = useAtomValue(selectedSuggestionAtom)
	const engine = useEngine()

	return (
		<label className="flex-auto overflow-y-auto p-4">
			<span className="sr-only">Write Here</span>
			<div className="input-sizer stacked" data-value={text}>
				<textarea
					ref={engine.textareaRef}
					className="border-none bg-slate-300 outline-none"
					rows={1}
					placeholder="Write Here"
					value={text}
					onSelect={() => engine.onSelect()}
					onChange={() => engine.onChange()}
					onKeyDown={(event) => {
						switch (event.key) {
							case "Escape":
								event.preventDefault()
								engine.newSession(null)
								break
							case "Up":
							case "ArrowUp":
								event.preventDefault()
								engine.onSuggestionMove(-1)
								break
							case "Down":
							case "ArrowDown":
								event.preventDefault()
								engine.onSuggestionMove(+1)
								break
							case "Enter": {
								const suggestion =
									engine.suggestionsRef.current[selectedSuggestion]
								if (suggestion) {
									event.preventDefault()
									engine.onSuggestionClick(suggestion)
								}
								break
							}
						}
					}}
				/>
				<Suggestions engine={engine} text={text} />
			</div>
		</label>
	)
}
