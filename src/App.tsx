// src/App.tsx
import React, { useState } from "react";
import Dropdown from "./components/Dropdown/DropDownTwo";

const App: React.FC = () => {
	// Example 1: Dropdown with string options
	const [selectedFruit, setSelectedFruit] = useState<string | null>(null);

	const handleFruitChange = (selectedValue: string) => {
		setSelectedFruit(selectedValue);
	};

	const fruitOptions = [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "cherry", label: "Cherry" },
	];

	// Example 2: Dropdown with number options
	const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

	const handleNumberChange = (selectedValue: number) => {
		setSelectedNumber(selectedValue);
	};

	const numberOptions = [
		{ value: 1, label: "One" },
		{ value: 2, label: "Two" },
		{ value: 3, label: "Three" },
	];

	return (
		<div className="flex flex-col justify-center items-center h-screen space-y-8">
			{/* Dropdown with string options (Fruits) */}
			<Dropdown
				label="Select a fruit"
				options={fruitOptions}
				onChange={handleFruitChange}
				placeholder="Select a fruit" // Custom placeholder
				className="mb-4" // Custom styles
			/>
			{selectedFruit && (
				<p className="text-lg">
					You selected: <strong>{selectedFruit}</strong>
				</p>
			)}

			{/* Dropdown with number options */}
			<Dropdown
				label="Select a number"
				options={numberOptions}
				onChange={handleNumberChange}
				placeholder="Select a number"
				className="mb-4"
			/>
			{selectedNumber !== null && (
				<p className="text-lg">
					You selected: <strong>{selectedNumber}</strong>
				</p>
			)}
		</div>
	);
};

export default App;
