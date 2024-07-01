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
	DialogXButton,
} from "@/components/ui/dialog"
import { converterAtom } from "@/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { getDefaultStore } from "jotai"
import { Resolver, useForm } from "react-hook-form"
import * as z from "zod"

const schema = z.object({
	name: z.string().min(1, { message: "Required" }),
	age: z.number().min(10),
})

type FormValues = z.infer<typeof schema>

export function OBKLayout() {
	const { register, handleSubmit } = useForm<FormValues>({
		resolver: zodResolver(schema),
	})
	const onSubmit = handleSubmit((data) => console.log(data))

	return (
		<Dialog>
			<DialogTrigger>OBK Layout</DialogTrigger>
			<DialogContent
				noXButton
				asChild
				className="rows-[auto_1fr_auto] max-h-full sm:max-w-[425px]"
			>
				<form onSubmit={onSubmit}>
					<DialogHeader>
						<DialogTitle>OBK Phonetic Layout</DialogTitle>
						<DialogDescription>
							Export as layout JSON file which can be imported to OpenBangla
							Keyboard.
						</DialogDescription>
					</DialogHeader>

					<DialogFooter>
						<Button
							type="button"
							onClick={() => {
								const converter = getDefaultStore().get(converterAtom)
								const element = document.createElement("a")
								const file = new Blob([converter.getOBKPhoneticLayout({})], {
									type: "text/plain",
								})
								element.href = URL.createObjectURL(file)
								element.download = "Layout.json"
								document.body.appendChild(element) // Required for this to work in FireFox
								element.click()
							}}
						>
							Download
						</Button>
					</DialogFooter>
					<DialogXButton />
				</form>
			</DialogContent>
		</Dialog>
	)
}
