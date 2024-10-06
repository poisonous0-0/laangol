import { useLocation } from "react-router-dom"; // Import useLocation to receive state
import Button from "../../components/Button/Button"; // Import Button component

const Product_description = () => {
	const location = useLocation();
	const product = location.state?.product; // Access the product data from the state

	// Fallback for when product data isn't available
	if (!product) {
		return <p>No product data available</p>;
	}

	return (
		<>
			<div className="heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-lime-900 text-start">
				<h1>Marketplace</h1>
			</div>
			<div className="product_content mt-8 md:mt-10 lg:mt-12">
				<h2 className="p-2 rounded-md w-max bg-lime-100 text-lime-200 text-xl md:text-2xl lg:text-3xl font-normal">
					Product Page
				</h2>
				<div className="product_description mt-5 md:mt-7 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
					<div className="product_img">
						<img
							src={product.image}
							alt={product.name}
							className="sm:w-60 md:w-60 h-w-60 min-w-60 min-h-60 object-cover rounded-full border border-lime-200 bg-lime-200 p-1 "
						/>
					</div>
					<div className="product_details flex flex-col space-y-4 lg:w-1/2">
						<h3 className="title text-2xl md:text-3xl font-semibold text-lime-900">
							{product.name}
						</h3>
						<p className="price w-max p-2 md:p-3 rounded-md bg-lime-100 text-lime-200">
							{product.price}/KG BDT
						</p>
						<div className="category flex flex-wrap items-start space-x-2">
							<p className="p-1 bg-lime-100 bg-opacity-10 border border-lime-100 rounded-md text-lime-200">
								{product.category}
							</p>
							{/* More details */}
						</div>
						<p className="description text-base md:text-lg text-lime-200">
							{product.description}
						</p>
						{/* Seller info */}
						<div className="seller_info">
							<a href="#" className="flex items-center space-x-4">
								<img
									src={product.sellerImage}
									alt=""
									className="w-8 md:w-10 rounded-lg"
								/>
								<p className="text-base md:text-lg text-lime-200">
									{product.seller}
								</p>
							</a>
						</div>
						<div className="btn_panel flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
							<Button text="Add to cart" />
							<Button text="Chat with Seller" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product_description;
