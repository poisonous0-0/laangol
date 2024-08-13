import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import bg from "../../assets/login_and_signup_banner.png";
import Authentication_Input from "../../components/Authentication_Input/Authentication_Input";
import RadioButton from "../../components/Radio_Button/RadioButton";

const Signup_page = () => {
	const [selectedValue, setSelectedValue] = useState("farmer");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirm_password: "",
	});

	const handleRadioChange = (value: string) => {
		setSelectedValue(value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (formData.password !== formData.confirm_password) {
			alert("Passwords do not match!");
			return;
		}

		const data = {
			name: formData.name,
			email: formData.email,
			password: formData.password,
			number: formData.phone,
			type: selectedValue,
			active: 1,
		};

		try {
			const response = await axios.post("http://127.0.0.1:8000/signup/", data);
			alert("Registration successful!");
		} catch (error) {
			console.error("There was an error registering the user!", error);
			alert("Registration failed!");
		}
	};

	return (
		<>
			<header>
				<nav>
					<Navbar />
				</nav>
			</header>
			<div className="login_page bg-lime-50 flex  items-center justify-between">
				<div className="login_content pl-40 flex flex-col items-baseline gap-y-10 font-medium">
					<div className="heading text-5xl">
						<h1>Signup</h1>
					</div>
					<div className="form ">
						<form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
							<Authentication_Input
								type="text"
								name="name"
								placeholder="Name"
								required
								className="w-full"
								onChange={handleChange}
							/>
							<Authentication_Input
								type="email"
								name="email"
								placeholder="Email"
								required
								className="w-full"
								onChange={handleChange}
							/>
							<Authentication_Input
								type="tel"
								name="phone"
								placeholder="Phone Number"
								required
								className="w-full"
								onChange={handleChange}
							/>
							<Authentication_Input
								type="password"
								name="password"
								placeholder="Password"
								required
								className="w-full"
								onChange={handleChange}
							/>
							<Authentication_Input
								type="password"
								name="confirm_password"
								placeholder="Confirm Password"
								required
								className="w-full"
								onChange={handleChange}
							/>
							<div className="user_type_selection flex flex-col gap-y-2">
								<p>Select your user type</p>
								<div className="flex gap-x-6">
									<RadioButton
										label="Farmer"
										value="farmer"
										name="options"
										checked={selectedValue === "farmer"}
										onChange={handleRadioChange}
									/>
									<RadioButton
										label="Admin"
										value="admin"
										name="options"
										checked={selectedValue === "admin"}
										onChange={handleRadioChange}
									/>
									<RadioButton
										label="Consumer"
										value="consumer"
										name="options"
										checked={selectedValue === "consumer"}
										onChange={handleRadioChange}
									/>
									<RadioButton
										label="Laborer"
										value="Laborer"
										name="options"
										checked={selectedValue === "Laborer"}
										onChange={handleRadioChange}
									/>
								</div>
							</div>
							<div className="flex items-center">
								<input
									id="link-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-lime-700 bg-gray-100 border-gray-300 rounded focus:ring-lime-700 dark:focus:ring-lime-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-lime-700"
									required
								/>
								<label
									htmlFor="link-checkbox"
									className="ms-2 text-sm font-medium text-gray-900 dark:text-lime-500"
								>
									I agree with the{" "}
									<a
										href="#"
										className="text-lime-700 dark:text-lime-700 hover:underline"
									>
										terms and conditions
									</a>
									.
								</label>
							</div>
							<div className="signup_button">
								<button
									type="submit"
									className=" w-81 bg-lime-500 py-5 px-9 scale-100 rounded-lg text-base font-semibold "
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
				<img src={bg} className="" />
			</div>
		</>
	);
};

export default Signup_page;
