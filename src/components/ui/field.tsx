import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input, type InputProps } from "@/components/ui/input"
import { sentenceCase } from "change-case"
import type React from "react"
import type {
	FieldPath,
	FieldValues,
	UseControllerProps,
} from "react-hook-form"
import type { XOR } from "ts-xor"
import { Textarea, type TextareaProps } from "./textarea"

export function Field<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
	props: UseControllerProps<TFieldValues, TName> & {
		label?: React.ReactNode
		description?: React.ReactNode
		root?: React.HTMLAttributes<HTMLDivElement>
	} & XOR<{ input?: InputProps }, { textarea?: TextareaProps }>,
) {
	return (
		<FormField
			control={props.control}
			name={props.name}
			render={({ field }) => (
				<FormItem {...props.root}>
					<FormLabel>{props.label ?? sentenceCase(props.name)}</FormLabel>
					<FormControl>
						{props.textarea ? (
							<Textarea {...props.textarea} {...field} />
						) : (
							<Input {...props.input} {...field} />
						)}
					</FormControl>
					<FormDescription>{props.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
