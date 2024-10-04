import React from "react";

interface ProductCardProps {
	productName: string;
	productPrice: string;
	imageUrl?: string;
	onEdit?: () => void; // Callback when the edit icon is clicked
}

const Inventory: React.FC<ProductCardProps> = ({
	productName,
	productPrice,
	imageUrl,
	onEdit,
}) => {
	return (
		<div className="w-52 p-4 rounded-md text-center relative">
			<div className="relative w-full pt-[100%] bg-gray-200">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={productName}
						className="absolute top-0 left-0 w-full h-full object-cover"
					/>
				) : (
					<div className="absolute top-0 left-0 w-full h-full bg-gray-100 border-2 rounded-md border-lime-400"></div>
				)}
				<div
					className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer shadow-sm"
					onClick={onEdit}
				>
					✏️
				</div>
			</div>
			<h3 className="mt-3 text-olive-600 font-semibold">{productName}</h3>
			<div className="bg-lime-400 text-white px-4 py-2 mt-3 rounded-md">
				{productPrice}
			</div>
		</div>
	);
};

export default Inventory;
