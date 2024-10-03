import React, { useState } from "react";
import Button from "../Button/Button";
import plus from "../../assets/addItems.png";
import Input_text from "../Input_Text/Input_text";

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
}

const Hiring: React.FC<PopupProps> = ({ isOpen, onClose }) => {
	const [userInfo, setUserInfo] = useState({
		hiringName: "",
		startingTime: "",
		finishingTime: "",
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
			<div className="bg-white p-6 rounded-lg shadow-xl">
				<div className="content flex flex-col items-start space-y-5">
					<div className="input_form">
						<Input_text
							type="date"
							label="Enter Hiring Date"
							name="hiringDate"
							value={userInfo.hiringName}
							onChange={handleInputChange}
						/>
						<Input_text
							type="time"
							label="Starting Time"
							name="startingTime"
							value={userInfo.startingTime}
							onChange={handleInputChange}
						/>
						<Input_text
							type="time"
							label="Finishing Time"
							name="finishingTime"
							value={userInfo.finishingTime}
							onChange={handleInputChange}
						/>
					</div>
					<Button text="Request for Hire" onClick={onClose} />
				</div>
			</div>
		</div>
	);
};

export default Hiring;
