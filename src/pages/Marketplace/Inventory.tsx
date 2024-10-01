import Invent from "../../components/Inventory/Inventory";
const Inventory = () => {
	return (
		<>
			<div className="inventory">
				<div className="heading flex items-center justify-between  text-2xl sm:text-3xl md:text-4xl font-semibold text-lime-900 text-start">
					<h1>Seller Inventory</h1>
				</div>

				<div className=" mt-10 display_content  grid grid-cols-6">
					<Invent productName="Product 1" productPrice="BDT 100" />
					<Invent productName="Product 1" productPrice="BDT 100" />
					<Invent productName="Product 1" productPrice="BDT 100" />
					<Invent productName="Product 1" productPrice="BDT 100" />
					<Invent productName="Product 1" productPrice="BDT 100" />
					<Invent productName="Product 1" productPrice="BDT 100" />
					<Invent productName="Product 1" productPrice="BDT 100" />
				</div>
			</div>
		</>
	);
};

export default Inventory;
