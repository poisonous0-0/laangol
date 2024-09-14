import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
	return (
		<div className="m-3 flex space-x-3 items-end min-h-screen overflow-hidden">
			<div className="sidebar h-full">
				<Sidebar />
			</div>
			<div className="p-4 main flex-grow bg-lime-100 border border-lime-400 rounded-md overflow-hidden">
				<Outlet />
			</div>
		<div>
			<Signup_page />
		</div>
	);
};

export default App;
