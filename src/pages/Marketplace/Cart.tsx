import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";
import del from "../../assets/delete.png";
import CompletePurchase from "../../components/Popup/CompletePurchase";
import WarningPopup from "../../components/Popup/Warning";
import PrivacyPolicy from "../../components/Popup/PrivacyPolicy"; // Import the PrivacyPolicy component
import TermsAndCondition from "../../components/Popup/TermsAndCondition"; // Import the TermsAndCondition component

interface CartItem {
	product_id: number;
	product_name: string;
	quantity: number;
	unit_price: number;
	total_price: number;
}

interface CartData {
	cart_id: number;
	items: CartItem[];
	total_amount: number;
}

const Cart = () => {
	const [formData, setFormData] = useState({
		address: "",
	});

	const [cartData, setCartData] = useState<CartData | null>(null);
	const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
	const token = localStorage.getItem("token");
	const [isCompletePopupOpen, setCompletePopupOpen] = useState(false);
	const [isWarningPopupOpen, setWarningPopupOpen] = useState(false);
	const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false); // State for Privacy Policy popup
	const [isTermsOpen, setTermsOpen] = useState(false); // State for Terms and Conditions popup

	useEffect(() => {
		const fetchCartData = async () => {
			try {
				const response = await fetch("http://127.0.0.1:8001/cart/", {
					headers: {
						Authorization: `Token ${token}`,
					},
				});

				const data: CartData = await response.json();
				setCartData(data);
			} catch (error) {
				console.error("Error fetching cart data:", error);
			}
		};

		fetchCartData();
	}, [token]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleCheckout = async () => {
		if (!cartData) return;

		const termsChecked = document.getElementById(
			"terms-conditions"
		) as HTMLInputElement;
		const privacyChecked = document.getElementById(
			"privacy-policy"
		) as HTMLInputElement;

		if (!formData.address || !termsChecked.checked || !privacyChecked.checked) {
			setWarningPopupOpen(true); // Show warning popup if validation fails
			return;
		}

		const checkoutData = {
			cart_id: cartData.cart_id,
			payment_method: paymentMethod,
			shipping_address: formData.address,
		};

		try {
			const response = await fetch("http://127.0.0.1:8001/cart/CheckoutView/", {
				method: "POST",
				headers: {
					Authorization: `Token ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(checkoutData),
			});

			if (response.ok) {
				const result = await response.json();
				console.log("Checkout successful:", result);
				setCompletePopupOpen(true);
			} else {
				console.error("Checkout failed");
			}
		} catch (error) {
			console.error("Error during checkout:", error);
		}
	};

	return (
		<div className="Cart">
			{/* Cart Content */}
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
							I agree to the{" "}
							<a
								href="#"
								className="text-lime-600 cursor-pointer"
								onClick={() => setTermsOpen(true)} // Open Terms and Conditions popup
							>
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
							<a
								href="#"
								className="text-lime-600 cursor-pointer"
								onClick={() => setPrivacyPolicyOpen(true)} // Open Privacy Policy popup
							>
								Privacy Policy
							</a>
						</label>
					</div>
				</div>
				<div className="button">
					<Button text="Checkout" onClick={handleCheckout} />
				</div>
			</div>

			{/* Complete Purchase Popup */}
			<CompletePurchase
				isOpen={isCompletePopupOpen}
				onClose={() => setCompletePopupOpen(false)}
			/>

			{/* Warning Popup */}
			<WarningPopup
				isOpen={isWarningPopupOpen}
				onClose={() => setWarningPopupOpen(false)}
				message="Enter necessary credentials"
			/>

			{/* Terms and Conditions Popup */}
			<TermsAndCondition
				isOpen={isTermsOpen}
				onClose={() => setTermsOpen(false)}
			/>

			{/* Privacy Policy Popup */}
			<PrivacyPolicy
				isOpen={isPrivacyPolicyOpen}
				onClose={() => setPrivacyPolicyOpen(false)}
			/>
		</div>
	);
};

export default Cart;
