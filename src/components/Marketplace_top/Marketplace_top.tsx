import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Marketplace_top = () => {
	return (
		<>
			<div className="top_part m-4">
				<div className="top_container flex items-center justify-between">
					<div className="heading text-3xl font-semibold text-lime-700">
						<h1>Marketplace</h1>
					</div>
					<div className="addProduct_button">
						<Link to="/add_items">
							<Button className="">Add your product</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Marketplace_top;
