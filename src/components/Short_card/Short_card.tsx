import React from "react";

interface ShortCardProps {
	imageSrc: string;
	heading: string;
}

const ShortCard: React.FC<ShortCardProps> = ({ imageSrc, heading }) => {
	return (
		<div className="short_card bg-lime-50 w-max px-20 py-5 flex flex-col items-center rounded-lg border-2 border-lime-100">
			<div className="card_image">
				<img src={imageSrc} className="w-24" />
			</div>
			<div className="card_headings font-sans leading-5 text-lg text-lime-800">
				<p>{heading}</p>
			</div>
		</div>
	);
};

export default ShortCard;
