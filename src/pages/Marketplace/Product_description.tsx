import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import Selector from "../../components/Button/Selector";
import Product_card from "../../components/Dynamic_card/Product_card";

const Product_description = () => {
	const location = useLocation();
	const product = location.state?.product;

	// Fallback for when product data isn't available
	if (!product) {
		return <p>No product data available</p>;
	}

	// Mocking product cards with an array
	const productCards = Array(5).fill(product);

	return (
		<>
			{/* Header Section */}
			<div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-lime-900 text-left">
				<h1>Marketplace</h1>
			</div>

			{/* Product Section */}
			<div className="mt-8 md:mt-10 lg:mt-12">
				<h2 className="p-2 rounded-md w-max bg-lime-100 text-lime-900 text-xl md:text-2xl lg:text-3xl font-normal">
					Product Page
				</h2>

				<div className="mt-5 md:mt-7 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
					{/* Product Image */}
					<div className="flex-shrink-0 w-full sm:w-auto">
						<img
							src={product.image}
							alt={`Image of ${product.name}`}
							className="w-60 h-w-60 min-w-60 min-h-60 h-60 object-cover rounded-full border-lime-200 bg-lime-200 p-1"
						/>
					</div>

					{/* Product Details */}
					<div className="flex flex-col space-y-4 w-full lg:w-1/2">
						<h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-lime-900">
							{product.name}
						</h3>
						<p className="w-max p-2 md:p-3 rounded-md bg-lime-100 text-lime-900">
							{product.price}/KG BDT
						</p>

						<div className="flex flex-wrap items-start space-x-2">
							<p className="p-1 bg-lime-100 bg-opacity-10 border border-lime-100 rounded-md text-lime-900">
								{product.category}
							</p>
						</div>

						<p className="text-base md:text-lg text-lime-700">
							{product.description}
						</p>
						{/* Seller info */}
						<div className="seller_info flex items-center space-x-2">
							<img
								src={product.sellerImage}
								alt="Seller"
								className="w-8 md:w-10 rounded-lg"
							/>
							<p className="text-base md:text-lg text-lime-200">
								{product.seller}
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
							<Selector />
							<Button text="Add to cart" />
							<Button text="Chat with Seller" />
						</div>

						{/* More Products Section */}
					</div>
				</div>
				<div className="More_from_Seller my-3 text-center">
					<h1 className="text-lime-200 px-3 py-2 text-2xl font-semibold">
						More From similar Seller
					</h1>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-6 bg-slate-100 p-4 rounded-lg">
					{productCards.map((item, index) => (
						<Product_card
							key={index}
							imageSrc={item.image}
							productName={item.name}
							sellerName={item.seller}
							price={item.price}
							sellerImage={item.sellerImage}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Product_description;
