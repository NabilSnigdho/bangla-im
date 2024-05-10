import { showSuggestionsAtom } from "@/lib/store"
import type { useEngine } from "@/lib/use-engine"
import { autoUpdate, useFloating } from "@floating-ui/react-dom"
import { Root as Portal } from "@radix-ui/react-portal"
import { useAtomValue } from "jotai"
import { memo } from "react"

export const Suggestions = memo(function Suggestions({
	engine,
	text,
}: { engine: ReturnType<typeof useEngine>; text: string }) {
	const show = useAtomValue(showSuggestionsAtom)
	const { refs, floatingStyles } = useFloating({
		whileElementsMounted: autoUpdate,
	})

	if (!show || engine.start === null || engine.end === null) return null
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
						{engine.buffer}
					</div>
				</Portal>
			</span>
			{text.slice(engine.end)}
		</div>
	)
})
