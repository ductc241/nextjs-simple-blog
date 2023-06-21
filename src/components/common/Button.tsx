import { ComponentPropsWithRef, ReactNode } from "react";

interface IButtonProps extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
}

const Button = ({ ...props }: IButtonProps) => {
  return (
    <button className="px-5 py-3 bg-gray-200 rounded-lg text-sm" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
