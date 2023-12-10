import React from "react";
import "./employee_list.css"; // Import your CSS file here
import "./tailwind.css";

const EmployeeList = () => {
	const cardData = [
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		{
			name: "---",
			jobname: "---",
			id: "---",
			email: "---",
		},
		// Add more objects for each card as needed
	];

	return (
		<div
			id="body"
			className="flex flex-col justify-center items-center">
			<div
				className="container border-8 rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-4 b-5 p-4"
				id="cardContainer">
				{cardData.map((cardInfo, index) => (
					<div
						key={index}
						className="rounded card flex flex-row items-center justify-center">
						<div
							// dir="rtl"
							className="my-fields">
							<p className="my-card-text">نام کارمند: {cardInfo.name}</p>
							<p className="my-card-text">عنوان شغلی: {cardInfo.jobname}</p>
							<p className="my-card-text">کدملی: {cardInfo.id}</p>
							<p className="my-card-text">ایمیل: {cardInfo.email}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EmployeeList;
