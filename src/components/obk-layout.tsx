import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogXButton,
} from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { converterAtom } from "@/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { Base91 } from "@hpcc-js/wasm/base91"
import { Zstd } from "@hpcc-js/wasm/zstd"
import { getDefaultStore } from "jotai"
import { useForm } from "react-hook-form"
import { twc } from "react-twc"
import * as z from "zod"
import { Field } from "./ui/field"

const Row = twc.div`flex flex-wrap gap-x-4`

const schema = z.object({
	name: z.string().min(1, { message: "Required" }),
	version: z.string(),
	developer: z.object({
		name: z.string(),
		comment: z.string(),
	}),
	image0: z.string(),
})

type FormValues = z.infer<typeof schema>

export function OBKLayout() {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			developer: {
				comment: "",
				name: "",
			},
			image0: "",
			name: "",
			version: "",
		},
	})
	const onSubmit = form.handleSubmit(async (data, event) => {
		const image0: File | undefined = event?.target.elements.image0.files?.[0]

		if (image0) {
			const zstd = await Zstd.load()
			const compressed_data = zstd.compress(
				new Uint8Array(await image0.arrayBuffer()),
			)
			const base91 = await Base91.load()
			const base91Str = base91
				.encode(compressed_data)
				// https://github.com/r-lyeh-archived/base/blob/master/base.hpp
				.replaceAll("<", "-")
				.replaceAll(">", "\\")
				.replaceAll('"', "'")
			data.image0 = base91Str
		}

		const converter = getDefaultStore().get(converterAtom)
		const element = document.createElement("a")
		const file = new Blob(
			[JSON.stringify(converter.getOBKPhoneticLayout(data), null, 2)],
			{ type: "text/plain" },
		)
		element.href = URL.createObjectURL(file)
		element.download = `${data.name}.json`
		document.body.appendChild(element) // Required for this to work in FireFox
		element.click()
	})

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Export OBK Layout</Button>
			</DialogTrigger>
			<DialogContent asChild>
				<form
					onSubmit={onSubmit}
					className="rows-[auto_1fr_auto] max-h-full sm:max-w-4xl"
				>
					<Form {...form}>
						<DialogHeader>
							<DialogTitle>OBK Phonetic Layout</DialogTitle>
							<DialogDescription>
								Export as layout JSON file which can be imported to OpenBangla
								Keyboard.
							</DialogDescription>
						</DialogHeader>
						<div className="-mx-6 min-h-0 overflow-y-auto px-6">
							<Row>
								<Field
									control={form.control}
									name="name"
									label="Layout name"
									root={{ className: "basis-full sm:basis-3/4" }}
								/>
								<Field
									control={form.control}
									name="version"
									root={{ className: "basis-full sm:flex-1" }}
								/>
							</Row>
							<Field control={form.control} name="developer.name" />
							<Field
								control={form.control}
								name="developer.comment"
								textarea={{ rows: 2 }}
							/>
							<Field
								control={form.control}
								name="image0"
								label="Layout Image"
								input={{
									type: "file",
									accept: "image/png, image/jpeg, image/bmp, image/gif",
								}}
							/>
						</div>
						<DialogFooter>
							<Button>Download</Button>
						</DialogFooter>
						<DialogXButton />
					</Form>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default OBKLayout
