import React, { useState, useEffect } from "react";
import "./employee_list.css";
import "./tailwind.css";
import Admin from "../services/admin";
import { useAuth } from "../context/AuthContext";

const EmployeeList = () => {
	const [cardData, setCardData] = useState([]);
	const { accessToken } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await Admin.getAll({ authToken: accessToken });
				console.log(res);
				if (res.status === 200) {
					setCardData(res.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [accessToken]);

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
							<p className="employeemy-card-text">
								نام کارمند: {cardInfo.firstName + " " + cardInfo.lastName}
							</p>
							<p className="employeemy-card-text">
								عنوان شغلی: {Role(cardInfo.role)}
							</p>
							<p className="employeemy-card-text">کدملی: {cardInfo.id}</p>
							<p className="employeemy-card-text">ایمیل: {cardInfo.email}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const Role = (role) => {
	if (role === "m") {
		return "مدیر هتل";
	} else if (role === "d") {
		return "معاون هتل";
	} else if (role === "a") {
		return "پذیرش هتل";
	} else {
		return "مدیر رستوران";
	}
};

export default EmployeeList;
