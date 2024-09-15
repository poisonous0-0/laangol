import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Marketplace_1 from "../pages/Marketplace/Marketplace_1";
import Marketplace_2 from "../pages/Marketplace/Marketplace_2";
import Adding_items from "../pages/Marketplace/Adding_items";
import Crop_maintainance from "../pages/Crop_Maintainance/Crop_maintainance";
import Product_description from "../pages/Marketplace/Product_description";

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
			{
				path: "/add_items",
				element: <Adding_items />,
			},
			{
				path: "/marketplace2",
				element: <Marketplace_2 />,
			},
			{ path: "/product_info", element: <Product_description /> },
		],
	},
]);

export default router;
