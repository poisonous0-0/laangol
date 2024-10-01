import React from "react";

interface InfoPopupProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	imageSrc: string;
	message: string;
	orderId: string;
	confirmLabel?: string;
}

const InfoPopup: React.FC<InfoPopupProps> = ({
	isOpen,
	onClose,
	onConfirm,
	imageSrc,
	message,
	orderId,
	confirmLabel = "Confirm", // Default button label
}) => {
	if (!isOpen) return null;

	return (
		<div
			id="info-popup"
			tabIndex={-1}
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-modal flex justify-center items-center"
		>
			<div className="relative p-4 w-full max-w-lg h-full md:h-auto">
				<div className="relative p-4 bg-lime-50 rounded-lg shadow dark:bg-white-800">
					<div className="flex flex-col items-center mb-4 text-sm font-light text-lime-900 dark:text-lime-900">
						<img src={imageSrc} alt="Popup visual" className="w-14 mb-4" />
						<p>{message}</p>
					</div>
					<div className="flex flex-col justify-center items-center space-y-4">
						<p className="px-3 py-2 rounded-md text-white bg-lime-800 text-center">
							Order ID: {orderId}
						</p>
						<button
							id="confirm-button"
							type="button"
							className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-lime-800 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-lime-800 dark:hover:bg-lime-900 dark:focus:ring-primary-800"
							onClick={onConfirm}
						>
							{confirmLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoPopup;
