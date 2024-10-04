import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation after signup
import Navbar from "../../components/Navbar/Navbar";
import bg from "../../assets/login_and_signup_banner.png";
import Authentication_Input from "../../components/Authentication_Input/Authentication_Input";
import RadioButton from "../../components/Radio_Button/RadioButton";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


interface FormData {
	name: string;
	email: string;
	phone: string;
	password: string;
	confirm_password: string;
}

const Signup_page = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirm_password: "",
	});

	// State to manage the selected radio button value
	const [selectedValue, setSelectedValue] = useState("farmer");

	// Handler for radio button change
	const handleRadioChange = (value: string) => {
		setSelectedValue(value);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Use useNavigate to handle redirection
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const payload = {
			name: formData.name,
			email: formData.email,
			number: formData.phone,
			region_id: null,
			active: 1,
			password: formData.password,
			type: selectedValue,
		};

		console.log("Payload:", JSON.stringify(payload, null, 2));

		try {
			const response = await fetch("http://127.0.0.1:8000/signup/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				const errorData = await response.json();
				console.error("Error during signup:", errorData);
				alert("Signup failed. Please check your input and try again.");
				return;
			}

			const data = await response.json();
			console.log("Signup successful", data);

			// Redirect to login page after successful signup
			navigate("/login");
		} catch (error) {
			console.error("Error during signup", error);
			alert("An error occurred during signup. Please try again later.");
		}
	};

	return (
		<>
			<header>
				<nav>
					<Navbar />
				</nav>
			</header>
			<div className="login_page bg-lime-50 flex items-center justify-between">
				<div className="login_content pl-40 flex flex-col items-baseline gap-y-10 font-medium">
					<div className="heading text-5xl text-lime-200">
						<h1>Signup</h1>
					</div>
					<div className="form">
						<form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
							<Authentication_Input
								type="text"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleInputChange}
								required
								className="w-full"
							/>
							<Authentication_Input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleInputChange}
								required
								className="w-full"
							/>
							<Authentication_Input
								type="tel"
								name="phone"
								placeholder="Phone Number"
								value={formData.phone}
								onChange={handleInputChange}
								required
								className="w-full"
							/>
							<Authentication_Input
								type="password"
								name="password"
								placeholder="Password"
								value={formData.password}
								onChange={handleInputChange}
								required
								className="w-full"
							/>
							<Authentication_Input
								type="password"
								name="confirm_password"
								placeholder="Confirm Password"
								value={formData.confirm_password}
								onChange={handleInputChange}
								required
								className="w-full"
							/>
							<div className="user_type_selection flex flex-col gap-y-2 text-lime-200">
								<p>Select your user type</p>
								<div className="flex gap-x-6">
									<RadioButton
										label="Farmer"
										value="FARMER"
										name="options"
										checked={selectedValue === "FARMER"}
										onChange={handleRadioChange}
									/>
									<RadioButton
										label="Consumer"
										value="CONSUMER"
										name="options"
										checked={selectedValue === "CONSUMER"}
										onChange={handleRadioChange}
									/>
								</div>
							</div>
							<div className="flex items-center">
								<input
									id="link-checkbox"
									type="checkbox"
									className="w-4 h-4 text-lime-200 bg-gray-100 border-gray-300 rounded focus:ring-lime-200 accent-lime-200"
									required
								/>
								<label
									htmlFor="link-checkbox"
									className="ms-2 text-sm font-medium text-gray-900 "
								>
									I agree with the{" "}
									<a
										href="#"
										className="text-lime-200  transition duration-400 ease-in-out transform hover:underline"
									>
										terms and conditions
									</a>
									.
								</label>
							</div>
							<div className="signup_button">
								<Button text="Signup" px="px-8" width="w-full" />
							</div>
							<p className="text-lime-200">
								Already have account?{" "}
								<Link
									to="/login"
									className="text-lime-100 hover:text-lime-200 hover:underline"
								>
									Sign in
								</Link>
							</p>
						</form>
					</div>
				</div>
				<img src={bg} alt="Signup banner" />
			</div>
		</>
	);
};

export default Signup_page;
