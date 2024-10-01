import Button from "../../components/Button/Button";
import Dropdown from "../../components/DropDownTwo/DropDownTwo";
import Input_text from "../../components/Input_Text/Input_text";
import crops from "../../assets/crop.png";

const Product_Management = () => {
	return (
		<>
			<div className="product_management text-lime-900">
				<div className="top_part">
					<div className="heading text-4xl font-semibold">
						<h2>User Management</h2>
					</div>
				</div>
				<div className="display_portion mt-5 flex items-center space-x-96">
					<div className="left_portion  w-1/2 ">
						<div className="product_selection">
							<Dropdown
								label="Select Product"
								options={[
									{ value: "product1", label: "Product 1" },
									{ value: "product2", label: "Product 2" },
									{ value: "product3", label: "Product 3" },
									{ value: "product4", label: "Product 4" },
								]}
								onChange={(e) => console.log(e)}
							/>
						</div>
						<div className="product_selection mt-5 flex flex-col  space-y-2">
							<div className="price_headline p-2 bg-lime-200 w-max rounded-md border border-lime-600">
								<p>Price Prediction</p>
							</div>
							<div className="input_box">
								<Input_text type="text" label="Enter Weather" />
								<Input_text type="text" label="Enter Soil" />
								<Input_text type="text" label="Enter Area" />
								<div className="price_prediction flex items-center space-x-10">
									<Button className="">Predict price</Button>
									<p>420 BDT</p>
								</div>
							</div>
						</div>
						<div className="product_selection mt-5 flex flex-col  space-y-2">
							<div className="diswcount_headline p-2 bg-lime-200 w-max rounded-md border border-lime-600">
								<p>Add discount</p>
							</div>
							<div className="input_box">
								<Input_text type="text" label="Enter percentage of Discount" />
								<Input_text type="text" label="Enter starting date" />
								<Input_text type="text" label="Enter last date" />
								<div className="price_prediction flex items-center space-x-10">
									<Button className="">Add discount</Button>
									<p>420 BDT</p>
								</div>
							</div>
						</div>
					</div>
					<div className="right_portion flex flex-col items-center justify-center text-lime-900">
						<div className="product_headline w-max p-2 bg-lime-300 border border-lime-900 rounded-md">
							<h2>Product List</h2>
						</div>
						<div className="product_info flex flex-col items-center justify-center">
							<img src={crops} className="w-60" />
							<p>Tomato</p>
							<p>Vegetables</p>
							<p>Prediccted price: 420 BDT</p>
							<p>Discounted Price: N/A</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product_Management;
