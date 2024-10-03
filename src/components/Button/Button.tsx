import { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Updated onClick prop to accept an event
}

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={classNames(
        "py-2 px-7 scale-110 bg-lime-400 rounded-md transition-all ease-in-out delay-50 duration-300",
        className
      )}
      onClick={onClick} // Pass the onClick function to the button
    >
      {children}
    </button>
  );
}

export default Button;
