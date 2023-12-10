import React, { useState } from "react";
import "./reception.css"; // Import your CSS file here
import "./tailwind.css";

const Reception = () => {
	const cardData = [
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		{
			name: "---",
			roomnum: "---",
			roomtype: "---",
			paid: "---",
			remain: "---",
		},
		// Add more objects for each card as needed
	];

	const [isPopupVisible, setPopupVisible] = useState(false);

	const handleFilterButtonClick = () => {
		setPopupVisible(!isPopupVisible);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<button
				className="fixed top-4 right-4 return rounded-md shadow-md"
				onClick={handleFilterButtonClick}>
				بازگشت به داشبورد
			</button>
			<div className="flex flex-col justify-center items-center relative">
				<p className="text mb-8">پذیرش</p>
				<div
					className="container border-8 rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-4 b-5 p-4"
					id="cardContainer">
					{/* Your card content */}
				</div>
				<button
					className="absolute top-20 right-4 -mt-3 -mr-3"
					id="filter"
					onClick={handleFilterButtonClick}>
					<img
						src="../assets/reception_popup.png"
						alt="Circle Image"
						width="38px"
						height="38px"
						className="rounded-full item-bg"
					/>
				</button>
			</div>
			{isPopupVisible && (
				<div
					id="Popup"
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="relative p-4 rounded-lg shadow-xl w-72 pop-up flex flex-col items-center justify-center gap-8">
						{/* Close icon at top right corner */}
						<div
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							id="close"
							className="absolute rounded-full top-2 mb-4 right-2 h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
							onClick={handleFilterButtonClick}>
							<img
								src="../assets/x.png"
								alt="Close Icon"
							/>
						</div>
						<div className="flex flex-col gap-4 justify-center">
							<label
								className="custom-checkbox gap-2"
								dir="rtl">
								<input type="checkbox" />
								<span className="checkmark"></span>
								تسویه شده
							</label>
							<label
								className="custom-checkbox gap-2"
								dir="rtl">
								<input type="checkbox" />
								<span className="checkmark"></span>
								وی آی پی
							</label>
						</div>
						<button className="change">اعمال تغییرات</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Reception;
