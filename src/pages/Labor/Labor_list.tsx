import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import HiringLabor from "../../components/Popup/HiringLabor"; // Import Popup

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

const Labor_list = () => {
	const [laborers, setLaborers] = useState<Laborer[]>([]);
	const [selectedLaborer, setSelectedLaborer] = useState<Laborer | null>(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// Fetch laborers
	useEffect(() => {
		const token = localStorage.getItem("token");
		fetch("http://127.0.0.1:8002/laborers/by-region/", {
			method: "GET",
			headers: {
				Authorization: `Token ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => setLaborers(data))
			.catch((error) => console.error("Error fetching laborers:", error));
	}, []);

	// Handle "Connect" button click
	const handleConnectClick = (laborer: Laborer) => {
		setSelectedLaborer(laborer); // Store the selected laborer
		setIsPopupOpen(true); // Open the popup
	};

	// Handle closing the popup
	const handleClosePopup = () => {
		setIsPopupOpen(false);
	};

	return (
		<>
			<div className="labor_list">
				{/* Labor management UI */}
				<div className="mt-11 content flex flex-col items-center justify-between space-y-8">
					{laborers.length > 0 ? (
						laborers.map((laborer) => (
							<div
								key={laborer.labour_id}
								className="labor flex items-center justify-between"
							>
								<div className="labor_info w-4/5 flex items-center space-x-5">
									<img
										src={
											laborer.image_url
												? laborer.image_url
												: "path_to_default_image"
										}
										alt={laborer.laborer_name}
										className="w-80 bg-lime-100 p-2 rounded-lg border border-lime-200"
									/>
									{/* Profile Info */}
									<div className="info_section flex flex-col space-y-2">
										<p className="text-xl">{laborer.laborer_name}</p>
										{/* Add more labor info here */}
									</div>
								</div>
								<div className="connection flex flex-col items-center">
									<Button text={`${laborer.demand_fees}   /hr`} />
									<Button
										text="Connect"
										onClick={() => handleConnectClick(laborer)}
									/>
								</div>
							</div>
						))
					) : (
						<p>No laborers available.</p>
					)}
				</div>

				{/* Popup for hiring labor */}
				<HiringLabor isOpen={isPopupOpen} onClose={handleClosePopup} />
			</div>
		</>
	);
};

export default Labor_list;
