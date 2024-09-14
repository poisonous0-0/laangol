import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Marketplace_1 from "../pages/Marketplace/Marketplace_1";
import Marketplace_2 from "../pages/Marketplace/Marketplace_2";
import Crop_maintainance from "../pages/Crop_Maintainance/Crop_maintainance";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Marketplace_1 />,
			},
			{
				path: "/crop_maintainence",
				element: <Crop_maintainance />,
			},
		],
	},
]);

export default router;
