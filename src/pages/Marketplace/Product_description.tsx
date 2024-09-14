import crops from "../../assets/crop.png";
import Selector from "../../components/Selector/Selector";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/Product_Card/Product_card";

const Product_description = () => {
	return (
		<>
			<div className="heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-lime-900 text-start">
				<h1>Marketplace</h1>
			</div>
			<div className="product_content mt-8 md:mt-10 lg:mt-12">
				<h2 className="p-2 rounded-md w-max bg-lime-800 text-lime-900 text-xl md:text-2xl lg:text-3xl font-normal">
					Product Page
				</h2>
				<div className="product_description mt-5 md:mt-7 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
					<div className="product_image w-full lg:w-1/2 h-64 md:h-80 bg-lime-300 flex items-center justify-center">
						<img
							src={crops}
							alt="Product"
							className="object-contain w-full h-full"
						/>
					</div>
					<div className="product_details flex flex-col space-y-4 lg:w-1/2">
						<h3 className="title text-2xl md:text-3xl font-semibold text-lime-900">
							Tomato
						</h3>
						<p className="price w-max p-2 md:p-3 rounded-md bg-lime-800 text-lime-900">
							40/KG BDT
						</p>
						<div className="category flex flex-wrap items-start space-x-2">
							<p className="p-1 bg-lime-200 border border-lime-400 rounded-md text-lime-900">
								tomato
							</p>
							<p className="p-1 bg-lime-200 border border-lime-400 rounded-md text-lime-900">
								Vegetables
							</p>
							<p className="p-1 bg-lime-200 border border-lime-400 rounded-md text-lime-900">
								213 products
							</p>
						</div>
						<p className="description text-base md:text-lg text-lime-900">
							The tomato is made using artificial intelligence method. It is
							enriched with all the vitamins you can get. It is completely
							fresh. For more detailed process of vegetation feel free to
							contact us.
						</p>
						<div className="seller_info">
							<a href="#" className="flex items-center space-x-4">
								<img src={crops} alt="" className="w-8 md:w-10 rounded-lg" />
								<p className="text-base md:text-lg text-lime-900">
									Nurul Islam Mitul
								</p>
							</a>
						</div>
						<div className="btn_panel flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
							<Selector initialQuantity={1} min={0} max={10} />
							<Button>Add to cart</Button>
							<Button>Chat with Seller</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="more_products mt-8">
				<div className="heading text-lg md:text-xl lg:text-2xl text-lime-900">
					<h1>More Products</h1>
				</div>
				<div className="cards mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
					<ProductCard
						imageSrc={crops}
						productName="Tomato"
						sellerName="Seller Name"
						price={40}
					/>
					<ProductCard
						imageSrc={crops}
						productName="Tomato"
						sellerName="Seller Name"
						price={40}
					/>
					<ProductCard
						imageSrc={crops}
						productName="Tomato"
						sellerName="Seller Name"
						price={40}
					/>
					<ProductCard
						imageSrc={crops}
						productName="Tomato"
						sellerName="Seller Name"
						price={40}
					/>
					<ProductCard
						imageSrc={crops}
						productName="Tomato"
						sellerName="Seller Name"
						price={40}
					/>
					<ProductCard
						imageSrc={crops}
						productName="Tomato"
						sellerName="Seller Name"
						price={40}
					/>
				</div>
			</div>
		</>
	);
};

export default Product_description;
