import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Marketplace_1 from "../pages/Marketplace/Marketplace_1";
import Marketplace_2 from "../pages/Marketplace/Marketplace_2";
import Product_description from "../pages/Marketplace/Product_description";
import Adding_items from "../pages/Marketplace/Adding_items";
import Crop_maintainance from "../pages/Crop_Maintainance/Crop_maintainance";
import Labor_Main from "../pages/Labor/Labor_Main";
import Store_main from "../pages/StoreHouse/Store_Main";
import User from "../pages/User/User";
import Login_page from "../pages/Authentication/Login_page";
import Labor_list from "../pages/Labor/Labor_list";
import Labor_profile from "../pages/Labor/Labor_profile";
import Store_list from "../pages/StoreHouse/Store_house_list";
import Store_rental from "../pages/StoreHouse/Store_rental";

const router = createBrowserRouter([
	{
		path: "/", // Default route is login
		element: <Login_page />,
	},
	{
		path: "/dashboard", // Dashboard route
		element: <Dashboard />, // Dashboard component with Outlet for child routes
		children: [
			{
				path: "marketplace",
				element: <Marketplace_1 />, // Will be accessible at /dashboard/marketplace
			},
			{
				path: "marketplace/marketplace2", // Will be accessible at /dashboard/marketplace2
				element: <Marketplace_2 />,
			},
			{
				path: "marketplace/product_info", // Will be accessible at /dashboard/product_info
				element: <Product_description />,
			},
			{
				path: "marketplace/add_items", // Will be accessible at /dashboard/add_items
				element: <Adding_items />,
			},

			{
				path: "crop_maintainance", // Will be accessible at /dashboard/crop_maintainance
				element: <Crop_maintainance />,
			},
			{
				path: "labor", // Will be accessible at /dashboard/labor
				element: <Labor_Main />,
			},
			{
				path: "labor/labor_list",
				element: <Labor_list />,
			},
			{
				path: "labor/labor_profile",
				element: <Labor_profile />,
			},
			{
				path: "storehouse", // Will be accessible at /dashboard/storehouse
				element: <Store_main />,
			},
			{
				path: "storehouse/store_list", // Will be accessible at /dashboard/store_rental
				element: <Store_list />,
			},
			{
				path: "storehouse/store_rental", // Will be accessible at /dashboard/store_rental
				element: <Store_rental />,
			},
			{
				path: "user", // Will be accessible at /dashboard/user
				element: <User />,
			},
		],
	},
	{
		path: "*", // Wildcard for unknown routes
		element: <div>404 Not Found</div>,
	},
]);

export default router;
