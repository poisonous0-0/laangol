import React from "react";
import Button from "../Button/Button";

interface ShortCardProps {
	imageSrc: string;
	name: string;
	rate: string;
}

const ShortCard: React.FC<ShortCardProps> = ({ imageSrc, name, rate }) => {
	return (
		<div className="short_card flex flex-col items-center justify-center space-y-2">
			<div className="card_image w-36 p-2 bg-lime-100 rounded-md">
				<img src={imageSrc} alt={`${name}'s profile`} />
			</div>
			<div className="labor_name text-base">
				<p>{name}</p>
			</div>
			<Button>{rate}</Button>
		</div>
	);
};

export default ShortCard;
