import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.png";

const Profile: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate(); // Use navigate hook

	return (
		<div className="relative inline-block">
			{/* Button with Image */}
			<button
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
				className="flex items-center p-4 bg-lime-800 rounded-full hover:bg-lime-900"
			>
				<img src={user} alt="button image" className="w-5" />
			</button>

			{/* Dropdown Menu with Sliding Effect */}
			<ul
				className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transform transition-transform duration-300 ease-out z-50 ${
					isOpen
						? "translate-y-0 opacity-100"
						: "translate-y-4 opacity-0 pointer-events-auto"
				}`}
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
			>
				<li
					className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
					onClick={() => navigate("user")} // Navigate to User page
				>
					Profile
				</li>
				<li
					className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
					onClick={() => navigate("/")}
				>
					Logout
				</li>
			</ul>
		</div>
	);
};

export default Profile;
