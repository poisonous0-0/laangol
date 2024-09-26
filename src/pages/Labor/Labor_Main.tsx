import search from "../../assets/search.png";
import getHired from "../../assets/getHired.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

const Labor_Main = () => {
	return (
		<>
			<div className="labor_main p-4 md:p-8">
				<div className="heading mb-10 md:mb-20 text-3xl md:text-4xl text-lime-900 font-semibold text-left">
					<h1>Labor Management</h1>
				</div>

				<div className="contents">
					{/* Responsive box container */}
					<div className="box_container flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
						{/* Hire a Labor box */}
						<Link to="labor_list">
							<div className="box bg-lime-50 w-full md:w-auto py-6 px-10 md:px-20 border border-lime-500 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-900">
								<img src={search} alt="Hire a labor" className="w-12 md:w-16" />
								<p>Hire a labor</p>
							</div>
						</Link>

						{/* Get Hired box */}
						<Link to="labor_profile">
							<div className="box bg-lime-50 w-full md:w-auto py-6 px-10 md:px-20 border border-lime-500 rounded-lg flex flex-col items-center justify-center space-y-4 text-xl md:text-2xl text-lime-900">
								<img src={getHired} alt="Get Hired" className="w-12 md:w-16" />
								<p>Get Hired</p>
							</div>
						</Link>
					</div>

					{/* Responsive profile section */}
					<div className="profile_container mt-10 md:mt-20 flex flex-col items-center justify-center space-y-8 md:space-y-12 text-lime-900">
						<div className="heading bg-lime-800 px-8 md:px-12 py-2 md:py-3 rounded-md text-xl md:text-2xl">
							<h1>Your Profile</h1>
						</div>

						<div className="profile flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-3 px-4 md:px-12 py-3 rounded-md">
							{/* Profile Image */}
							<div className="image_section">
								<img
									src={user}
									alt="User"
									className="w-36 md:w-48 bg-lime-200 p-2 rounded-lg border border-lime-500"
								/>
							</div>

							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2 text-center md:text-left">
								<p className="text-xl md:text-2xl">Dipto Mahdud Sultan</p>

								{/* Taglines */}
								<div className="taglines flex flex-col md:flex-row items-center justify-center md:justify-normal space-y-2 md:space-y-0 md:space-x-3">
									<div className="tag px-2 py-1 bg-lime-100 rounded-md border border-lime-800 text-sm">
										<p>3+ years Experience</p>
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
									operates and maintains farm machinery and holds certifications
									in pesticide application and OSHA safety training.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Labor_Main;
