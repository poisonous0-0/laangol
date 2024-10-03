import React from "react";

interface Option {
	value: string;
	label: string;
}

interface DropdownProps {
	label: string;
	options: Option[];
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onChange }) => {
	return (
		<form className="w-max">
			<label htmlFor="dropdown" className="block mb-2 text-sm font-medium">
				{label}
			</label>
			<select
				id="dropdown"
				className="bg-lime-100 bg-opacity-10 border border-lime-100  text-lime-900 text-sm rounded-md block w-full p-2.5"
				onChange={onChange}
			>
				<option value="" disabled>
					Choose an option
				</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</form>
	);
};

export default Dropdown;
