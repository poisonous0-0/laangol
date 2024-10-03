import AddItems from "./components/Popup/AddItems";
import { useState } from "react";
import Hiring from "./components/Popup/Hiring";
const App: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<button
				onClick={togglePopup}
				className={`bg-lime-100 text-lime-200 font-normal text-lg rounded-lg transition duration-200 ease-in-out transform hover:bg-lime-200 hover:text-lime-50 px-4 py-2`}
			>
				{isOpen ? "Hide Popup" : "Show Popup"}
			</button>
			<Hiring isOpen={isOpen} onClose={togglePopup} />
		</div>
	);
};

export default App;
