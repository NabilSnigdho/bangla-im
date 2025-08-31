import { autoUpdate, useFloating } from "@floating-ui/react-dom"
import { Root as Portal } from "@radix-ui/react-portal"
import { useAtomValue } from "jotai"
import { useMemo } from "react"
import { bufferAtom, selectedSuggestionAtom } from "@/lib/store"
import type { useEngine } from "@/lib/use-engine"
import { cn } from "@/lib/utils"

export function Suggestions({
	engine,
	text,
}: {
	engine: ReturnType<typeof useEngine>
	text: string
}) {
	const buffer = useAtomValue(bufferAtom)
	const selectedSuggestion = useAtomValue(selectedSuggestionAtom)
	const { refs, floatingStyles } = useFloating({
		whileElementsMounted: autoUpdate,
	})
	const suggestions = useMemo(() => {
		if (!buffer) return []
		return engine.suggestionsRef.current
	}, [buffer, engine])

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
						className="rounded-sm border bg-secondary shadow-lg"
					>
						<div className="px-4 py-1 text-muted-foreground">{buffer}</div>
						<div>
							{suggestions.map((suggestion, i) => (
								<button
									type="button"
									key={suggestion}
									className={cn(
										"block w-full bg-background px-4 py-1 text-start hover:bg-accent hover:text-accent-foreground",
										{
											"bg-blue-200 text-accent-foreground dark:bg-blue-800":
												selectedSuggestion === i,
										},
									)}
									onClick={() => engine.onSuggestionClick(suggestion)}
								>
									{suggestion}
								</button>
							))}
						</div>
					</div>
				</Portal>
			</span>
			{text.slice(engine.end)}
		</div>
	)
}
