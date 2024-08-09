import { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

function ShoppingButton({ children, className }: ButtonProps) {
  return (
    <button
      className={classNames(
        "px-2 py-1 scale-110 border-2 border-lime-300 bg-opacity-10 rounded-md transition-all ease-in-out delay-50 duration-300",
        className
      )}
    >
      {children}
    </button>
  );
}
ShoppingButton;

export default ShoppingButton;
