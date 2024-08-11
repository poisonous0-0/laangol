import React, { useState } from "react";

interface DropdownProps {
	title: string;
	children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="w-96 border-lime-700 rounded-lg border-2">
			<div
				className="flex justify-between items-center p-3 cursor-pointer border-b"
				onClick={toggleDropdown}
			>
				<span className="text-lg">{title}</span>
				<div className="w-6 h-6 flex justify-center items-center bg-green-700 rounded-full">
					<button className="text-lime-200 text-lg font-bold">
						{isOpen ? "-" : "+"}
					</button>
				</div>
			</div>
			<div
				className={`transition-transform transform-gpu origin-top duration-500 ease-in-out ${
					isOpen ? "scale-y-100 p-3" : "scale-y-0 p-0"
				}`}
				style={{ transformOrigin: "top" }}
			>
				<div className={`text-sm ${isOpen ? "block" : "hidden"}`}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
