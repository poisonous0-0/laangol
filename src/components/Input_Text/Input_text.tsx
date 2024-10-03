import React from "react"; 

interface InputBoxProps {
	label: string;
	type?: string;
	name: string; // Add name prop
	value: string | number; // Add value prop, can be string or number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
}

const Input_text: React.FC<InputBoxProps> = ({ label, type = "text", name, value, onChange }) => {
	return (
		<div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3">
			<label className="mb-2 text-lime-900">{label}</label>
			<input
				type={type}
				name={name} // Bind name to the input
				value={value} // Bind value to the input
				onChange={onChange} // Bind onChange to the input
				className="px-4 py-2 border border-lime-500 bg-lime-100 rounded-md focus:outline-none"
			/>
		</div>
	);
};

export default Input_text;
