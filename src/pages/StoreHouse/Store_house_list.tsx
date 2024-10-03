import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import store from "../../assets/warehouse.png";
import { Link } from "react-router-dom";
import HiringStore from "../../components/Popup/HiringStore";

interface Storehouse {
	storehouse_name: string;
	storehouse_id: number;
	temperature_range: string;
	location: string;
	rent_per_sq: number;
	total_size: number;
	available_size: number;
	owner_name: string;
	owner_contact: string;
	image_url: string | null;
	descriptions: string | null;
}

const StoreList = () => {
	const [storehouses, setStorehouses] = useState<Storehouse[]>([]);
	const [isHiringPopupOpen, setIsHiringPopupOpen] = useState(false);
	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchStorehouses = async () => {
			try {
				const response = await fetch(
					"http://127.0.0.1:8003/storehouse/by-region/",
					{
						method: "GET",
						headers: {
							Authorization: `Token ${token}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error("Failed to fetch storehouses");
				}

				const data: Storehouse[] = await response.json();
				setStorehouses(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchStorehouses();
	}, [token]);

	const handleConnectClick = () => {
		setIsHiringPopupOpen(true);
	};

	const handleClosePopup = () => {
		setIsHiringPopupOpen(false);
	};

	return (
		<div className="store-list p-6">
			<div className="headlines text-3xl font-semibold text-lime-200 text-center">
				<h1>Storehouse Management</h1>
			</div>
			<div className="mt-11 flex flex-col items-center space-y-8">
				<div className="heading text-3xl px-3 py-2 bg-lime-100 rounded-md border border-lime-100 text-lime-200">
					<h1>Hire a Storehouse</h1>
				</div>
				<div className="storehouses-list flex flex-col items-center space-y-7 w-full max-w-4xl">
					{storehouses.map((storehouse) => (
						<StorehouseCard
							key={storehouse.storehouse_id}
							storehouse={storehouse}
							onConnectClick={handleConnectClick}
						/>
					))}
				</div>
			</div>

			{/* HiringStore Popup */}
			<HiringStore isOpen={isHiringPopupOpen} onClose={handleClosePopup} />
		</div>
	);
};

interface StorehouseCardProps {
	storehouse: Storehouse;
	onConnectClick: () => void;
}

const StorehouseCard: React.FC<StorehouseCardProps> = ({
	storehouse,
	onConnectClick,
}) => {
	return (
		<div className="storehouse-card flex flex-col md:flex-row items-center md:justify-between p-4 bg-white rounded-lg shadow-md w-full">
			<Link
				to="storehouse_details"
				className="store_info w-full md:w-4/5 flex flex-col md:flex-row items-center space-x-5 mb-4 md:mb-0"
			>
				<div className="image_section">
					<img
						src={store}
						alt="Storehouse"
						className="w-full md:w-40 bg-lime-100 p-2 rounded-lg border border-lime-200"
					/>
				</div>
				<div className="info_section flex flex-col space-y-2 text-center md:text-left w-full">
					<p className="text-xl md:text-2xl font-bold">
						{storehouse.storehouse_name}
					</p>
					<div className="taglines flex flex-wrap items-center justify-center md:justify-start space-x-3">
						<Tag label={`${storehouse.total_size} Sqft`} />
						<Tag label={`Available size: ${storehouse.available_size} Sqft`} />
						<Tag label={storehouse.location} />
						<Tag label={storehouse.owner_contact} />
					</div>
					<p className="text-sm md:text-base mt-2">{storehouse.descriptions}</p>
				</div>
			</Link>
			<div className="connection flex flex-col items-center space-y-4 md:space-y-0 md:ml-4">
				<Button text={`${storehouse.rent_per_sq} BDT/Day`} />
				<Button text="Connect" onClick={onConnectClick} />
			</div>
		</div>
	);
};

interface TagProps {
	label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
	return (
		<div className="tag px-2 py-1 bg-lime-100 bg-opacity-10 rounded-md border border-lime-200 text-sm">
			<p>{label}</p>
		</div>
	);
};

export default StoreList;
