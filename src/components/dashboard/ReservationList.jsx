import React from "react";
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TableContainer,
	Grid,
	Typography,
	Paper,
} from "@mui/material";
import moment from "moment-jalaali";

const ReservationList = ({ roomList, foodList }) => {
	console.log(roomList);
	return (
		<Grid
			display="flex"
			flexDirection="column"
			container
			mt={2}>
			<Paper sx={{ p: 2, background: "#1f1f1f" }}>
				<Typography variant="h5">لیست تمام اتاق های رزرو شده</Typography>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									<Typography>نام اتاق</Typography>
								</TableCell>
								<TableCell>
									<Typography>تاریخ ورود</Typography>
								</TableCell>
								<TableCell>
									<Typography>تاریخ خروج</Typography>
								</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{roomList.map((row, index) => (
								<TableRow key={index}>
									<TableCell>{row.room.number}</TableCell>
									<TableCell>
										{moment(row.check_in, "YYYY-MM-DD").format("jYYYY/jMM/jDD")}
									</TableCell>
									<TableCell>
										{moment(row.check_in, "YYYY-MM-DD")
											.add(row.night_count, "days")
											.format("jYYYY/jMM/jDD")}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
			<Paper sx={{ mt: 2, p: 2, background: "#1f1f1f" }}>
				<Typography variant="h5">لیست غذا های رزرو شده امروز</Typography>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									<Typography>نام غذا</Typography>
								</TableCell>
								<TableCell>
									<Typography>وعده غذایی</Typography>
								</TableCell>
								<TableCell>
									<Typography>محل دریافت</Typography>
								</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{foodList.map((row, index) => (
								<TableRow key={index}>
									<TableCell>{row.food.name}</TableCell>
									<TableCell>{row.meal === "d" ? "ناهار" : "شام"}</TableCell>
									<TableCell>
										{row.place === "r" ? "در رستوران" : "در اتاق"}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Grid>
	);
};

export default ReservationList;
