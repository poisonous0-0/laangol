// App.tsx or App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crop_maintainance from "./Crop_maintainance";

const Marketplace_main = () => {
	return (
		<Router>
			<Routes>
				<Route path="/crop_maintainence" element={<Crop_maintainance />} />
			</Routes>
		</Router>
	);
};

export default Marketplace_main;
