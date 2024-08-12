import React from "react";

interface RadioButtonProps {
	label: string;
	value: string;
	name: string;
	checked: boolean;
	onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
	label,
	value,
	name,
	checked,
	onChange,
}) => {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="radio"
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange(value)}
				className="form-radio h-5 w-5 text-lime-700 transition duration-150 ease-in-out accent-lime-700"
			/>
			<span className="ml-2">{label}</span>
		</label>
	);
};

export default RadioButton;
