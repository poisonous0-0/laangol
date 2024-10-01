import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingButton from "../Button_2/Button_2";
import Cart from "../../assets/cart.png";
import Chat from "../../assets/chat.png";
import Crop from "../../assets/crop.png";
import Helpline from "../../assets/helpline.png";
import Labor from "../../assets/labor.png";
import Marketplace from "../../assets/marketplace.png";
import Storehouse from "../../assets/storehouse.png";

// Constants
const menuItems = [
	{ img: Marketplace, text: "Marketplace", path: "marketplace" },
	{ img: Crop, text: "Crop Maintenance", path: "crop_maintenance" },
	{ img: Labor, text: "Labor Management", path: "labor" },
	{ img: Storehouse, text: "Storehouse Rental", path: "storehouse" },
	{ img: Helpline, text: "AgroAegis", path: "agroaegis" },
];

// Sidebar Component
const Sidebar = () => {
	const [expanded, setExpanded] = useState(false);

	const handleMouseEnter = () => setExpanded(true);
	const handleMouseLeave = () => setExpanded(false);

	return (
		<div
			className={`h-full bg-lime-100 rounded-md transition-all duration-500 ease-in-out transform ${
				expanded ? "p-5 w-56 sm:w-60 md:w-64 lg:w-80 z-10" : "w-14"
			} flex flex-col items-start justify-between`} // Ensure overflow-hidden to prevent scrolling
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Middle Part */}
			<div className="middle-part flex flex-col gap-y-6 text-lime-700 font-medium">
				{menuItems.map((item, index) => (
					<Link
						to={item.path}
						key={index}
						className={`transition-all duration-300 ease-in-out flex items-center gap-x-3 md:gap-x-5 p-2 hover:bg-lime-200 rounded-lg ${
							expanded ? "w-full" : "w-14"
						}`}
					>
						<img
							src={item.img}
							alt={item.text}
							className="w-6 sm:w-8 md:w-10"
						/>
						{expanded && (
							<p className="text-sm sm:text-md md:text-base lg:text-base">
								{item.text}
							</p>
						)}
					</Link>
				))}
			</div>

			{/* Bottom Part */}
			<div className="bottom-part mb-4 text-lime-900">
				<div className="flex flex-col gap-y-6">
					<Link to="cart">
						<ShoppingButton className="flex items-center gap-x-3 sm:gap-x-6">
							<img src={Cart} alt="Chat" className="w-6 sm:w-8 md:w-10" />
							{expanded && (
								<p className="text-sm sm:text-md md:text-base lg:text-base">
									Cart
								</p>
							)}
						</ShoppingButton>
					</Link>

					<Link to="">
						<ShoppingButton className="flex items-center gap-x-3 sm:gap-x-6">
							<img src={Chat} alt="Chat" className="w-6 sm:w-8 md:w-10" />
							{expanded && (
								<p className="text-sm sm:text-md md:text-base lg:text-base">
									chat
								</p>
							)}
						</ShoppingButton>
					</Link>
					<p
						className={`fractor text-xs sm:text-sm md:text-base text-lime-500 ${
							expanded ? "opacity-100" : "opacity-0"
						}`}
					>
						Laangol 2024. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
