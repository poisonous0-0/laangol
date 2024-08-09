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
  { img: Marketplace, text: "Marketplace" },
  { img: Crop, text: "Crop Maintenance" },
  { img: Labor, text: "Labor Management" },
  { img: Storehouse, text: "Storehouse Rental" },
  { img: Helpline, text: "Crop Suggestions" },
];

// Component
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  return (
    <div className="ml-7 pt-7 h-screen max-w-60 pb-20 flex flex-col items-center justify-between">
      {/* Top Part */}
      <div className="top-part">
        <img src={Laangol} alt="Laangol Logo" className="w-56" />
      </div>

      {/* Middle Part */}
      <div
        className={`middle-part m-3 flex flex-col gap-y-6 text-lime-700 font-medium`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "width 2s ease-in-out" }}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            className={`transition-all duration-700 ease-in-out flex items-center gap-x-5 rounded-lg p-2 hover:bg-lime-200 ${
              expanded ? "w-60" : "w-14"
            }`}
            style={{ whiteSpace: "nowrap" }}
          >
            <img src={item.img} alt={item.text} className="w-10" />
            {expanded && <p>{item.text}</p>}
          </a>
        ))}
      </div>

      {/* Bottom Part */}
      <div className="bottom-part">
        <div className="m-3 flex flex-col gap-y-6">
          <ShoppingButton className="flex items-center gap-x-6">
            <img src={Chat} alt="Chat" className="w-10" />
            <p className="pr-24">Chat</p>
          </ShoppingButton>
          <ShoppingButton className="flex items-center gap-x-6">
            <img src={Cart} alt="Cart" className="w-10" />
            <p>Cart</p>
          </ShoppingButton>
          <p className="text-sm text-lime-500">
            Laangol 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
