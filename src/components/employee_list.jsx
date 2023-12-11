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
			id="employeebody"
			className="flex flex-col justify-center items-center">
			<div
				className="border-8 rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-4 b-5 p-4"
				id="employeecardContainer">
				{cardData.map((cardInfo, index) => (
					<div
						key={index}
						className="rounded employeemy-card flex flex-row items-center justify-center">
						<div
							// dir="rtl"
							className="my-fields">
							<p className="employeemy-card-text">نام کارمند: {cardInfo.name}</p>
							<p className="employeemy-card-text">عنوان شغلی: {cardInfo.jobname}</p>
							<p className="employeemy-card-text">کدملی: {cardInfo.id}</p>
							<p className="employeemy-card-text">ایمیل: {cardInfo.email}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EmployeeList;
