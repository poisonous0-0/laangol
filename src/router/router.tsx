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
import Labor_list from "../pages/Labor/Labor_list";
import Labor_profile from "../pages/Labor/Labor_profile";
import Store_list from "../pages/StoreHouse/Store_house_list";
import Store_rental from "../pages/StoreHouse/Store_rental";
import Login_page from "../pages/Authentication/Login_page";
import Chatbot from "../pages/Chatbot/Chatbot";
import Landing_page from "../pages/Landing_page";
import Signup_page from "../pages/Authentication/Signup_page";
import Admin_Main from "../pages/Admin/Admin_Main";
import User_Management from "../pages/Admin/User_Management";
import Admin_dashboard from "../pages/Admin/Admin_dashboard";
import Product_Management from "../pages/Admin/Product_Management";
import User_Profile from "../pages/Admin/User_Profile";
import Admin_Profile from "../pages/Admin/Admin_Profile";
import Cart from "../pages/Marketplace/Cart";
import Inventory from "../pages/Marketplace/Inventory";
import Labor_details from "../pages/Labor/Labor_details";
import Store_details from "../pages/StoreHouse/Store_details";
import App from "../App";

const router = createBrowserRouter([
	{
		path: "/", // Default route is login
		element: <App />,
	},
	{
		path: "/signup", // Signup route
		element: <Signup_page />,
	},
	{
		path: "/login", // Login route
		element: <Login_page />,
	},
	// User Dashboard Routes
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
				path: "marketplace/marketplace2/product_details", // Will be accessible at /dashboard/product_details
				element: <Product_description />,
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
				path: "marketplace/add_items/inventory", // Will be accessible at /dashboard/add_items
				element: <Inventory />,
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
				path: "labor/labor_list/labor_details",
				element: <Labor_details />,
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
				path: "storehouse/store_list", // Will be accessible at /dashboard/store_list
				element: <Store_list />,
			},
			{
				path: "storehouse/store_list/storehouse_details", // Will be accessible at /dashboard/storehouse_details
				element: <Store_details />,
			},
			{
				path: "storehouse/store_rental", // Will be accessible at /dashboard/store_rental
				element: <Store_rental />,
			},
			{
				path: "agroaegis", // Will be accessible at /dashboard/agroaegis
				element: <Chatbot />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "user", // Will be accessible at /dashboard/user
				element: <User />,
			},
		],
	},
	// Admin Panel Routes
	{
		path: "/admin", // Admin route
		element: <Admin_dashboard />, // Main admin component
		children: [
			{
				index: true, // Index route for admin
				element: <Admin_Main />,
			},
			{
				path: "admin_home", // Will be accessible at /admin/user_management
				element: <Admin_Main />,
			},
			{
				path: "user_management", // Will be accessible at /admin/user_management
				element: <User_Management />,
			},
			{
				path: "user_management/user_profile", // Will be accessible at /admin/user_profile
				element: <User_Profile />,
			},
			{
				path: "product_management", // Will be accessible at /admin/product_management
				element: <Product_Management />,
			},
			{
				path: "admin_profile", // Will be accessible at /admin/product_info
				element: <Admin_Profile />,
			},
			// Add more admin routes here as needed
		],
	},
	// {
	// 	path: "*", // Wildcard for unknown routes
	// 	element: <div>404 Not Found</div>,
	// },
]);

export default router;
