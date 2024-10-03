import React from "react";

interface InputBoxProps {
	label: string;
	type?: string;
}

const Input_text: React.FC<InputBoxProps> = ({ label, type = "text" }) => {
	return (
		<div className="flex flex-col mb-4 w-full md:w-1/2 lg:w-1/3">
			<label className="mb-2 text-lime-200">{label}</label>
			<input
				type={type}
				className="px-4 py-2 border border-lime-500 bg-lime-100 bg-opacity-10 rounded-md focus:outline-none "
			/>
		</div>
	);
};

export default Input_text;
