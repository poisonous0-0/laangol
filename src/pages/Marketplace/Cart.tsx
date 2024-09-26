import Button from "../../components/Button/Button";

const Cart = () => {
	return (
		<>
			<div className="Cart">
				<div className="headings w-max text-lime-900">
					<h1 className="text-4xl">Cart</h1>
				</div>
				<div className="additional_info mt-6 flex items-baseline space-x-5">
					<div className="shipping_address flex flex-col space-y-4">
						<div className="heading w-max px-3 py-1 rounded-md bg-lime-800 text-lime-900">
							<h2>Shipping Address</h2>
						</div>
						<div className="address bg-lime-100 p-3 rounded-md border border-lime-400 text-lime-900">
							<p>
								164/2, Malibagh Shahi Mosque, Mouchak, Dhaka 1217, Bangladesh{" "}
							</p>
						</div>
					</div>
					<div className="payment_method flex flex-col space-y-4">
						<div className="heading w-max px-3 py-1 rounded-md bg-lime-800 text-lime-900">
							<h2>Payment method</h2>
						</div>
						<div className="methods flex space-x-5 bg-lime-100 p-3 rounded-md border border-lime-400 text-lime-900">
							<div className="flex items-center">
								<input
									checked
									id="default-radio-2"
									type="radio"
									value=""
									name="default-radio"
									className="w-4 h-4 accent-lime-800  bg-gray-100 border-white  dark:ring-offset-white   dark:border-white"
								/>
								<label
									htmlFor="default-radio-2"
									className="ms-2  font-medium text-lime-900"
								>
									Cash on Delivery
								</label>
							</div>
							<div className="flex items-center">
								<input
									checked
									id="default-radio-2"
									type="radio"
									value=""
									name="default-radio"
									className="w-4 h-4 accent-lime-800  bg-gray-100 border-white  dark:ring-offset-white  dark:bg-white dark:border-white"
								/>
								<label
									htmlFor="default-radio-2"
									className="ms-2 font-medium text-lime-900"
								>
									Bkash
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="cart mt-5 ">
					<div className="heading w-max px-3 py-2 rounded-md text-lime-900 bg-lime-800">
						<h2 className="text-2xl">Shopping Cart</h2>
					</div>
					<div className="mt-4 items flex flex-col justify-between">
						<table className=" text-center">
							<tr className="p-3 w-max rounded-md bg-lime-100 text-lime-900">
								<th>Product</th>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
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
							<tr className=" bg-lime-100 leading-10">
								<td>Sub Total</td>
								<td></td>
								<td>4500 BDT</td>
							</tr>
						</table>
					</div>
				</div>

				<div className="toCheckout mt-16 flex items-center justify-between">
					<div className="checkbox flex flex-col">
						<div className="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								className="w-4 h-4 accent-lime-800 bg-gray-100 dark:bg-white"
							/>
							<label htmlFor="default-checkbox" className="ms-2  text-lime-900">
								I agree to the terms and conditions{" "}
								<a href="" className="text-lime-600">
									Terms and Conditions
								</a>
							</label>
						</div>
						<div className="flex items-center">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								className="w-4 h-4 accent-lime-800 bg-gray-100 dark:bg-white"
							/>
							<label htmlFor="default-checkbox" className="ms-2  text-lime-900">
								I have read and agree to the{" "}
								<a href="" className="text-lime-600">
									Privacy policy of Laangol
								</a>
							</label>
						</div>
					</div>
					<div className="button">
						<Button className="text-lime-900">Checkout</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
