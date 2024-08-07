import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { example } from "@/lib/example"
import { rtAtom } from "@/lib/store"
import { sentenceCase } from "change-case"
import { useAtom } from "jotai"
import { Rows3, TableProperties } from "lucide-react"
import { Suspense, lazy } from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const OBKLayout = lazy(() => import("./obk-layout"))

export function ReplacementTable() {
	const [rt, setRT] = useAtom(rtAtom)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">
					<TableProperties size="1.2rem" />
				</Button>
			</DialogTrigger>
			<DialogContent className="rows-[auto_1fr_auto] max-h-full sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Replacement Table</DialogTitle>
					<DialogDescription>
						Simple replacement rules in CSV format.
					</DialogDescription>
				</DialogHeader>
				<div
					className="input-sizer stacked overflow-y-auto rounded border border-black p-4"
					data-value={rt}
				>
					<textarea
						className="border-none bg-slate-300 outline-none"
						rows={1}
						placeholder="match,replacement"
						value={rt}
						onChange={(event) => {
							setRT(event.currentTarget.value)
						}}
					/>
				</div>
				<DialogFooter>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="mr-auto">
								<Rows3 size="1.2rem" className="mr-2" /> Examples
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{(["avro", "borno", "khipro"] as const).map((x) => (
								<DropdownMenuItem key={x} onClick={async () => example(x)}>
									{sentenceCase(x)}
								</DropdownMenuItem>
							))}
							<DropdownMenuItem onClick={async () => example("probhat")}>
								Probhat (no AltGr)
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Suspense>
						<OBKLayout />
					</Suspense>
					<DialogClose asChild>
						<Button type="button">OK</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
