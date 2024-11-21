import { Editor } from "./components/editor"
import { Layouts } from "./components/layouts"
import { ModeToggle } from "./components/mode-toggle"
import { ReplacementTable } from "./components/replacement-table"
import { ThemeLoader } from "./components/theme-loader"

function App() {
	return (
		<main className="fixed inset-0 flex flex-col">
			<Editor />
			<div className="flex gap-4 bg-secondary p-4">
				<ThemeLoader />
				<ModeToggle />
				<Layouts />
				<ReplacementTable />
			</div>
		</main>
	)
}

export default App
