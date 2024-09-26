import user from "../../assets/user.png";
import edit from "../../assets/edit.png";
import Button from "../../components/Button/Button";
import Input_text from "../../components/Input_Text/Input_text";
import Toggle_Button from "../../components/Toggle_Button/Toggle_Button";
import { useState } from "react";
const Store_rental = () => {
	const [isToggled, setIsToggled] = useState(false);
	return (
		<>
			<div className="user_profile w-full">
				<div className="heading text-3xl font-semibold text-lime-900">
					<h1>Storehouse Information</h1>
				</div>
				<div className="content mt-9 flex flex-col space-y-11">
					<div className="top_info px-2 flex items-center justify-between">
						<div className="image_section flex items-end">
							<img
								src={user}
								alt="User"
								className="w-32 bg-lime-200 p-2 rounded-full border border-lime-500"
							/>
							<img src={edit} alt="" className="w-8" />
						</div>
						<div className="button_section">
							<Button className=""> Update Storehouse Information</Button>
						</div>
					</div>
					<div className="bottom_info">
						<div className="user_info">
							<Input_text label="Name" />
							<Input_text label="Phone" />
							<Input_text label="Location" />
							<Input_text label="Size" />
							<Input_text label="Rent" />
						</div>
					</div>
					<div className="active_status flex items-center justify-start space-x-3">
						<Toggle_Button
							checked={isToggled}
							onChange={setIsToggled}
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

export default Store_rental;
