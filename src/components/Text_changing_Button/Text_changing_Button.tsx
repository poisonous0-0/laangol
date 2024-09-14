import React, { useState } from "react";

interface ButtonProps {
	initialLabel: string;
	hoverLabel: string;
	onClick?: () => void;
}

const HoverButton: React.FC<ButtonProps> = ({
	initialLabel,
	hoverLabel,
	onClick,
}) => {
	const [label, setLabel] = useState(initialLabel);

	return (
		<button
			className={` mt-2 px-4 py-2 bg-lime-600 text-white rounded transition duration-300 ease-in-out transform hover:bg-lime-700 hover:scale-105 hover:shadow-lg`}
			onMouseEnter={() => setLabel(hoverLabel)}
			onMouseLeave={() => setLabel(initialLabel)}
			onClick={onClick}
		>
			<span className="transition-all duration-300 ease-in-out">{label}</span>
		</button>
	);
};

export default HoverButton;
