import search from "../../assets/search.png";
import getHired from "../../assets/getHired.png";
import storeHouse from "../../assets/warehouse.png";
import { Link } from "react-router-dom";

const Store_main = () => {
	return (
		<>
			<div className="labor_main p-4 md:p-8">
				<div className="heading mb-10 md:mb-20 text-3xl md:text-4xl text-lime-200 font-semibold text-left">
					<h1>Storehouse Management</h1>
				</div>

				<div className="contents">
					{/* Responsive box container */}
					<div className="box_container flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
						{/* Hire a Labor box */}
						<Link to="store_list">
							<div className="box bg-lime-100 bg-opacity-10 w-full md:w-auto py-6 px-10 md:px-20 border border-lime-500 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-200 transition duration-300 ease-in-out transform hover:bg-lime-100">
								<img src={search} alt="Hire a labor" className="w-12 md:w-16" />
								<p>Hire a storehouse</p>
							</div>
						</Link>

						{/* Get Hired box */}
						<Link to="store_rental">
							<div className="box bg-lime-100 bg-opacity-10 w-full md:w-auto py-6 px-10 md:px-20 border border-lime-500 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-200 transition duration-300 ease-in-out transform hover:bg-lime-100">
								<img src={getHired} alt="Get Hired" className="w-12 md:w-16" />
								<p>Rent your Storehouse</p>
							</div>
						</Link>
					</div>

					{/* Responsive profile section */}
					<div className="profile_container mt-10 md:mt-20 flex flex-col items-center justify-center space-y-8 md:space-y-12 text-lime-200">
						<div className="heading bg-lime-100 px-8 md:px-12 py-2 md:py-3 rounded-md text-xl md:text-2xl">
							<h1>Your Profile</h1>
						</div>

						<div className="profile flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-3 px-4 md:px-12 py-3 rounded-md">
							{/* Profile Image */}
							<div className="image_section">
								<img
									src={storeHouse}
									alt="User"
									className="w-36 md:w-48 bg-lime-100 p-2 rounded-lg border border-lime-00"
								/>
							</div>

							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2 text-center md:text-left">
								<p className="text-xl md:text-2xl">Molla Storehouse </p>

								{/* Taglines */}
								<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
									<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-100 text-sm">
										<p>1160 squarefeet</p>
									</div>
									<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-100 text-sm">
										<p>Lalpur Upazila, Pabna</p>
									</div>
									<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-100 text-sm">
										<p>+8801712345678</p>
									</div>
								</div>

								<p className="w-full md:w-fit text-sm md:text-base">
									A 5,000 sq. ft. temperature-controlled storehouse located at
									456 Industrial Park, Springfield, USA, is available for rent
									at $3,000 per month. A security deposit of $3,000 is required.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Store_main;
