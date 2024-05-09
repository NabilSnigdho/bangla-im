import { themeAtom } from "@/lib/store"
import { useAtomValue } from "jotai"
import { useEffect } from "react"

export function ThemeLoader() {
	const theme = useAtomValue(themeAtom)

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove("light", "dark")

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light"

			root.classList.add(systemTheme)
			return
		}

		root.classList.add(theme)
	}, [theme])

	return null
}
