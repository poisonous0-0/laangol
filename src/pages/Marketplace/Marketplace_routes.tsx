// App.tsx or App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Marketplace_1 from "../Marketplace/Marketplace_1";
import Marketplace_2 from "../Marketplace/Marketplace_2";
import Product_description from "../Marketplace/Product_description";
import Adding_items from "../Marketplace/Adding_items";

const Marketplace_main = () => {
	return (
		<Routes>
			<Route path="/marketplace1" element={<Marketplace_1 />} />
			<Route path="/marketplace2" element={<Marketplace_2 />} />
			<Route path="/product_info" element={<Product_description />} />
			<Route path="/add_items" element={<Adding_items />} />
		</Routes>
	);
};

export default Marketplace_main;
