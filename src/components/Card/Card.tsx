import React from "react";
import Down from "../../assets/arrowDown.png";

interface CardProps {
	imageSrc: string;
	title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
	return (
		<div className="relative h-128 w-96 border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
			<img
				src={imageSrc}
				alt={title}
				className="w-full h-full object-cover object-center"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center gap-y-6 bg-lime-800 bg-opacity-50 text-lime-100 p-4 italic">
				<h3 className="text-5xl font-medium">{title}</h3>
				<img src={Down} alt="" className="w-10 h-10" />
			</div>
		</div>
	);
};

export default Card;
