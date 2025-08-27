// import { ReplacementTable } from "./components/replacement-table"
import { FaGithub } from "react-icons/fa6"
import { Editor } from "./components/editor"
import { Layouts } from "./components/layouts"
import { ModeToggle } from "./components/mode-toggle"
import { ThemeLoader } from "./components/theme-loader"
import { Button } from "./components/ui/button"

function App() {
	return (
		<main className="fixed inset-0 flex flex-col">
			<Editor />
			<div className="flex gap-4 bg-secondary p-4">
				<ThemeLoader />
				<ModeToggle />
				<Layouts />
				{/* <ReplacementTable /> */}
				<Button variant="outline" size="icon">
					<a
						href="https://github.com/NabilSnigdho/bangla-im/"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub className="h-[1.2rem] w-[1.2rem]" />
					</a>
				</Button>
			</div>
		</main>
	)
}

export default App
