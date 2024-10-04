import Button from "../../components/Button/Button";
import user from "../../assets/user.png";

interface Laborer {
	laborer_name: string;
	region_name: string;
	experience: number;
	specialties: string;
	demand_fees: number;
	status: string;
	labour_id: number;
	current_hire_end_date: string | null;
	image_url: string | null;
}

const Requests_storehouse = () => {
	return (
		<>
			<div className="labor_list">
				{/* Labor management UI */}
				<div className="mt-11 contents grid-flow-row space-y-5">
					<div className="labor flex items-center space-x-5">
						<div className="labor_info w-1/2 flex items-center  space-x-5">
							<img
								src={user}
								className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
							/>
							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2">
								<p className="text-2xl">Kamrul Hassan</p>
								<p>Time: </p>
								<p>Required SQFT: </p>
								<div className="connection flex items-center space-x-5">
									<Button text="Accept" />
									<Button text="Reject" />
								</div>
							</div>
						</div>
					</div>
					<div className="labor flex items-center space-x-5">
						<div className="labor_info w-1/2 flex items-center  space-x-5">
							<img
								src={user}
								className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
							/>
							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2">
								<p className="text-2xl">Kamrul Hassan</p>
								<p>Time: </p>
								<div className="connection flex items-center space-x-5">
									<Button text="Accept" />
									<Button text="Reject" />
								</div>
							</div>
						</div>
					</div>
					<div className="labor flex items-center space-x-5">
						<div className="labor_info w-1/2 flex items-center  space-x-5">
							<img
								src={user}
								className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
							/>
							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2">
								<p className="text-2xl">Kamrul Hassan</p>
								<p>Time: </p>
								<div className="connection flex items-center space-x-5">
									<Button text="Accept" />
									<Button text="Reject" />
								</div>
							</div>
						</div>
					</div>
					<div className="labor flex items-center space-x-5">
						<div className="labor_info w-1/2 flex items-center  space-x-5">
							<img
								src={user}
								className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
							/>
							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2">
								<p className="text-2xl">Kamrul Hassan</p>
								<p>Time: </p>
								<div className="connection flex items-center space-x-5">
									<Button text="Accept" />
									<Button text="Reject" />
								</div>
							</div>
						</div>
					</div>
					<div className="labor flex items-center space-x-5">
						<div className="labor_info w-1/2 flex items-center  space-x-5">
							<img
								src={user}
								className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
							/>
							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2">
								<p className="text-2xl">Kamrul Hassan</p>
								<p>Time: </p>
								<div className="connection flex items-center space-x-5">
									<Button text="Accept" />
									<Button text="Reject" />
								</div>
							</div>
						</div>
					</div>
					<div className="labor flex items-center space-x-5">
						<div className="labor_info w-1/2 flex items-center  space-x-5">
							<img
								src={user}
								className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
							/>
							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2">
								<p className="text-2xl">Kamrul Hassan</p>
								<p>Time: </p>
								<div className="connection flex items-center space-x-5">
									<Button text="Accept" />
									<Button text="Reject" />
								</div>
							</div>
						</div>
					</div>
					<div className="labor flex items-center space-x-5">
						<div className="labor_info w-1/2 flex items-center  space-x-5">
							<img
								src={user}
								className="w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
							/>
							{/* Profile Info */}
							<div className="info_section flex flex-col space-y-2">
								<p className="text-2xl">Kamrul Hassan</p>
								<p>Time: </p>
								<div className="connection flex items-center space-x-5">
									<Button text="Accept" />
									<Button text="Reject" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Requests_storehouse;
