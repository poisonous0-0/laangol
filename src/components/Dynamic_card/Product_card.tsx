import React from "react";
import Dynamic_button from "../Button/Dynamic_button";
import defaultSellerImage from "../../assets/user.png"; // Path to the default seller image

interface ProductCardProps {
	imageSrc: string;
	productName: string;
	sellerName: string;
	price: number;
	sellerImage?: string; // Optional seller image
}

const Product_card: React.FC<ProductCardProps> = ({
	imageSrc,
	productName,
	sellerName,
	price,
	sellerImage, // Include sellerImage prop
}) => {
	return (
		<div className="product_card w-max flex flex-col space-y-5 items-center justify-between">
			<div className="product_card_image">
				<img
					src={imageSrc}
					alt={productName}
					className="w-60 h-w-60 min-w-60 min-h-60 object-cover rounded-full border border-lime-200"
				/>
			</div>
			<div className="product_card_content flex flex-col items-center text-lime-700">
				<h1>{productName}</h1>
				<p>Seller: {sellerName}</p>
				<Dynamic_button
					initialLabel={price.toString() + "/KG BDT "}
					hoverLabel="Add to cart"
				/>
			</div>
		</div>
	);
};

export default Product_card;
