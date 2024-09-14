import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingButton from "../Button_2/Button_2";
import Laangol from "../../assets/laangol.png";
import Cart from "../../assets/cart.png";
import Chat from "../../assets/chat.png";
import Crop from "../../assets/crop.png";
import Helpline from "../../assets/helpline.png";
import Labor from "../../assets/labor.png";
import Marketplace from "../../assets/marketplace.png";
import Storehouse from "../../assets/storehouse.png";

// Constants
const menuItems = [
	{ img: Marketplace, text: "Marketplace", path: "/" },
	{ img: Crop, text: "Crop Maintenance", path: "/crop_maintainence" },
	{ img: Labor, text: "Labor Management", path: "/marketplace" },
	{ img: Storehouse, text: "Storehouse Rental", path: "/marketplace" },
	{ img: Helpline, text: "Crop Suggestions", path: "/marketplace" },
];

// Component
const Sidebar = () => {
	const [expanded, setExpanded] = useState(false);

	const handleMouseEnter = () => setExpanded(true);
	const handleMouseLeave = () => setExpanded(false);

	return (
		<div className="h-screen sm:max-w-60 lg:max-w-72 w-full pb-20 flex flex-col items-center justify-between bg-white">
			{/* Top Part */}
			<div className="top-part">
				<img
					src={Laangol}
					alt="Laangol Logo"
					className="w-32 sm:w-40 lg:w-56"
				/>
			</div>

			{/* Middle Part */}
			<div
				className={`middle-part flex flex-col gap-y-6 text-lime-700 font-medium transition-all duration-300`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{menuItems.map((item, index) => (
					<Link
						to={item.path} // Add path for the specific page
						key={index}
						className={`transition-all duration-500 ease-in-out flex items-center gap-x-3 sm:gap-x-5 rounded-lg p-2 hover:bg-lime-200 ${
							expanded ? "w-full sm:w-60 lg:w-72" : "w-14 sm:w-16"
						}`}
						style={{ whiteSpace: "nowrap" }}
					>
						<img src={item.img} alt={item.text} className="w-8 sm:w-10" />
						{expanded && (
							<p className="text-sm sm:text-md lg:text-lg">{item.text}</p>
						)}
					</Link>
				))}
			</div>

			{/* Bottom Part */}
			<div className="bottom-part">
				<div className="m-3 flex flex-col gap-y-6">
					<ShoppingButton className="flex items-center gap-x-3 sm:gap-x-6">
						<img src={Chat} alt="Chat" className="w-8 sm:w-10" />
						<p className="hidden sm:block pr-16 sm:pr-24">Chat</p>
					</ShoppingButton>
					<ShoppingButton className="flex items-center gap-x-3 sm:gap-x-6">
						<img src={Cart} alt="Cart" className="w-8 sm:w-10" />
						<p>Cart</p>
					</ShoppingButton>
					<p className="text-xs sm:text-sm text-lime-500">
						Laangol 2024. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
