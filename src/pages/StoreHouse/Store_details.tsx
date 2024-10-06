import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import store from "../../assets/warehouse.png";
import Short_card_2 from "../../components/Dynamic_card/Labor_and_Store";

const Store_details = () => {
	// Retrieve the storehouse_id from the URL parameters
	const { id } = useParams<{ id: string }>();

	// You can use the `id` to fetch data or handle logic as needed
	// For demonstration, I'm using a mock data approach. Replace this with your actual data-fetching logic.

	// Mock data based on the storehouse_id (you'll replace this with actual data fetching)
	const storeData = {
		name: "Molla Superstore",
		area: "1160 Sqft",
		location: "Lalpur Upazila, Pabna",
		contact: "+8801712345678",
		description: `A 35-year-old male agricultural worker, has 3+ years of experience in crop planting, harvesting, irrigation management, and pest control. Employed full-time since March 1, 2021, under supervisor Jane Smith, he handles planting, weeding, harvesting, and maintaining irrigation systems. He operates and maintains farm machinery and holds certifications in pesticide application and OSHA safety training.`,
		rate: "250Hr BDT",
		image: store, // replace with actual image URL if needed
	};

	return (
		<div className="store_details container">
			<div className="heading text-2xl sm:text-3xl font-semibold text-lime-200">
				<h1>Store Management</h1>
			</div>

			<div className="content mt-11 flex flex-col space-y-8 text-lime-200">
				<div className="store_details">
					<div className="store_title flex items-center justify-center text-xl sm:text-2xl">
						<h1 className="bg-lime-800 px-10 sm:px-20 py-2 rounded-md">
							Store
						</h1>
					</div>

					<div className="store flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
						<div className="store_info w-full flex flex-col md:flex-row items-start space-y-5 md:space-y-0 md:space-x-5">
							{/* Profile Image */}
							<div className="image_section">
								<img
									src={storeData.image}
									alt="Store"
									className="w-full sm:w-60 md:w-80 bg-lime-100 p-2 rounded-lg border border-lime-200"
								/>
							</div>

							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2 items-start">
								<p className="text-lg sm:text-xl md:text-2xl">
									{storeData.name}
								</p>

								{/* Taglines */}
								<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
									<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-200 text-sm">
										<p>{storeData.area}</p>
									</div>
									<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-200 text-sm">
										<p>{storeData.location}</p>
									</div>
									<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-200 text-sm">
										<p>{storeData.contact}</p>
									</div>
								</div>

								<div className="bottom_layer flex flex-col space-y-8">
									<p className="w-full md:w-fit text-sm md:text-base">
										{storeData.description}
									</p>

									<div className="connection flex flex-col md:flex-row items-center w-full space-y-5 md:space-y-0 md:space-x-7">
										<Button text={storeData.rate} />
										<Button text="Chat With Owner" />
										<Button text="Contact Area Consultant" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="more_details_section">
					<div className="more_details">
						<h1>Find more Storehouse</h1>
						<div className="more_details_card flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
							<Short_card_2
								imageSrc={store}
								name="Molla Warehouse"
								rate="250\Hr BDT"
							/>
							<Short_card_2
								imageSrc={store}
								name="Molla Warehouse"
								rate="250\Hr BDT"
							/>
							<Short_card_2
								imageSrc={store}
								name="Molla Warehouse"
								rate="250\Hr BDT"
							/>
							<Short_card_2
								imageSrc={store}
								name="Molla Warehouse"
								rate="250\Hr BDT"
							/>
							<Short_card_2
								imageSrc={store}
								name="Molla Warehouse"
								rate="250\Hr BDT"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Store_details;
