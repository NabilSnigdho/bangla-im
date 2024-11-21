import { fetchLayout } from "@/lib/fetchLayout"
import { layoutAtom, layoutNameAtom } from "@/lib/store"
import { useAtom } from "jotai"
import { Keyboard } from "lucide-react"
import { useEffect } from "react"
import { Button } from "./ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const builtInLayouts = {
	avro: "অভ্র",
	borno: "বর্ণ",
	khipro: "ক্ষিপ্র",
	"ridmik-easy": "রিদমিক সহজ ফোনেটিক",
	probhat: "প্রভাত (ALT ছাড়া)",
} as const

export function Layouts() {
	const [layout, setLayout] = useAtom(layoutAtom)
	const [layoutName, setLayoutName] = useAtom(layoutNameAtom)

	useEffect(() => {
		if (layout in builtInLayouts) {
			setLayoutName(builtInLayouts[layout as keyof typeof builtInLayouts])
			fetchLayout(layout)
		} else {
			setLayout("khipro")
		}
	}, [layout, setLayout, setLayoutName])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="mr-auto">
					<Keyboard size="1.2rem" className="mr-2" /> {layoutName}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{Object.entries(builtInLayouts).map(([key, name]) => (
					<DropdownMenuItem
						key={key}
						onClick={async () => {
							setLayout(key)
							setLayoutName(name)
							await fetchLayout(key)
						}}
					>
						{name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
