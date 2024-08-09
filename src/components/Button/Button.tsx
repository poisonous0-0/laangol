import { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={classNames(
        "py-2 px-7 scale-110 bg-lime-400 rounded-md transition-all ease-in-out delay-50 duration-300",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
