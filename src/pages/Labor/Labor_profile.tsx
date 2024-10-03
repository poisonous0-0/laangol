import user from "../../assets/user.png";
import edit from "../../assets/edit.png";
import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";
import Toggle_Button from "../../components/Toggle_Button/Toggle_Button";
import { useState, useEffect } from "react";

const Labor_profile = () => {
	const [profileData, setProfileData] = useState({
		specialates: "",
		demand_fees: 0,
		experience: 0,
		status: "Unavailable",
	});

	const [isToggled, setIsToggled] = useState(false);
	const [userImage, setUserImage] = useState("");

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
					throw new Error("Failed to fetch labor info1.");
				}

				const data = await response.json();
				console.log("Fetched labor info:", data);

				// Set profile data
				setProfileData({
					specialates: data.specialates || "",
					status: data.status || "Unavailable",
					demand_fees: (data.demand_fees || 0).toString(),
					experience: (data.experience || 0).toString(),
				});

				// Set toggle status
				setIsToggled(data.status === "Available");

				const image = localStorage.getItem("image");
				console.log("img= :" + image);
				if (image) {
					const fullImageUrl = image.startsWith("http")
						? image
						: `http://127.0.0.1:8000${image}`;
					localStorage.setItem("image", fullImageUrl);
					setUserImage(fullImageUrl);
					console.log(fullImageUrl);
				}
			} catch (error) {
				console.error("Error fetching labor info:", error);
			}
		};

		// Fetch labor info on mount
		fetchLaborInfo();

		const storedImage = localStorage.getItem("image");
		if (storedImage) {
			setUserImage(storedImage);
		}
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProfileData({
			...profileData,
			[name]: value,
		});
	};

	const handleToggleChange = (checked: boolean) => {
		setIsToggled(checked);
		setProfileData((prevData) => ({
			...prevData,
			status: checked ? "Available" : "Unavailable",
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const laborData = {
			specialates: profileData.specialates,
			status: isToggled ? "Available" : "Unavailable",
			demand_fees: Number(profileData.demand_fees), // Ensure numerical values
			experience: Number(profileData.experience),
		};

		const token2 = localStorage.getItem("token");
		try {
			const response = await fetch("http://127.0.0.1:8002/api/add-labour/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token2}`,
				},
				body: JSON.stringify(laborData),
			});

			console.log("value :" + laborData);
			if (!response.ok) {
				throw new Error("Error in updating profile");
			}

			const result = await response.json();
			console.log("Profile updated successfully:", result);
		} catch (error) {
			console.error("Error:", error);
		}
	};
	return (
		<>
			<div className="user_profile w-full">
				<div className="heading text-3xl font-semibold text-lime-900">
					<h1>Labor Profile</h1>
				</div>
				<div className="content mt-9 flex flex-col space-y-11">
					<div className="top_info px-2 flex items-center justify-between">
						<div className="image_section flex items-end">
							<img
								src={userImage || user} // If no user image, use the default placeholder
								alt="User"
								className="w-32 bg-lime-200 p-2 rounded-full border border-lime-500"
							/>
							<img src={edit} alt="" className="w-8" />
						</div>
						<div className="button_section">
							<Button onClick={handleSubmit} text="Update Profile" />
						</div>
					</div>
					<div className="bottom_info">
						<div className="user_info">
							<Input_text
								label="Specialties"
								name="specialates"
								value={profileData.specialates}
								onChange={handleInputChange}
							/>
							<Input_text
								label="Demand Fees"
								name="demand_fees"
								value={profileData.demand_fees}
								onChange={handleInputChange}
								type="number"
							/>
							<Input_text
								label="Experience (in years)"
								name="experience"
								value={profileData.experience}
								onChange={handleInputChange}
								type="number"
							/>
						</div>
					</div>
					<div className="active_status flex items-center justify-start space-x-3">
						<Toggle_Button
							checked={isToggled}
							onChange={handleToggleChange}
							label="Enable Feature"
							className="custom-toggle-class"
						/>
						<p>{isToggled ? "Available for hire." : "Unavailable for hire."}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Labor_profile;
