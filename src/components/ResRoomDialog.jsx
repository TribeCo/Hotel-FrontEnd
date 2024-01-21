import React, { useState } from "react";
import { DateObject, Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/teal.css";
import fa from "react-date-object/locales/persian_fa";
import jalali from "react-date-object/calendars/jalali";
import moment from "moment-jalaali";
import { useNavigate } from "react-router-dom";

import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Box,
	Typography,
	Divider,
} from "@mui/material";
import Room from "../services/room";

const ResRoom = ({
	open,
	handleClose,
	room_type_id,
	reserved,
	accessToken,
}) => {
	const Navigate = useNavigate();
	const [values, setValues] = useState(null);
	const minDate = new DateObject({ calendar: jalali, locale: fa });
	const maxDate = new DateObject({ calendar: jalali, locale: fa }).add(
		1,
		"month",
	);
	const isReserved = (strDate) => {
		return reserved.some((reservedDate) => reservedDate === strDate);
	};
	const handleReserveRoom = async (data) => {
		try {
			await Room.reserve({ data: data, authToken: accessToken });
			alert("اتاق با موفقیت رزرو شد.");
			Navigate("/dashboard");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<Box sx={{ mt: 1, mb: 1, mr: 5, ml: 5 }}>
				<DialogTitle align="center">
					<Typography variant="h5">رزرو اتاق</Typography>
				</DialogTitle>
				<DialogContent>
					<Divider />
					<Typography sx={{ mb: 4, mt: 2 }}>
						لطفا یک بازه را جهت رزور انتخاب کنید.
					</Typography>
					<Calendar
						shadow={false}
						className="bg-dark teal"
						minDate={minDate}
						maxDate={maxDate}
						calendar={jalali}
						locale={fa}
						range
						rangeHover
						value={values}
						onChange={(ranges) => {
							const isClickedOutsideUnAvailbleDates = reserved.every(
								([start, end]) =>
									ranges.some(
										(range) =>
											range[0]?.format?.() === start &&
											range[1]?.format?.() === end,
									),
							);
							if (!isClickedOutsideUnAvailbleDates) return false;
							setValues(ranges);
						}}
						mapDays={({ date }) => {
							const strDate = moment(
								`${date.year}/${date.month.number}/${date.day}`,
								"jYYYY/jM/jD",
							).format("YYYY-MM-DD");
							if (isReserved(strDate)) {
								return {
									disabled: true,
									style: { backgroundColor: "#256b70" },
									onClick: () => alert("این تاریخ رزرو شده است"),
								};
							}
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						variant="contained"
						component="label"
						sx={{
							"&:hover": {
								backgroundColor: "#ffffff",
							},
							borderRadius: 2,
							bgcolor: "#ebe6e6",
							textTransform: "none",
						}}>
						<Typography>لغو</Typography>
					</Button>
					<Button
						onClick={() => {
							if (values) {
								const check_in = moment(
									`${values[0].year}/${values[0].month.number}/${values[0].day}`,
									"jYYYY/jM/jD",
								).format("YYYY-MM-DD hh:mm:ss");
								const nights = values[1].toDays() - values[0].toDays() + 1;
								const reserve = { check_in, nights, room_type_id };
								console.log(reserve);
								handleReserveRoom(reserve);
								handleClose();
							} else {
								alert("لطفا یک بازه معتبر را انتخاب نمایید.");
							}
						}}
						variant="contained"
						component="label"
						sx={{
							"&:hover": {
								backgroundColor: "#ffffff",
							},
							borderRadius: 2,
							bgcolor: "#ebe6e6",
							textTransform: "none",
						}}
						color="primary">
						<Typography>رزرو</Typography>
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default ResRoom;
