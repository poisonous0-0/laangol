import React, { ChangeEvent } from "react";

interface InputProps {
	type?: string;
	name: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	value: string;  // Add the value prop
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;  // Add the onChange prop
}

const Authentication_Input: React.FC<InputProps> = ({
	type = "text",
	name,
	placeholder = "",
	required = false,
	disabled = false,
	className = "",
	value,  // Destructure the value prop
	onChange,  // Destructure the onChange prop
}) => {
	return (
		<div className={`relative ${className}`}>
			<input
				id={name}
				type={type}
				name={name}
				required={required}
				disabled={disabled}
				className={`w-81 pl-4 border-2 bg-lime-100 py-2 rounded-md text-lime-900 focus:border-lime-500 focus:outline-none border-lime-500 placeholder-lime-600`}
				placeholder={placeholder}
				value={value}  // Bind the value prop
				onChange={onChange}  // Bind the onChange prop
			/>
		</div>
	);
};

export default Authentication_Input;
