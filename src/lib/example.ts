import { getDefaultStore } from "jotai"
import { rtAtom } from "./store"

export async function example(name: string) {
	if (!confirm("This will replace the current table, do you want to continue?"))
		return
	getDefaultStore().set(
		rtAtom,
		await (await fetch(`${import.meta.env.BASE_URL}${name}.csv`)).text(),
	)
}
