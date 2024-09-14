import Button from "../../components/Button/Button";
import ShortCard from "../../components/Short_card/Short_card";

import accessories from "../../assets/accessories.png";
import vegetables from "../../assets/vegetables.png";
import fertilizers from "../../assets/fertilizers.png";
import ProductCard from "../../components/Product_Card/Product_card";
import Marketplace_top from "../../components/Marketplace_top/Marketplace_top";
const Marketplace_1 = () => {
	return (
		<>
			<Marketplace_top />
			<div className="categories mt-16 flex items-center justify-center space-x-16">
				<a href="">
					<ShortCard imageSrc={accessories} heading="Accessories" />
				</a>
				<a href="">
					<ShortCard imageSrc={vegetables} heading="Vegetables" />
				</a>
				<a href="">
					<ShortCard imageSrc={fertilizers} heading="Fertilizers" />
				</a>
			</div>
			<div className="discount_banner my-16 py-5 bg-lime-50 flex itmes-center justify-center">
				<p className="p-4 w-max bg-lime-400 text-3xl tracking-wider rounded-md text-lime-700">
					On sale for 40%
				</p>
			</div>

			<div className="product_items flex items-center justify-center space-x-7">
				<ProductCard
					imageSrc={accessories}
					productName="Accessories"
					sellerName="Seller Name"
					price={100}
				/>
				<ProductCard
					imageSrc={vegetables}
					productName="Vegetables"
					sellerName="Seller Name"
					price={100}
				/>
				<ProductCard
					imageSrc={fertilizers}
					productName="Fertilizers"
					sellerName="Seller Name"
					price={100}
				/>
			</div>
		</>
	);
};

export default Marketplace_1;
