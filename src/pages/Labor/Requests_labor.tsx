import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import user from "../../assets/user.png";

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
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchPendingRequests = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8002/api/pending-hire-requests/", {
                    method: "GET",
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });

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

    const updateHireStatus = async (hireId: number, status: "Accept" | "Reject") => {
        try {
            const response = await fetch("http://127.0.0.1:8002/api/update-hire-status/", {
                method: "POST",
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ hire_id: hireId, status }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            // Optionally refresh the requests after updating
            const updatedRequests = pendingRequests.filter(request => request.hire_id !== hireId);
            setPendingRequests(updatedRequests);
        } catch (error) {
            console.error("Error updating hire status:", error);
        }
    };

    return (
        <>
            <div className="labor_list">
                {/* Labor management UI */}
                <div className="mt-11 contents grid-flow-row space-y-5">
                    {pendingRequests.map((request) => (
                        <div key={request.hire_id} className="labor flex items-center space-x-5">
                            <div className="labor_info w-1/2 flex items-center space-x-5">
                                <img
                                    src={request.hirer_image || user}
                                    alt={request.hirer_name}
                                    className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
                                />
                                {/* Profile Info */}
                                <div className="info_section flex flex-col space-y-2">
                                    <p className="text-2xl">{request.hirer_name}</p>
                                    <p>Time: {request.start_date} to {request.end_date}</p>
                                    <p>Amount: ${request.amount}</p>
                                    <div className="connection flex items-center space-x-5">
                                        <Button text="Accept" onClick={() => updateHireStatus(request.hire_id, "Accept")} />
                                        <Button text="Reject" onClick={() => updateHireStatus(request.hire_id, "Reject")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Requests_labor;
