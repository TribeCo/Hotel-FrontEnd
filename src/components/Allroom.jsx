import "./allroom.css";
import "./tailwind.css";
import Room from "../services/room";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Loading from "../components/utils/Loading";
import { Fab, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import AddRoomDialog from "./employee/AddRoomDialog";
import { useGetUser } from "../context/UserContext";

function AllRoom() {
	const [openAddDialog, setOpenAddDialog] = useState(false);
	const [loading, setLoading] = useState(false);
	const [cardData, setCardData] = useState([]);
	const { accessToken } = useAuth();
	const { user } = useGetUser();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await Room.getAll({ authToken: accessToken });
				console.log(res);
				if (res.status === 200) {
					setCardData(res.data);
				}
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		console.log(user);
		fetchData();
	}, [accessToken]);

	const [isPopupVisible, setPopupVisible] = useState(false);

	const handleFilterButtonClick = () => {
		setPopupVisible(!isPopupVisible);
	};
	const inc = () => {
		const value = parseInt(numberInput.value);
		numberInput.value = value + 1;
	};
	const dec = () => {
		const value = parseInt(numberInput.value);
		if (value > 0) {
			numberInput.value = value - 1;
		}
	};

	const handleAddRoom = async (data) => {
		try {
			setLoading(true);
			const resRoom = await Room.create({
				data: data.info,
				authToken: accessToken,
			});
			console.log(resRoom);
			const d = await Room.uploadImage({
				file: data.image.file,
				authToken: accessToken,
				uid: resRoom.data.id,
			});
			console.log(d);
			const res = await Room.getAll({ authToken: accessToken });
			setCardData(res.data);
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

	if (!loading) {
		return (
			<div>
				{user.role !== "u" ? (
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
						<Typography>افزودن اتاق</Typography>
					</Fab>
				) : (
					""
				)}

				{openAddDialog && (
					<AddRoomDialog
						open={openAddDialog}
						handleClose={handleClose}
						handleAddRoom={handleAddRoom}
					/>
				)}

				<div
					dir="ltr"
					id="mainc"
					className="bg-cover bg-center flex flex-col justify-center items-center">
					<div className="flex flex-col justify-center items-center relative">
						<p className="allroomtext mb-8">رزرو اتاق</p>
						<div
							className=" rounded-lg  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 b-5 p-2"
							id="allroomcardContainer">
							{cardData.map((cardInfo, index) => (
								<Link to={`/room/${cardInfo.id}`}>
									<div
										key={index}
										className="m-4 allroomcard p-2">
										<img
											src={cardInfo.image}
											className="w-full h-32 object-cover mb-4 allroomimage"
											alt={`Image for Card ${index + 1}`}
										/>
										<div>
											<h5 className="font-semibold mb-2 allroomcard-header-text">
												شماره اتاق: {cardInfo.number}
											</h5>
											<p className="allroomcard-text">
												قیمت اتاق: {cardInfo.price_one_night} تومان
											</p>
										</div>
									</div>
								</Link>
							))}
						</div>
						{/* <button
							className="absolute top-24 -right-4 -mt-1 -mr-1"
							id="filter"
							onClick={handleFilterButtonClick}>
							<img
								src={filter}
								alt="Circle Image"
								width="38px"
								height="38px"
								className="rounded-full allroomitem-bg p-2"
							/>
						</button> */}
					</div>
					{isPopupVisible && (
						<div
							id="allroompopup"
							className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
							<div
								id="filterPopup"
								class="allroompopupcard  shadow-lg  p-4 mx-auto mt-10">
								<button
									id="closeButton"
									class="close-button absolute top-2 right-2"
									onClick={handleFilterButtonClick}>
									<span class="text-gray-600 hover:text-gray-800 cursor-pointer">
										&times;
									</span>
								</button>
								<div class="small-card left-card">
									<div class="number-input-wrapper flex items-center mb-4">
										<button
											id="decrementButton"
											onClick={dec}
											class="number-button">
											-
										</button>
										<input
											id="numberInput"
											class="number-input  text-center focus:outline-none focus:border-blue-500"
											type="text"
											value="0"
										/>
										<button
											id="incrementButton"
											onClick={inc}
											class="number-button">
											+
										</button>
									</div>
									<div class="card-text">تعداد تخت ها</div>
								</div>
								<div class="small-card middle-card">
									<div class="card-text">نوع اتاق</div>
									<label class="container flex items-center mb-2">
										<input
											type="radio"
											name="roomType"
											checked
										/>
										<span class="checkmark ml-2"></span>
										وی آی پی
									</label>
									<label class="container flex items-center mb-2">
										<input
											type="radio"
											name="roomType"
										/>
										<span class="checkmark ml-2"></span>
										عادی
									</label>
									<label class="container flex items-center">
										<input
											type="radio"
											name="roomType"
										/>
										<span class="checkmark ml-2"></span>
										بدون فیلتر
									</label>
								</div>
								{/* <div class="small-card right-card px-4">
									<div class="card-text">قیمت</div>
									<input
										type="range"
										min="0"
										max="5000000"
										step="100000"
										class="slider w-full active "
										id="priceSlider"
										onChange={slide}
									/>
									<div
										id="sliderValue"
										class="slider text-center mt-2">
										تومان 1500000
									</div>
								</div> */}
								<button
									id="applyButton"
									class="custom-button "
									onClick={handleFilterButtonClick}>
									اعمال تغییرات
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	} else {
		return <Loading />;
	}
}

export default AllRoom;
