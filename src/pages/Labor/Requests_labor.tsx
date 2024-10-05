import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import user from "../../assets/user.png";
import Are_You_Sure from "../../components/Popup/Are_You_Sure"; // Import Are_You_Sure popup component

interface PendingRequest {
	hire_id: number;
	amount: number;
	start_date: string;
	end_date: string;
	hirer_name: string;
	hirer_region: string;
	hirer_phone: string;
	hirer_image: string;
}

const Requests_labor = () => {
	const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([]);
	const [selectedRequestId, setSelectedRequestId] = useState<number | null>(
		null
	); // Track selected request
	const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility state
	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchPendingRequests = async () => {
			try {
				const response = await fetch(
					"http://127.0.0.1:8002/api/pending-hire-requests/",
					{
						method: "GET",
						headers: {
							Authorization: `Token ${token}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				setPendingRequests(data.pending_requests);
			} catch (error) {
				console.error("Error fetching pending hire requests:", error);
			}
		};

		fetchPendingRequests();
	}, [token]);

	// Function to update hire status (accept/reject)
	const updateHireStatus = async (
		hireId: number,
		status: "Accept" | "Reject"
	) => {
		try {
			const response = await fetch(
				"http://127.0.0.1:8002/api/update-hire-status/",
				{
					method: "POST",
					headers: {
						Authorization: `Token ${token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ hire_id: hireId, status }),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			// Optionally refresh the requests after updating
			const updatedRequests = pendingRequests.filter(
				(request) => request.hire_id !== hireId
			);
			setPendingRequests(updatedRequests);
		} catch (error) {
			console.error("Error updating hire status:", error);
		}
	};

	// Handle Accept button click
	const handleAcceptClick = (hireId: number) => {
		setSelectedRequestId(hireId); // Set the selected hire request ID
		setIsPopupOpen(true); // Open the confirmation popup
	};

	// Handle Yes click in the confirmation popup
	const handleConfirmAccept = () => {
		if (selectedRequestId !== null) {
			updateHireStatus(selectedRequestId, "Accept"); // Accept the request
		}
		setIsPopupOpen(false); // Close the popup
		setSelectedRequestId(null); // Reset selected request ID
	};

	// Handle No click in the confirmation popup
	const handleCancel = () => {
		setIsPopupOpen(false); // Close the popup without accepting
		setSelectedRequestId(null); // Reset selected request ID
	};

	return (
		<>
			<div className="labor_list">
				{/* Labor management UI */}
				<div className="mt-11 contents grid-flow-row space-y-5">
					{pendingRequests.map((request) => (
						<div
							key={request.hire_id}
							className="labor flex items-center space-x-5"
						>
							<div className="labor_info w-1/2 flex items-center space-x-5">
								<img
									src={request.hirer_image || user}
									alt={request.hirer_name}
									className="w-40 h-40 min-w-40 min-h-40 object-cover bg-lime-100 rounded-full p-1 border border-lime-200"
								/>
								{/* Profile Info */}
								<div className="info_section flex flex-col space-y-2">
									<p className="text-2xl">{request.hirer_name}</p>
									<p>
										Time: {request.start_date} to {request.end_date}
									</p>
									<p>Amount: ${request.amount}</p>
									<div className="connection flex items-center space-x-5">
										<Button
											text="Accept"
											onClick={() => handleAcceptClick(request.hire_id)} // Trigger the popup
										/>
										<Button
											text="Reject"
											onClick={() =>
												updateHireStatus(request.hire_id, "Reject")
											}
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Are You Sure Popup */}
			<Are_You_Sure
				isOpen={isPopupOpen}
				onClose={handleCancel} // Close the popup if No is clicked
			/>

			{isPopupOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-lime-100 bg-opacity-10">
					<div className="bg-white p-6 rounded-lg shadow-xl">
						<div className="content flex flex-col items-center space-y-5">
							<div className="text flex flex-col items-center space-y-2">
								<h2 className="text-3xl font-semibold text-center text-lime-200">
									Do you want to take this job?
								</h2>
							</div>
							<div className="button_section space-x-4">
								<Button text="Yes" onClick={handleConfirmAccept} />{" "}
								{/* Confirm acceptance */}
								<Button text="No" onClick={handleCancel} />{" "}
								{/* Cancel the action */}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Requests_labor;
