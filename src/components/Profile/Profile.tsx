import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
	label: string;
	path?: string;
	action?: () => void;
}

interface ProfileProps {
	imageSrc: string;
	menuItems: MenuItem[];
	buttonClassName?: string;
	dropdownClassName?: string;
}

const Profile: React.FC<ProfileProps> = ({
	imageSrc,
	menuItems,
	buttonClassName = "p-4 bg-lime-800 rounded-full hover:bg-lime-900", // Default styles
	dropdownClassName = "w-48 bg-white shadow-lg rounded-lg py-2", // Default styles
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	// Function to open and close the dropdown on hover
	const handleMouseEnter = () => setIsOpen(true);
	const handleMouseLeave = () => setIsOpen(false);

	return (
		<div
			className="relative inline-block"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Button with Image */}
			<button className={`flex items-center ${buttonClassName}`}>
				<img src={imageSrc} alt="profile button" className="w-5" />
			</button>

			{/* Dropdown Menu with Sliding Effect */}
			{isOpen && (
				<ul
					className={`absolute right-0 mt-2 ${dropdownClassName} transform transition-transform duration-300 ease-out z-50 translate-y-0 opacity-100`}
				>
					{menuItems.map((item, index) => (
						<li
							key={index}
							className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
							onClick={() => {
								setIsOpen(false);
								if (item.path) navigate(item.path);
								if (item.action) item.action();
							}}
						>
							{item.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Profile;
