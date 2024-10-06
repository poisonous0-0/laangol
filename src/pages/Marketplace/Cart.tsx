import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";
import del from "../../assets/delete.png";
import CompletePurchase from "../../components/Popup/CompletePurchase"; // Ensure the path is correct

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

	useEffect(() => {
		const fetchCartData = async () => {
			try {
				const response = await fetch("http://127.0.0.1:8001/cart/", {
					headers: {
						Authorization: `Token ${token}`,
					},
				});

				// Check response status
				if (response.ok) {
					const data: CartData = await response.json();
					setCartData(data);
				} else {
					console.error("Failed to fetch cart data:", response.statusText);
				}
			} catch (error) {
				console.error("Error fetching cart data:", error);
			}
		};

		fetchCartData();
	}, [token]); // Ensure token is included in dependency array

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleCheckout = async () => {
		if (!cartData) return;

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

			// Check response status
			if (response.ok) {
				const result = await response.json();
				console.log("Checkout successful:", result);
				setCompletePopupOpen(true); // Show the popup on successful checkout
			} else {
				console.error("Checkout failed:", response.statusText);
			}
		} catch (error) {
			console.error("Error during checkout:", error);
		}
	};

	return (
		<div className="Cart">
			{/* Add your cart heading and cart items display here */}

			{/* Checkout Section */}
			<div className="toCheckout mt-16 flex items-center justify-between">
				<div className="checkbox flex flex-col">
					{/* Add your checkbox components here */}
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
		</div>
	);
};

export default Cart;
