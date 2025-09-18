import { useAtom } from "jotai"
import { HelpCircleIcon, Keyboard } from "lucide-react"
import { useEffect } from "react"
import { fetchLayout } from "@/lib/fetchLayout"
import { layoutAtom, layoutNameAtom } from "@/lib/store"
import { Button } from "./ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const builtInLayouts = {
	avro: {
		name: "অভ্র",
		documentation:
			"https://www.omicronlab.com/download/pdf/Bangla%20Typing%20with%20Avro%20Phonetic.pdf",
	},
	borno: {
		name: "বর্ণ (১৯৯৬-৯৮)",
		documentation: "/borno.png",
	},
	khipro: {
		name: "ক্ষিপ্র",
		documentation: "https://khiprokeyboard.github.io/docs/",
	},
	"ridmik-easy": {
		name: "সহজ ফোনেটিক (রিদ্মিক)",
		documentation: "https://easy.ridmik.com/",
	},
	probhat: {
		name: "প্রভাত (Alt Gr ছাড়া)",
		documentation: "/provat.png",
	},
} as const

export function Layouts() {
	const [layout, setLayout] = useAtom(layoutAtom)
	const [layoutName, setLayoutName] = useAtom(layoutNameAtom)

	useEffect(() => {
		if (layout in builtInLayouts) {
			setLayoutName(builtInLayouts[layout as keyof typeof builtInLayouts].name)
			fetchLayout(layout)
		} else {
			setLayout("khipro")
		}
	}, [layout, setLayout, setLayoutName])

	const doc =
		builtInLayouts[layout as keyof typeof builtInLayouts]?.documentation

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						<Keyboard size="1.2rem" className="mr-2" /> {layoutName}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{Object.entries(builtInLayouts).map(([key, { name }]) => (
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
			{doc && (
				<Button variant="outline" asChild>
					<a href={doc} target="_blank" rel="noopener noreferrer">
						<HelpCircleIcon size="1.2rem" className="mr-2" />
						Help
					</a>
				</Button>
			)}
		</>
	)
}
