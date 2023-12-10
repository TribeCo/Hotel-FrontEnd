import React, { useState } from "react";
import "./allfood.css"; // Import your CSS file here
import "./tailwind.css";
const cardData = [
	{
		imageUrl: "https://via.placeholder.com/300x200",
		description: "Description for Card 1",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	{
		imageUrl: "https://placehold.co/300x200",
		description: "Description for Card 2",
	},
	// Add more objects for each card as needed
];

const allfood = () => {
	const [isCalendarOpen, setCalendarOpen] = useState(false);

	const handleCalendarButtonClick = () => {
		setCalendarOpen(true);
	};

	const handleCloseCalendar = () => {
		setCalendarOpen(false);
	};

	return (
		<div className="bg-cover bg-center flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center relative">
				<p className="text mb-8">رزرو غذا</p>
				<div
					className="container border-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-4 b-5 p-4"
					id="cardContainer">
					{cardData.slice(0, 15).map((cardInfo, index) => (
						<div
							key={index}
							className="bg-white rounded p-4 card flex flex-row items-center">
							<img
								src={cardInfo.imageUrl}
								className="image object-cover mb-4 mr-4"
								alt={`Image for Card ${index + 1}`}
							/>
							<div>
								<p className="text-lg mb-2 card-text">نام غذا</p>
								<p className="text-lg card-text">قیمت</p>
							</div>
						</div>
					))}
				</div>
				<button
					className="absolute top-20 right-4 -mt-3 -mr-3"
					id="calendarButton"
					onClick={handleCalendarButtonClick}>
					<img
						src="../assets/allfood_popup.png"
						alt="Circle Image"
						width="24px"
						height="24px"
						className="item-bg object-contain"
					/>
				</button>
			</div>

			{isCalendarOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="relative p-4 rounded-lg shadow-xl w-72 pop-up flex flex-col items-center justify-center gap-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							id="closeCalendar"
							className="absolute top-2 mb-4 right-2 h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
							onClick={handleCloseCalendar}>
							<path
								d="M18.5 6.5L6.5 18.5"
								stroke="#5F5C58"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6.5 6.5L18.5 18.5"
								stroke="#5F5C58"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<input
							type="date"
							className="date border border-gray-300 mt-6 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
						/>
						<button className="change">اعمال تغییرات</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default allfood;
