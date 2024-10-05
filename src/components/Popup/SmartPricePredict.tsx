import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown/DropDownTwo"; // Adjust the path as needed

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
}

const categoryOptions = [
	{ value: "Dhaka", label: "Dhaka" },
	{ value: "Chittagong", label: "Chittagong" },
	{ value: "Khaulna", label: "Khaulna" },
	{ value: "Rajshahi", label: "Rajshahi" },
	{ value: "Sylhet", label: "Sylhet" },
	{ value: "Barishal", label: "Barishal" },
	{ value: "Mymensingh", label: "Mymensingh" },
	{ value: "Rangpur", label: "Rangpur" },
	{ value: "Jashore", label: "Jashore" },
	{ value: "Tangail", label: "Tangail" },
];

const monthOptions = [
	{ value: "January", label: "January" },
	{ value: "February", label: "February" },
	{ value: "March", label: "March" },
	{ value: "April", label: "April" },
	{ value: "May", label: "May" },
	{ value: "June", label: "June" },
	{ value: "July", label: "July" },
	{ value: "August", label: "August" },
	{ value: "September", label: "September" },
	{ value: "October", label: "October" },
	{ value: "November", label: "November" },
	{ value: "December", label: "December" },
];

const weatherOptions = [
	{ value: "Sunny", label: "Sunny" },
	{ value: "Cloudy", label: "Cloudy" },
	{ value: "Rainy", label: "Rainy" },
];

const SmartPricePredict: React.FC<PopupProps> = ({ isOpen, onClose }) => {
	const popupRef = useRef<HTMLDivElement>(null); // Ref for the popup container

	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
	const [selectedWeather, setSelectedWeather] = useState<string | null>(null);

	const handleCategoryChange = (selectedValue: string) => {
		setSelectedCategory(selectedValue);
	};

	const handleMonthChange = (selectedValue: string) => {
		setSelectedMonth(selectedValue);
	};

	const handleWeatherChange = (selectedValue: string) => {
		setSelectedWeather(selectedValue);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				popupRef.current &&
				!popupRef.current.contains(event.target as Node)
			) {
				onClose(); // Close the popup if clicked outside
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-lime-100 bg-opacity-10">
			<div ref={popupRef} className="bg-white p-6 rounded-lg shadow-xl">
				<div className="headings text-center py-2 px-5 rounded-md text-2xl text-lime-200 bg-lime-100">
					<p>Smart Price Prediction</p>
				</div>
				<div className="content mt-5 flex flex-col items-start space-y-5">
					<Dropdown
						label="Select Region"
						options={categoryOptions}
						onChange={handleCategoryChange}
						placeholder="Select a region"
						className="min-w-fit text-base text-lime-200"
					/>
					<Dropdown
						label="Select Month"
						options={monthOptions}
						onChange={handleMonthChange}
						placeholder="Select a month"
						className="min-w-fit text-base text-lime-200"
					/>
					<Dropdown
						label="Select Weather Condition"
						options={weatherOptions}
						onChange={handleWeatherChange}
						placeholder="Select weather"
						className="min-w-fit text-base text-lime-200"
					/>

					{selectedCategory && (
						<p className="text-lime-600">Selected Region: {selectedCategory}</p>
					)}
					{selectedMonth && (
						<p className="text-lime-600">Selected Month: {selectedMonth}</p>
					)}
					{selectedWeather && (
						<p className="text-lime-600">Selected Weather: {selectedWeather}</p>
					)}
				</div>
				<button
					onClick={onClose}
					className="mt-4 object-center bg-lime-100 text-lime-200 p-2 rounded"
				>
					Calculate estimated price
				</button>
			</div>
		</div>
	);
};

export default SmartPricePredict;
