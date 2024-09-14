import React, { useState } from "react";

interface QuantitySelectorProps {
	initialQuantity?: number;
	min?: number;
	max?: number;
}

const Selector: React.FC<QuantitySelectorProps> = ({
	initialQuantity = 0,
	min = 0,
	max = 100,
}) => {
	const [quantity, setQuantity] = useState<number>(initialQuantity);

	const increase = () => {
		if (quantity < max) {
			setQuantity(quantity + 1);
		}
	};

	const decrease = () => {
		if (quantity > min) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className="flex items-center space-x-4">
			<button
				className="px-4 py-2 bg-lime-800 hover:bg-lime-900 text-white rounded"
				onClick={decrease}
				disabled={quantity <= min}
			>
				-
			</button>

			<div className="text-2xl text-lime-900">{quantity}</div>

			<button
				className="px-4 py-2 bg-lime-800 hover:bg-lime-900 text-white rounded"
				onClick={increase}
				disabled={quantity >= max}
			>
				+
			</button>
		</div>
	);
};

export default Selector;
