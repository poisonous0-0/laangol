import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Laangol from "../../assets/laangol.png";
import Profile from "../../components/Profile/Profile";

const Dashboard = () => {
	return (
		<div className="flex flex-col h-screen bg-lime-50">
			{/* Top Part */}
			<div className="top_part flex items-center justify-between px-4 py-2">
				<img src={Laangol} alt="Laangol" className="w-40 sm:w-48 md:w-56" />
				<Profile />
			</div>

			{/* Display Part */}
			<div className="display_part m-5 flex flex-grow space-x-4 overflow-hidden">
				{/* Sidebar */}
				<div className="sidebar flex-shrink-0 z-10">
					<Sidebar />
				</div>

				{/* Main Content */}
				<div className="main flex-grow bg-lime-100 border border-lime-400 rounded-md p-4 overflow-y-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
