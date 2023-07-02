import { ComponentPropsWithRef, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// interface IButtonProps extends ComponentPropsWithRef<"button"> {
//   variant: string;
//   size: string;
//   children: ReactNode;
// }

export interface IButtonProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof buttonStyles> {}

const buttonStyles = cva("rounded-lg text-blue-500 text-sm", {
  variants: {
    variant: {
      text: "hover:bg-blue-100",
      contained:
        "text-white bg-blue-600 hover:bg-blue-700 hover:drop-shadow-lg",
      outlined:
        "border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-600",
    },
    size: {
      medium: "px-5 py-3",
      large: "px-6 py-4 text-md",
    },
  },
  defaultVariants: {
    variant: "contained",
    size: "medium",
  },
});

const Button = ({ variant, size, className, ...props }: IButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, className }))}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
