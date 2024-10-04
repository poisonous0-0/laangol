import React, { useEffect, useState } from "react";
import search from "../../assets/search.png";
import getHired from "../../assets/getHired.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Labor_Main = () => {
	const [profileData, setProfileData] = useState({
		image: "",
		name: "",
		region: "",
		phone_number: "",
		specialates: "",
		experience: "",
	});

	useEffect(() => {
		const fetchLaborInfo = async () => {
			const token = localStorage.getItem("token");

			try {
				const response = await fetch(
					"http://127.0.0.1:8002/user/labour-info/",
					{
						method: "GET",
						headers: {
							Authorization: `Token ${token}`,
							"Content-Type": "application/json",
						},
					}
				);

				if (!response.ok) {
					throw new Error("Failed to fetch labor info.");
				}

				const data = await response.json();
				setProfileData({
					image: data.user_image || "",
					name: data.user_name || "",
					region: data.region_name || "",
					phone_number: data.phone_number || "",
					specialates: data.specialates || "",
					experience: data.experience || "",
				});
			} catch (error) {
				console.error("Error fetching labor info:", error);
				alert("An error occurred.");
			}
		};

		fetchLaborInfo();
	}, []);

	const isProfileDataAvailable =
		profileData.name && profileData.region && profileData.phone_number;

	return (
		<>
			<div className="labor_main p-4 md:p-8">
				<div className="heading mb-10 md:mb-20 text-3xl md:text-4xl text-lime-200 flex items-center justify-between font-semibold text-left">
					<h1>Labor Management</h1>
					<Link to="labor_requests" className="text-2xl">
						<Button text="Requests" px="px-4" />
					</Link>
				</div>

				<div className="contents">
					{/* Responsive box container */}
					<div className="box_container flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
						{/* Hire a Labor box */}
						<Link to="labor_list">
							<div className="box bg-lime-100 bg-opacity-10 w-full md:w-auto py-6 px-10 md:px-20 border border-lime-100 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-200 transition duration-300 ease-in-out transform hover:bg-lime-100 hover:scale-105">
								<img src={search} alt="Hire a labor" className="w-12 md:w-16" />
								<p>Hire a labor</p>
							</div>
						</Link>

						{/* Get Hired box */}
						<Link to="labor_profile">
							<div className="box bg-lime-100 bg-opacity-10 w-full md:w-auto py-6 px-10 md:px-20 border border-lime-100 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-200 transition duration-300 ease-in-out transform hover:bg-lime-100 hover:scale-105">
								<img src={getHired} alt="Get Hired" className="w-12 md:w-16" />
								<p>Get Hired</p>
							</div>
						</Link>
					</div>

					{/* Responsive profile section */}
					{isProfileDataAvailable && (
						<div className="profile_container mt-10 md:mt-20 flex flex-col items-center justify-center space-y-8 md:space-y-12 text-lime-200">
							<div className="heading bg-lime-100 px-8 md:px-12 py-2 md:py-3 rounded-md text-xl md:text-2xl">
								<h1>Your Profile</h1>
							</div>

							<div className="profile flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-3 px-4 md:px-12 py-3 rounded-md">
								{/* Profile Image */}
								<div className="image_section">
									<img
										src={profileData.image}
										alt="User"
										className="w-36 md:w-48 bg-lime-200 p-2 rounded-lg border border-lime-500"
									/>
								</div>

								{/* Profile Info */}
								<div className="info_section flex flex-col space-y-2 text-center md:text-left">
									<p className="text-xl md:text-2xl">{profileData.name}</p>

									{/* Taglines */}
									<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
										<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-800 text-sm">
											<p>{profileData.experience}+ years Experience</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-800 text-sm">
											<p>{profileData.region}</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-800 text-sm">
											<p>{profileData.phone_number}</p>
										</div>
									</div>

									<p className="w-full md:w-fit text-sm md:text-base">
										{profileData.specialates}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Labor_Main;
