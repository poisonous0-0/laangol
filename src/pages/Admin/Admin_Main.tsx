import Input_text from "../../components/Input_Text/Input_text";
import Button from "../../components/Button/Button";

const Admin_Main = () => {
	return (
		<>
			<div className="admin_main text-lime-900">
				<div className="top_section mb-10 md:mb-20  flex items-center justify-between">
					<h1 className="heading text-3xl md:text-4xl text-lime-900 font-semibold text-left">
						Admin Control Center
					</h1>
					<Button className="">Update Profile</Button>
				</div>

				<div className="contents">
					{/* Responsive box container */}
					<div className="box_container flex flex-col md:flex-row items-start justify-start space-y-6 md:space-y-0 md:space-x-16">
						<a
							href=""
							className="box bg-lime-50 w-full md:w-auto py-16 px-12 md:px-20 border border-lime-500 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-900"
						>
							<p>User Management</p>
						</a>
						<a
							href=""
							className="box bg-lime-50 w-full md:w-auto py-16 px-12 md:px-20 border border-lime-500 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-900"
						>
							<p>Product Management</p>
						</a>
						<a
							href=""
							className="box bg-lime-50 w-full md:w-auto py-16 px-12 md:px-20 border border-lime-500 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-900"
						>
							<p>Payment Management</p>
						</a>
					</div>

					{/* Responsive profile section */}
					<div className="profile_container mt-10 md:mt-20 flex flex-col items-start justify-start  text-lime-900">
						<Input_text label="Name" />
						<Input_text label="Email" />
						<Input_text label="Phone" />
						<Input_text label="Password" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin_Main;
