import Button from "../../components/Button/Button";
import user from "../../assets/user.png";
import store from "../../assets/warehouse.png";

const Store_list = () => {
	return (
		<>
			<div className="store_list">
				<div className="headlines text-3xl font-semibold text-lime-900">
					<h1>Storehouse Management</h1>
				</div>
				<div className="mt-11 content flex flex-col items-center justify-between space-y-8">
					<div className="heading text-3xl px-3 py-2 bg-lime-800 rounded-md border border-lime-900 text-lime-900">
						<h1>Hire a Storehouse</h1>
					</div>
					<div className="store_list flex flex-col items-center justify-center space-y-7 text-lime-900">
						<div className="storeHouse flex items-center justify-between ">
							<div className="store_info w-4/5 flex items-center space-x-5">
								{/* Profile Image */}
								<div className="image_section">
									<img
										src={store}
										alt="User"
										className="w-80 bg-lime-200 p-2 rounded-lg border border-lime-500"
									/>
								</div>

								{/* Profile Info */}
								<div className="info_section flex flex-col space-y-2 text-center md:text-left">
									<p className="text-xl md:text-2xl">Molla Storehouse</p>

									{/* Taglines */}
									<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>1160 Sqft</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>Lalpur Upazila, Pabna</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>+8801712345678</p>
										</div>
									</div>

									<p className="w-full md:w-fit text-sm md:text-base">
										A 35-year-old male agricultural worker, has 3+ years of
										experience in crop planting, harvesting, irrigation
										management, and pest control. Employed full-time since March
										1, 2021, under supervisor Jane Smith, he handles planting,
										weeding, harvesting, and maintaining irrigation systems. He
										operates and maintains farm machinery and holds
										certifications in pesticide application and OSHA safety
										training.
									</p>
								</div>
							</div>
							<div className="connection flex flex-col items-center justify-between space-y-4">
								<Button className="">250\Hr BDT</Button>
								<Button className="">Connect</Button>
							</div>
						</div>
						<div className="storeHouse flex items-center justify-between ">
							<div className="store_info w-4/5 flex items-center space-x-5">
								{/* Profile Image */}
								<div className="image_section">
									<img
										src={store}
										alt="User"
										className="w-80 bg-lime-200 p-2 rounded-lg border border-lime-500"
									/>
								</div>

								{/* Profile Info */}
								<div className="info_section flex flex-col space-y-2 text-center md:text-left">
									<p className="text-xl md:text-2xl">Molla Storehouse</p>

									{/* Taglines */}
									<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>1160 Sqft</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>Lalpur Upazila, Pabna</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>+8801712345678</p>
										</div>
									</div>

									<p className="w-full md:w-fit text-sm md:text-base">
										A 35-year-old male agricultural worker, has 3+ years of
										experience in crop planting, harvesting, irrigation
										management, and pest control. Employed full-time since March
										1, 2021, under supervisor Jane Smith, he handles planting,
										weeding, harvesting, and maintaining irrigation systems. He
										operates and maintains farm machinery and holds
										certifications in pesticide application and OSHA safety
										training.
									</p>
								</div>
							</div>
							<div className="connection flex flex-col items-center justify-between space-y-4">
								<Button className="">250\Hr BDT</Button>
								<Button className="">Connect</Button>
							</div>
						</div>
						<div className="storeHouse flex items-center justify-between ">
							<div className="store_info w-4/5 flex items-center space-x-5">
								{/* Profile Image */}
								<div className="image_section">
									<img
										src={store}
										alt="User"
										className="w-80 bg-lime-200 p-2 rounded-lg border border-lime-500"
									/>
								</div>

								{/* Profile Info */}
								<div className="info_section flex flex-col space-y-2 text-center md:text-left">
									<p className="text-xl md:text-2xl">Molla Storehouse</p>

									{/* Taglines */}
									<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>1160 Sqft</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>Lalpur Upazila, Pabna</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>+8801712345678</p>
										</div>
									</div>

									<p className="w-full md:w-fit text-sm md:text-base">
										A 35-year-old male agricultural worker, has 3+ years of
										experience in crop planting, harvesting, irrigation
										management, and pest control. Employed full-time since March
										1, 2021, under supervisor Jane Smith, he handles planting,
										weeding, harvesting, and maintaining irrigation systems. He
										operates and maintains farm machinery and holds
										certifications in pesticide application and OSHA safety
										training.
									</p>
								</div>
							</div>
							<div className="connection flex flex-col items-center justify-between space-y-4">
								<Button className="">250\Hr BDT</Button>
								<Button className="">Connect</Button>
							</div>
						</div>
						<div className="storeHouse flex items-center justify-between ">
							<div className="store_info w-4/5 flex items-center space-x-5">
								{/* Profile Image */}
								<div className="image_section">
									<img
										src={store}
										alt="User"
										className="w-80 bg-lime-200 p-2 rounded-lg border border-lime-500"
									/>
								</div>

								{/* Profile Info */}
								<div className="info_section flex flex-col space-y-2 text-center md:text-left">
									<p className="text-xl md:text-2xl">Molla Storehouse</p>

									{/* Taglines */}
									<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>1160 Sqft</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>Lalpur Upazila, Pabna</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>+8801712345678</p>
										</div>
									</div>

									<p className="w-full md:w-fit text-sm md:text-base">
										A 35-year-old male agricultural worker, has 3+ years of
										experience in crop planting, harvesting, irrigation
										management, and pest control. Employed full-time since March
										1, 2021, under supervisor Jane Smith, he handles planting,
										weeding, harvesting, and maintaining irrigation systems. He
										operates and maintains farm machinery and holds
										certifications in pesticide application and OSHA safety
										training.
									</p>
								</div>
							</div>
							<div className="connection flex flex-col items-center justify-between space-y-4">
								<Button className="">250\Hr BDT</Button>
								<Button className="">Connect</Button>
							</div>
						</div>
						<div className="storeHouse flex items-center justify-between ">
							<div className="store_info w-4/5 flex items-center space-x-5">
								{/* Profile Image */}
								<div className="image_section">
									<img
										src={store}
										alt="User"
										className="w-80 bg-lime-200 p-2 rounded-lg border border-lime-500"
									/>
								</div>

								{/* Profile Info */}
								<div className="info_section flex flex-col space-y-2 text-center md:text-left">
									<p className="text-xl md:text-2xl">Molla Storehouse</p>

									{/* Taglines */}
									<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>1160 Sqft</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>Lalpur Upazila, Pabna</p>
										</div>
										<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
											<p>+8801712345678</p>
										</div>
									</div>

									<p className="w-full md:w-fit text-sm md:text-base">
										A 35-year-old male agricultural worker, has 3+ years of
										experience in crop planting, harvesting, irrigation
										management, and pest control. Employed full-time since March
										1, 2021, under supervisor Jane Smith, he handles planting,
										weeding, harvesting, and maintaining irrigation systems. He
										operates and maintains farm machinery and holds
										certifications in pesticide application and OSHA safety
										training.
									</p>
								</div>
							</div>
							<div className="connection flex flex-col items-center justify-between space-y-4">
								<Button className="">250\Hr BDT</Button>
								<Button className="">Connect</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Store_list;
