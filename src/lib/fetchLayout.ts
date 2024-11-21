import { getDefaultStore } from "jotai"
import { rtAtom } from "./store"

export async function fetchLayout(name: string) {
	getDefaultStore().set(
		rtAtom,
		await (await fetch(`${import.meta.env.BASE_URL}${name}.csv`)).text(),
	)
}
