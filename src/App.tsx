import userImg from "../src/assets/user.png";
import Button_with_img from "./components/Button_with_img/Button_with_img";

const App = () => {
	return (
		<div>
			<Button_with_img
				imgSrc={userImg}
				expanded={true}
				altText="User"
				buttonText="User"
				onClick={() => alert("Button Clicked!")}
			/>
		</div>
	);
};

export default App;
