import { cn } from "lib/utils";
import { ComponentProps } from "react";
import {
	InputText,
	InputTextPassThroughMethodOptions,
} from "primereact/inputtext";
import { classNames } from "primereact/utils";

function Input({
	className,
	type,
	...props
}: ComponentProps<typeof InputText>) {
	return (
		<InputText
			type={type}
			data-slot="input"
			unstyled
			pt={{
				root: ({
					props,
					context,
				}: InputTextPassThroughMethodOptions) => ({
					className: classNames(
						"m-0 w-full",
						"font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border transition-colors duration-200 appearance-none rounded-lg",
						{
							"focus:outline-none focus:outline-offset-0 focus:(shadow-[0_0_0_0.2rem] shadow-primary/40)":
								!context.disabled,
							"hover:border-primary":
								!props.invalid && !context.disabled,
							"opacity-60 select-none pointer-events-none cursor-default":
								context.disabled,
							"border-gray-300 dark:border-blue-900/40":
								!props.invalid,
							"border-red-500 hover:border-red-500/80 focus:border-red-500":
								props.invalid && !context.disabled,
							"border-red-500/50":
								props.invalid && context.disabled,
						},
						{
							"text-lg px-4 py-4": props.size === "large",
							"text-xs px-2 py-2": props.size === "small",
							"p-3 text-base":
								!props.size || typeof props.size === "number",
						},
						{
							"pl-8": (context as any).iconPosition === "left",
							"pr-8": (props as any).iconPosition === "right",
						}
					),
				}),
			}}
			//   className={cn(
			//     "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			//     "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
			//     "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
			//     className
			//   )}
			{...props}
		/>
	);
}

export { Input };
