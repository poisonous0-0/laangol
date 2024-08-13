import React, { useState } from "react";
import axios from "axios";
import bg from "../../assets/login_and_signup_banner.png";
import Navbar from "../../components/Navbar/Navbar";
import Authentication_Input from "../../components/Authentication_Input/Authentication_Input";
import { useAuth } from "../../components/useAuth/useAuth"; // Import the custom hook

const Login_page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { saveAuthData } = useAuth(); // Destructure the saveAuthData function from the hook

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post("http://127.0.0.1:8000/login/", {
                email,
                password,
            });

            const { token, user } = response.data;

            // Save the token and user data using the custom hook
            saveAuthData(token, user);

            // Redirect or update UI as needed
            console.log("Login successful");
        } catch (error) {
            // Handle error (e.g., show an error message)
            setError("Login failed. Please check your credentials and try again.");
            console.error("Login failed:", error);
        }
    };

    return (
        <div>
            <>
                <header>
                    <nav>
                        <Navbar></Navbar>
                    </nav>
                </header>
                <div className="login_page bg-lime-50 flex items-center justify-between">
                    <div className="login_content pl-40 flex flex-col items-baseline gap-y-10 font-medium">
                        <div className="heading text-5xl">
                            <h1>Login</h1>
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                                <Authentication_Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Authentication_Input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    className="w-full"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && (
                                    <div className="text-red-500 text-sm mt-2">{error}</div>
                                )}
                                <div className="signup_button">
                                    <button
                                        type="submit"
                                        className="w-81 bg-lime-500 py-5 px-9 scale-100 rounded-lg text-base font-semibold"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src={bg} className="" />
                </div>
            </>
        </div>
    );
};

export default Login_page;
