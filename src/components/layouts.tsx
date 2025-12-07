import { useAtom } from "jotai"
import { HelpCircleIcon, Keyboard } from "lucide-react"
import { converterAtom, khiproLayout, layoutAtom } from "@/lib/store"
import { Button } from "./ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Spinner } from "./ui/spinner"

const builtInLayouts = {
	avro: {
		name: "অভ্র",
		documentation:
			"https://www.omicronlab.com/download/pdf/Bangla%20Typing%20with%20Avro%20Phonetic.pdf",
	},
	borno: {
		name: "বর্ণ (১৯৯৬-৯৮)",
		documentation: `${import.meta.env.BASE_URL}borno.png`,
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
		documentation: `${import.meta.env.BASE_URL}provat.png`,
	},
} as const

export function Layouts() {
	const [layout, setLayout] = useAtom(layoutAtom)
	const [converter] = useAtom(converterAtom)

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						<Keyboard size="1.2rem" className="mr-2" /> {layout.name}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{Object.entries(builtInLayouts).map(([key, { name }]) => (
						<DropdownMenuItem
							key={key}
							onClick={async () => {
								if (key in builtInLayouts) {
									const layout =
										builtInLayouts[key as keyof typeof builtInLayouts]
									setLayout(
										layout.name === "ক্ষিপ্র"
											? khiproLayout
											: {
													name: layout.name,
													documentation: layout.documentation,
													type: "rule-based",
													url: `${import.meta.env.BASE_URL}${key}.csv`,
													content: "",
												},
									)
								}
							}}
						>
							{name}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
			{layout.documentation && (
				<Button variant="outline" asChild>
					<a
						href={layout.documentation}
						target="_blank"
						rel="noopener noreferrer"
					>
						<HelpCircleIcon size="1.2rem" className="mr-2" />
						Help
					</a>
				</Button>
			)}
			{converter.state === "loading" && <Spinner />}
		</>
	)
}
