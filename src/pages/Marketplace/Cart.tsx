import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";

const Cart = () => {
	// Add state to manage input values (e.g., shipping address)
	const [formData, setFormData] = useState({
		Address: "",
	});

	// Handle input changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<div className="Cart">
				<div className="headings w-max text-lime-900">
					<h1 className="text-4xl">Cart</h1>
				</div>

				{/* Additional Info */}
				<div className="additional_info mt-6 flex items-baseline space-x-5">
					<div className="shipping_address flex flex-col space-y-4">
						<div className="heading w-max px-3 py-1 rounded-md bg-lime-100 text-lime-200">
							<h2>Shipping Address</h2>
						</div>
						<Input_text
							type="text"
							name="address"
							value={formData.Address}
							onChange={handleInputChange}
							widthClass="w-full"
							readOnly={false}
						/>
					</div>

					{/* Payment Method */}
					<div className="payment_method flex flex-col space-y-4">
						<div className="heading w-max px-3 py-1 rounded-md bg-lime-100 text-lime-200">
							<h2>Payment Method</h2>
						</div>
						<div className="methods flex space-x-5 bg-lime-100 bg-opacity-10 p-3 rounded-md border border-lime-400 text-lime-900">
							<div className="flex items-center">
								<input
									id="cash-on-delivery"
									type="radio"
									value="Cash on Delivery"
									name="paymentMethod"
									className="w-4 h-4 accent-lime-800 bg-gray-100 border-white"
									defaultChecked
								/>
								<label
									htmlFor="cash-on-delivery"
									className="ms-2 font-medium text-lime-900"
								>
									Cash on Delivery
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="bkash"
									type="radio"
									value="Bkash"
									name="paymentMethod"
									className="w-4 h-4 accent-lime-800 bg-gray-100 border-white"
								/>
								<label
									htmlFor="bkash"
									className="ms-2 font-medium text-lime-900"
								>
									Bkash
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* Cart */}
				<div className="cart mt-5">
					<div className="heading w-max px-3 py-2 rounded-md text-lime-200 bg-lime-100">
						<h2 className="text-2xl">Shopping Cart</h2>
					</div>
					<div className="mt-4 items flex flex-col justify-between">
						<table className="text-center">
							<thead>
								<tr className="p-3 w-max rounded-md bg-lime-100 bg-opacity-10 border border-lime-100 text-lime-900">
									<th>Product</th>
									<th>Quantity</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Potato</td>
									<td>25KG</td>
									<td>2000 BDT</td>
								</tr>
								<tr>
									<td>Tomato</td>
									<td>10KG</td>
									<td>1000 BDT</td>
								</tr>
								<tr>
									<td>Onion</td>
									<td>20KG</td>
									<td>1500 BDT</td>
								</tr>
								<tr className="bg-lime-100 bg-opacity-10 border border-lime-100 leading-10">
									<td>Sub Total</td>
									<td></td>
									<td>4500 BDT</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Checkout Section */}
				<div className="toCheckout mt-16 flex items-center justify-between">
					<div className="checkbox flex flex-col">
						<div className="flex items-center">
							<input
								id="terms-conditions"
								type="checkbox"
								value=""
								className="w-4 h-4 accent-lime-800 bg-gray-100 dark:bg-white"
							/>
							<label htmlFor="terms-conditions" className="ms-2 text-lime-900">
								I agree to the terms and conditions{" "}
								<a href="#" className="text-lime-600">
									Terms and Conditions
								</a>
							</label>
						</div>
						<div className="flex items-center">
							<input
								id="privacy-policy"
								type="checkbox"
								value=""
								className="w-4 h-4 accent-lime-800 bg-gray-100 dark:bg-white"
							/>
							<label htmlFor="privacy-policy" className="ms-2 text-lime-900">
								I have read and agree to the{" "}
								<a href="#" className="text-lime-600">
									Privacy Policy of Laangol
								</a>
							</label>
						</div>
					</div>
					<div className="button">
						<Button text="Checkout" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
