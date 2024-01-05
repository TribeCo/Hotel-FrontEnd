import React, { useState } from "react";
import { DateObject, Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/plugins/colors";
import fa from "react-date-object/locales/persian_fa";
import jalali from "react-date-object/calendars/jalali";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Box,
	Typography,
} from "@mui/material";

function isReserved(strDate) {
	return reserved.some(([start, end]) => strDate >= start && strDate <= end);
}

const reserved = [
	[
		new DateObject({ calendar: jalali, locale: fa }).format(),
		new DateObject({ calendar: jalali, locale: fa }).setDay(22).format(),
	],
];

const ResRoom = ({ open, handleClose, handleReserve }) => {
	const [values, setValues] = useState([]);
	const handleSelect = (date) => {
		handleClose();
		console.log(date);
	};
	const handle = () => {
		const date = {
			from: {
				year: values[0].year,
				month: values[0].month.number,
				day: values[0].day,
			},
			to: {
				year: values[1].year,
				month: values[1].month.number,
				day: values[1].day,
			},
		};
		console.log(date);
	};
	const maxDate = new DateObject().add(1, "month");
	const minDate = new DateObject();
	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">تاریخ رزرو</DialogTitle>
				<DialogContent sx={{ minHeight: 400 }}>
					<Calendar
						className="bg-dark"
						minDate={minDate}
						maxDate={maxDate}
						calendar={jalali}
						locale={fa}
						multiple
						range
						value={values}
						// onChange={setValues}
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
							let className;
							const strDate = date.format();
							className = "un-availble";

							if (className) return { className };
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>
						<Typography>لغو</Typography>
					</Button>
					<Button
						onClick={() => {}}
						color="primary">
						<Typography>رزرو</Typography>
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default ResRoom;
