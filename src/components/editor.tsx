import { bufferAtom, textAtom } from "@/lib/store"
import { useEngine } from "@/lib/use-engine"
import { useAtom, useSetAtom } from "jotai"
import { Suggestion } from "./suggestion"

export function Editor() {
	const [text, setText] = useAtom(textAtom)
	const engine = useEngine()
	const setBuffer = useSetAtom(bufferAtom)

	return (
		<label className="flex-auto overflow-y-auto p-4">
			<span className="sr-only">Write Here</span>
			<div className="input-sizer stacked" data-value={text}>
				<textarea
					className="border-none bg-slate-300 outline-none"
					rows={1}
					placeholder="Write Here"
					value={text}
					onSelect={(event) => {
						engine.onSelect(event.currentTarget)
					}}
					onChange={(event) => {
						setText(engine.onChange(event.currentTarget))
						setBuffer(engine.buffer)
					}}
				/>
				<Suggestion engine={engine} text={text} />
			</div>
		</label>
	)
}
