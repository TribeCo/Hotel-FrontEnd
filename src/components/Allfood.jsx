import React, { useEffect, useState } from "react";
import Loading from "./utils/Loading";
import "./allfood.css";
import "./tailwind.css";
import popup from "../assets/allfood_popup.png";
import { Fab, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import AddRoomDialog from "./employee/AddRoomDialog";
import Food from "../services/food";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import AddFoodDialog from "./employee/AddFoodDialog";

const Allfood = () => {
	const [openAddDialog, setOpenAddDialog] = useState(false); // Ceate
	const [loading, setLoading] = useState(false);
	const [cardData, setCardData] = useState([]);
	const { accessToken } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await Food.getAllFood({ authToken: accessToken });
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
	const [isCalendarOpen, setCalendarOpen] = useState(false);

	const handleCalendarButtonClick = () => {
		setCalendarOpen(true);
	};

	const handleCloseCalendar = () => {
		setCalendarOpen(false);
	};

	const handleAddFood = async (data) => {
		try {
			setLoading(true);
			const res = await Admin.create({ data: data, authToken: accessToken });
			if (res.status === 201) {
				const d = await Admin.getAll({ authToken: accessToken });
				console.log(d);
				if (d.status === 200) {
					cardData(d.data);
				}
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const handleAddBtnClick = () => {
		setOpenAddDialog(true);
	};

	const handleClose = () => {
		setOpenAddDialog(false);
	};

	if (cardData.length > 0) {
		return (
			<div>
				<Fab
					onClick={handleAddBtnClick}
					variant="extended"
					style={{
						position: "fixed",
						bottom: 0,
						left: 0,
						margin: "16px",
					}}>
					<AddCircle sx={{ mr: 1 }} />
					<Typography>افزودن غذا</Typography>
				</Fab>
				{openAddDialog && (
							<AddFoodDialog 
								open={openAddDialog}
								handleClose={handleClose}
								handleAddFood={handleAddFood}
							/>
				)}

				<div className=" bg-cover  flex flex-col justify-center items-center allfoodbody">
					<div className="flex flex-col justify-center items-center relative">
						<p className="allfoodtext mb-8">رزرو غذا</p>
						<div
							className="  grid grid-cols-1 lg:grid-cols-2 gap-4  p-6"
							id="allfoodcardContainer">
							{cardData.map((cardInfo, index) => (
								<Link to={`/food/${cardInfo.id}`}>
									<div
										key={index}
										className="allfoodcard  p-2 flex flex-row items-center">
										<img
											src={cardInfo.image}
											className="allfoodimage object-cover  ml-1"
											alt={`Image for Card ${index + 1}`}
										/>
										<div>
											<p className="allfoodcard-text  mb-3 mr-2">
												{cardInfo.name}
											</p>
											<p className="allfoodcard-text  mr-2">{cardInfo.price}</p>
										</div>
									</div>
								</Link>
							))}
						</div>
						<button
							className="absolute top-24 right-2 -mt-3 -mr-3  "
							id="calendarButton"
							onClick={handleCalendarButtonClick}>
							<img
								src={popup}
								alt="Circle Image"
								width="40px"
								height="40px"
								className="allfooditem-bg   p-2"
							/>
						</button>
					</div>

					{isCalendarOpen && (
						<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
							<div className="relative p-4 rounded-lg shadow-xl w-72 allfoodpop-up flex flex-col items-center justify-center gap-4">
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
									className="allfooddate border border-gray-300 mt-6 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
								/>
								<button className="allfoodchange">اعمال تغییرات</button>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default Allfood;
