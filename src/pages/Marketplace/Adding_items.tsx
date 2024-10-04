import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";
import { Link } from "react-router-dom";

const Adding_items = () => {
	// State for form inputs
	const [formData, setFormData] = useState({
		productName: "",
		productDescription: "",
		productQuantity: "",
		productPrice: "",
	});

	// Handle input change
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value, // Update the correct field dynamically
		});
	};

	return (
		<>
			<div className="heading flex items-center justify-between  text-2xl sm:text-3xl md:text-4xl font-semibold text-lime-900 text-start">
				<h1>Marketplace</h1>
				<Link to="inventory" className="text-base">
					<Button text="Seller Profile" px="px-4" />
				</Link>
			</div>

			<div className="form_part flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
				<div className="subheading flex items-center justify-center w-full">
					<h2 className="p-2 rounded-md w-max bg-lime-100 text-lime-200 text-2xl md:text-3xl font-normal">
						Product Management
					</h2>
				</div>

				<form className="flex flex-col items-center w-full md:items-start space-y-4 md:space-y-2">
					{/* Input fields with state */}

					<Input_text
						label="Product Name"
						name="productName"
						value={formData.productName}
						onChange={handleInputChange}
					/>
					<Input_text
						label="Product Description"
						name="productDescription"
						value={formData.productDescription}
						onChange={handleInputChange}
					/>
					<Input_text
						type="number"
						label="Product Quantity"
						name="productQuantity"
						value={formData.productQuantity}
						onChange={handleInputChange}
					/>
					<Input_text
						type="number"
						label="Product Price"
						name="productPrice"
						value={formData.productPrice}
						onChange={handleInputChange}
					/>

					{/* Image upload */}
					<label className="text-lime-200">Upload your image</label>
					<label
						htmlFor="file-input"
						className="cursor-pointer px-4 py-2 bg-lime-100 text-lime-200 rounded-md transition duration-200 ease-in-out transform hover:bg-lime-200 hover:text-white"
					>
						Choose File
					</label>
					<input
						type="file"
						id="file-input"
						name="ImageStyle"
						className="hidden"
					/>
				</form>
			</div>

			<div className="suggested_price flex items-center space-x-3 mt-6 w-full">
				<h2 className="text-lime-900 text-lg md:text-2xl">
					Preferred/ Best price:
				</h2>
				<Button text="Apply Smart price Prediction" />
			</div>

			<p className="mt-4 p-2 w-full sm:w-max bg-lime-100 bg-opacity-10 border border-lime-400 rounded-md text-lime-900 text-sm md:text-base">
				The best price is based on market value as well as the determined
				government price.
			</p>

			<div className="mt-4 submission flex flex-col items-center space-y-5 w-full">
				<Link to="/dashboard/marketplace/product_info">
					<Button text="Add your Product" />
				</Link>
				<Link to="/dashboard/marketplace/marketplace2">
					<Button text="Visit Marketplace" />
				</Link>
			</div>
		</>
	);
};

export default Adding_items;
