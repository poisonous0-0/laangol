import React, { useState } from "react";
import Button from "../Button/Button";
import Input_text from "../Input_Text/Input_text";

interface Laborer {
	laborer_name: string;
	region_name: string;
	experience: number;
	specialties: string;
	demand_fees: number;
	status: string;
	labour_id: number;
	current_hire_end_date: string | null;
	image_url: string | null;
}

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	laborer: Laborer | null; // Accept laborer prop
}

const HiringLabor: React.FC<PopupProps> = ({ isOpen, onClose, laborer }) => {
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

	// Close popup if clicked outside the content
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	// If the popup is not open, return null
	if (!isOpen || !laborer) return null;

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-lime-100 bg-opacity-10"
			onClick={handleOverlayClick}
		>
			<div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
				{/* Laborer Info */}
				<div className="mb-4 text-center">
					<h2 className="text-xl font-semibold">
						Request to Hire {laborer.laborer_name}
					</h2>
					<p>{laborer.specialties}</p>
					<p>{laborer.region_name}</p>
				</div>

				<div className="content flex flex-col items-center space-y-5">
					{/* Input Form */}
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
					</div>
					<Button text="Request for Hire" onClick={onClose} />
				</div>
			</div>
		</div>
	);
};

export default HiringLabor;
