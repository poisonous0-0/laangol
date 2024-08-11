import Navbar from "../../components/Navbar/Navbar";
import bg from "../../assets/login_and_signup_banner.png";
import Authentication_Input from "../../components/Authentication_Input/Authentication_Input";

const Signup_page = () => {
	return (
		<>
			<header>
				<nav>
					<Navbar></Navbar>
				</nav>
			</header>
			<div className="login_page bg-lime-50 flex  items-center justify-between">
				<div className="login_content pl-40 flex flex-col items-baseline gap-y-10 font-medium">
					<div className="heading text-5xl">
						<h1>Signup</h1>
					</div>
					<div className="form ">
						<form action="" className="flex flex-col gap-y-6">
							<Authentication_Input
								type="text"
								name="name"
								placeholder="Name"
								required
								className="w-full"
							/>
							<Authentication_Input
								type="email"
								name="email"
								placeholder="Email"
								required
								className="w-full"
							/>
							<Authentication_Input
								type="tel"
								name="phone"
								placeholder="Phone Number"
								required
								className="w-full"
							/>
							<Authentication_Input
								type="password"
								name="password"
								placeholder="Password"
								required
								className="w-full"
							/>
							<Authentication_Input
								type="password"
								name="confirm_password"
								placeholder="Confirm Password"
								required
								className="w-full"
							/>
							<div className="flex items-center">
								<input
									id="link-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-lime-700 bg-gray-100 border-gray-300 rounded focus:ring-lime-700 dark:focus:ring-lime-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-lime-700"
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
						</form>
					</div>
					<div className="signup_button">
						<button className=" w-81 bg-lime-500 py-5 px-9 scale-100 rounded-lg text-base font-semibold ">
							Register
						</button>
					</div>
				</div>
				<img src={bg} className="" />
			</div>
		</>
	);
};

export default Signup_page;
