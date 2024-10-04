import React, { useState } from "react";
import Button from "../Button/Button";
import Input_text from "../Input_Text/Input_text";

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
}

const HiringStore: React.FC<PopupProps> = ({ isOpen, onClose }) => {
	const [userInfo, setUserInfo] = useState({
		finishingDate: "",
		startingDate: "",
		sqft: "",
	});

	// Handle input change
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-lime-100 bg-opacity-10">
			<div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
				<div className="content flex flex-col items-center space-y-5">
					<div className="input_form w-full space-y-4">
						<Input_text
							type="date"
							label="Starting Date"
							name="startingDate"
							value={userInfo.startingDate}
							onChange={handleInputChange}
							widthClass="w-full"
						/>
						<Input_text
							type="date"
							label="Finishing Date"
							name="finishingDate"
							value={userInfo.finishingDate}
							onChange={handleInputChange}
							widthClass="w-full"
						/>
						<Input_text
							type="number"
							label="Enter the sqft"
							name="sqft"
							value={userInfo.sqft}
							onChange={handleInputChange}
							widthClass="w-full"
						/>
					</div>
					<Button text="Request for Rent" onClick={onClose} />
				</div>
			</div>
		</div>
	);
};

export default HiringStore;
