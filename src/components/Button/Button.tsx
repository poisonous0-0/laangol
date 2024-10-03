import React from "react";

interface ButtonProps {
	text: string;
	onClick?: () => void;
	bgColor?: string;
	hoverBgColor?: string;
	textColor?: string;
	hoverTextColor?: string;
	px?: string; // Padding on the x-axis
	py?: string; // Padding on the y-axis
	width?: string; // Width of the button
}

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	px = "px-4", // Default x-axis padding
	py = "py-2", // Default y-axis padding
	width = "w-auto", // Default width
}) => {
	return (
		<button
			onClick={onClick}
			className={`bg-lime-100 text-lime-200 font-normal text-lg rounded-lg transition duration-200 ease-in-out transform hover:bg-lime-200 hover:text-lime-50 ${px} ${py} ${width} `}
		>
			{text}
		</button>
	);
};

export default Button;
