import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";
import { Link } from "react-router-dom";

const Adding_items = () => {
	return (
		<>
			<div className="heading text-2xl sm:text-3xl md:text-4xl font-semibold text-lime-900 text-start">
				<h1>Marketplace</h1>
			</div>

			<div className="form_part flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
				<div className="subheading flex items-center justify-center w-full">
					<h2 className="p-2 rounded-md w-max bg-lime-800 text-lime-900 text-2xl md:text-3xl font-normal">
						Product Management
					</h2>
				</div>

				<form
					action=""
					className="flex flex-col items-center w-full md:items-start space-y-4 md:space-y-2"
				>
					<Input_text label="Product Name" />
					<Input_text label="Product Description" />
					<Input_text label="Product Quantity" />
					<Input_text label="Product Price" />
					<label className="text-lime-900">Upload your image</label>
					<label
						htmlFor="file-input"
						className="cursor-pointer px-4 py-2 bg-lime-800 text-black rounded-md hover:bg-lime-700"
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

			<div className="suggested_price flex flex-col items-start space-y-3 mt-6 w-full">
				<h2 className="text-lime-900 text-lg md:text-2xl">
					Preferred/ Best price:
				</h2>
				<div className="btn_items flex flex-wrap items-center justify-start space-x-4 md:space-x-6">
					<Button className="py-2 px-4 md:py-3 md:px-5">40 KG/BDT</Button>
					<Button className="py-2 px-4 md:py-3 md:px-5">50 KG/BDT</Button>
				</div>
			</div>

			<p className="mt-4 p-2 w-full sm:w-max bg-lime-100 border border-lime-400 rounded-md text-lime-900 text-sm md:text-base">
				The best price is based on market value as well as the determined
				government price.
			</p>

			<div className="mt-4 submission flex flex-col items-center space-y-5 w-full">
				<Link to="/product_info">
					<Button className="w-full md:w-auto bg-lime-800 text-lime-900 px-4 py-2">
						Add your Product
					</Button>
				</Link>
				<Link to="/marketplace2">
					<Button className="w-full md:w-auto bg-lime-800 text-lime-900 px-4 py-2">
						Visit Marketplace
					</Button>
				</Link>
			</div>
		</>
	);
};

export default Adding_items;
