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
		<div
			id="receptionbody"
			className="flex flex-col justify-center items-center">
			<button
				className="fixed top-4 right-4 receptionreturn rounded-md shadow-md"
				onClick={handleFilterButtonClick}>
				بازگشت به داشبورد
			</button>
			<div className="flex flex-col justify-center items-center relative">
				<p className="receptiontext mb-8">پذیرش</p>
				<div
					className="container border-8 rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-4 b-5 p-4"
					id="receptioncardContainer">
					{cardData.slice(0, 15).map((cardInfo, index) => (
						<div key={index} className="rounded receptioncard flex flex-row items-center justify-center">
						<div dir="rtl" className="receptionfields">
							<p className="receptioncard-text">نام مهمان: {cardInfo.name}</p>
							<p className="receptioncard-text">شماره اتاق: {cardInfo.roomnum}</p>
							<p className="receptioncard-text">نوع اتاق: {cardInfo.roomtype}</p>
							<p className="receptioncard-text">پرداخت شده: {cardInfo.paid}</p>
							<p className="receptioncard-text">باقی مانده: {cardInfo.remain}</p>
						</div>
						</div>
					))}
				</div>
				<button
					className="absolute top-20 right-4 -mt-3 -mr-3"
					id="filter"
					onClick={handleFilterButtonClick}>
					<img
						src="/src/assets/reception_popup.png"
						alt="Circle Image"
						width="38px"
						height="38px"
						className="rounded-full receptionitem-bg p-1"
					/>
				</button>
			</div>
			{isPopupVisible && (
				<div
					id="receptionpopup"
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="relative p-4 rounded-lg shadow-xl w-72 receptionpop-up flex flex-col items-center justify-center gap-8">
						{/* Close icon at top right corner */}
						<div
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							id="receptionclose"
							className="absolute rounded-full top-2 mb-4 right-2 h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
							onClick={handleFilterButtonClick}>
							<img
								src="/src/assets/x.png"
								alt="Close Icon"
							/>
						</div>
						<div className="flex flex-col gap-4 justify-center">
							<label
								className="receptioncustom-checkbox gap-2"
								dir="rtl">
								<input type="checkbox" />
								<span className="checkmark"></span>
								تسویه شده
							</label>
							<label
								className="receptioncustom-checkbox gap-2"
								dir="rtl">
								<input type="checkbox" />
								<span className="checkmark"></span>
								وی آی پی
							</label>
						</div>
						<button className="receptionchange">اعمال تغییرات</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Reception;
