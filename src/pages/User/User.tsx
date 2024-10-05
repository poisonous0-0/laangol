import React, { useState } from "react";
import user from "../../assets/user.png";
import edit from "../../assets/edit.png";
import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";
import RadioButton from "../../components/Button/RadioButton";
import Dropdown from "../../components/Dropdown/DropDownTwo";

const User = () => {
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		phone: "",
		Region: "",
		user_type: "",
	});
	const [profileImage, setProfileImage] = useState(user); // Profile image state

	// Handle input changes (for name, email, phone)
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
	};

	// Handle radio button change
	const handleRadioChange = (value: string) => {
		setUserInfo((prevInfo) => ({
			...prevInfo,
			user_type: value,
		}));
	};

	// Handle dropdown (Region selection)
	const handleCategoryChange = (selectedValue: string) => {
		setUserInfo((prevInfo) => ({
			...prevInfo,
			Region: selectedValue,
		}));
	};

	// Handle image change
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const selectedImage = URL.createObjectURL(e.target.files[0]);
			setProfileImage(selectedImage); // Update profile image
		}
	};

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

	return (
		<div className="user_profile w-full">
			<div className="heading text-3xl font-semibold text-lime-900">
				<h1>User Profile</h1>
			</div>
			<div className="content mt-9 flex flex-col space-y-11">
				<div className="top_info px-2 flex items-center justify-between">
					<div className="image_section flex items-end">
						{/* Display profile image */}
						<img
							src={profileImage}
							alt="User"
							className="w-32 bg-lime-200 p-2 rounded-full border border-lime-500"
						/>

						{/* Edit image - button to trigger file input */}
						<div className="relative">
							<img
								src={edit}
								alt="Edit"
								className="w-8 cursor-pointer"
								onClick={() => document.getElementById("fileInput")?.click()} // Trigger file input
							/>
							{/* Hidden file input for image selection */}
							<input
								type="file"
								id="fileInput"
								accept="image/*"
								onChange={handleImageChange}
								className="hidden"
							/>
						</div>
					</div>
					<div className="button_section">
						<Button text="Update profile" />
					</div>
				</div>

				<div className="bottom_info">
					<div className="user_info">
						<Input_text
							label="Name"
							name="name"
							value={userInfo.name}
							onChange={handleInputChange}
							readOnly={true} // Enable editing if needed
						/>
						<Input_text
							label="Email"
							name="email"
							value={userInfo.email}
							onChange={handleInputChange}
							readOnly={true} // Enable editing if needed
						/>
						<Input_text
							label="Phone"
							name="phone"
							value={userInfo.phone}
							onChange={handleInputChange}
						/>

						<div className="type_selection text-lime-200 flex items-center space-x-5">
							<p>Select your Type: </p>
							<div className="radios flex items-center space-x-4">
								<RadioButton
									label="Farmer"
									name="user_type"
									value="farmer"
									checked={userInfo.user_type === "farmer"}
									onChange={handleRadioChange}
								/>
								<RadioButton
									label="Consumer"
									name="user_type"
									value="consumer"
									checked={userInfo.user_type === "consumer"}
									onChange={handleRadioChange}
								/>
							</div>
						</div>

						<Dropdown
							label="Select Region"
							options={categoryOptions}
							onChange={handleCategoryChange}
							placeholder="Select a region"
							className="min-w-fit text-base text-lime-200"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
