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
			<div className="flex items-center gap-4 bg-secondary p-4">
				<h1 className="font-bold text-2xl">Bangla IM</h1>
				<Layouts />
				{/* <ReplacementTable /> */}
				<Button variant="outline" size="icon" asChild className="ms-auto">
					<a
						href="https://github.com/NabilSnigdho/bangla-im/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="sr-only">GitHub</span>
						<FaGithub className="h-[1.2rem] w-[1.2rem]" />
					</a>
				</Button>
				<ThemeLoader />
				<ModeToggle />
			</div>
			<Editor />
		</main>
	)
}

export default App
