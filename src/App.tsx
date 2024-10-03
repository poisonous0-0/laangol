import userImg from "../src/assets/user.png";
import Button_with_img from "./components/Button_with_img/Button_with_img";
import Profile from "./components/Profile/Profile";
import Chatbot from "./pages/Chatbot/Chatbot";
import user from "./assets/user.png";

const App = () => {
	return (
		<div className="">
			{/* Profile Dropdown */}
			<Profile
				imageSrc={user}
				menuItems={[
					{ label: "Profile", path: "/dashboard/user" },
					{ label: "Logout", path: "/login" },
				]}
			/>
		</div>
	);
};

export default App;
