import Marketplace_top from "../../components/Marketplace_top/Marketplace_top";
import ProductCard from "../../components/Product_Card/Product_card";
import fertilizers from "../../assets/fertilizers.png";
import { Link } from "react-router-dom";

const Marketplace_2 = () => {
	return (
		<>
			<Marketplace_top />
			<div className="marketplace_items flex flex-col items-center justify-center">
				<div className="items_banner mt-5 w-max p-2 bg-lime-800 text-2xl text-lime-900 rounded-md">
					<h1>Vegetables</h1>
				</div>

				<div className="mt-8 items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-between">
					<Link to="product_details">
						<ProductCard
							imageSrc={fertilizers}
							productName="Fertilizers"
							sellerName="Seller Name"
							price={100}
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Marketplace_2;
