import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/login_and_signup_banner.png";
import Navbar from "../../components/Navbar/Navbar";
import Authentication_Input from "../../components/Authentication_Input/Authentication_Input";

const Login_page = () => {
	const navigate = useNavigate(); // Use the navigate hook

	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Login attempt"); // Debugging line
		navigate("/dashboard");
	};

	return (
		<div>
			<header>
				<nav>
					<Navbar />
				</nav>
			</header>
			<div className="login_page bg-lime-50 flex items-center justify-between">
				<div className="login_content pl-40 flex flex-col items-baseline gap-y-10 font-medium">
					<div className="heading text-5xl">
						<h1>Login</h1>
					</div>
					<div className="form">
						<form onSubmit={handleLogin} className="flex flex-col gap-y-6">
							<Authentication_Input
								type="email"
								name="email"
								placeholder="Email"
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
							<div className="signup_button">
								<button
									type="submit"
									className="w-81 bg-lime-500 py-5 px-9 scale-100 rounded-lg text-base font-semibold"
								>
									Login
								</button>
							</div>
							<p>
								Dont have account?{" "}
								<Link to="/signup">
									<a href="" className="text-lime-900">
										Sign up
									</a>
								</Link>
							</p>
						</form>
					</div>
				</div>
				<img src={bg} className="" alt="Background" />
			</div>
		</div>
	);
};

export default Login_page;
