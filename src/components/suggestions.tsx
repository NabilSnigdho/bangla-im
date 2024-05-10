import { bufferAtom } from "@/lib/store"
import type { useEngine } from "@/lib/use-engine"
import { autoUpdate, useFloating } from "@floating-ui/react-dom"
import { Root as Portal } from "@radix-ui/react-portal"
import { useAtomValue } from "jotai"

export function Suggestions({
	engine,
	text,
}: { engine: ReturnType<typeof useEngine>; text: string }) {
	const buffer = useAtomValue(bufferAtom)
	const { refs, floatingStyles } = useFloating({
		whileElementsMounted: autoUpdate,
	})

	if (
		engine.start === null ||
		engine.end === null ||
		engine.start === engine.end
	)
		return null
	return (
		<div className="-z-10 invisible absolute whitespace-pre-wrap">
			{text.slice(0, engine.start)}
			<span ref={refs.setReference}>
				{text.slice(engine.start, engine.end)}
				<Portal>
					<div
						ref={refs.setFloating}
						style={floatingStyles}
						className="rounded-sm border bg-secondary p-2 shadow-lg"
					>
						{buffer}
					</div>
				</Portal>
			</span>
			{text.slice(engine.end)}
		</div>
	)
}
