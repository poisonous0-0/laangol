import React from "react";
import Text_changing_Button from "../Text_changing_Button/Text_changing_Button";

interface ProductCardProps {
	imageSrc: string;
	productName: string;
	sellerName: string;
	price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
	imageSrc,
	productName,
	sellerName,
	price,
}) => {
	return (
		<div className="product_card w-max flex flex-col space-y-3 items-center justify-center">
			<div className="product_card_image">
				<img
					src={imageSrc}
					alt={productName}
					className="w-56 bg-lime-50 border-2 rounded-md border-lime-100 p-3"
				/>
			</div>
			<div className="product_card_content flex flex-col items-center text-lime-700">
				<h1>{productName}</h1>
				<p>Seller: {sellerName}</p>
				<Text_changing_Button
					initialLabel={price.toString() + "/KG BDT "}
					hoverLabel="Add to cart"
				/>
			</div>
		</div>
	);
};

export default ProductCard;
