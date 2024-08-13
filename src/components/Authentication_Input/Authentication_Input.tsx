import React from "react";

interface InputProps {
	type?: string;
	name: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Added this line
}

const Authentication_Input: React.FC<InputProps> = ({
	type = "text",
	name,
	placeholder = "",
	required = false,
	disabled = false,
	className = "",
	onChange, // Added this line
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
				onChange={onChange} // Pass it to the input element
			/>
		</div>
	);
};

export default Authentication_Input;
