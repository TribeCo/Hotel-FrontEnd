import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography, Paper } from "@mui/material";

import Report from "../services/report";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/utils/Loading";

const Reports = () => {
	const { accessToken } = useAuth();
	const [report, setReport] = useState({
		food_sales: {
			monthly_sales: 0,
			monthly_count: 0,
			yearly_sales: 0,
			yearly_count: 0,
			daily_sales: 0,
			daily_count: 0,
		},
		room_reservation: {
			monthly_reservation: 0,
			monthly_count: 0,
			monthly_person: 0,
			yearly_reservation: 0,
			yearly_count: 0,
			yearly_person: 0,
			daily_reservation: 0,
			daily_count: 0,
			daily_person: 0,
		},
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await Report.getAllReports({ authToken: accessToken });
				console.log(res);
				setReport(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [accessToken]);

	return (
		<>
			<Grid
				sx={{
					padding: 2,
				}}
				container
				spacing={2}>
				<Grid
					item
					xs={12}
					md={4}>
					<Paper
						sx={{
							padding: 2,
						}}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								p: 2,
							}}>
							<Typography>گزارش سالانه</Typography>
						</Box>
						<Divider />
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>تعداد مهمهانان:‌ </Typography>
							<Typography>
								{" "}
								{report.room_reservation.yearly_count} نفر
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد رزرو اتاق ها: </Typography>
							<Typography>
								{" "}
								{report.room_reservation.yearly_reservation} تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>تعداد غذا های فروخته شده : </Typography>
							<Typography>{report.food_sales.yearly_count} عدد</Typography>
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد رزرو غذاها: </Typography>
							<Typography>
								{report.food_sales.yearly_sales} تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد کل: </Typography>
							<Typography>
								{" "}
								{report.food_sales.yearly_sales +
									report.room_reservation.yearly_reservation}{" "}
								تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Divider />
					</Paper>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}>
					<Paper
						sx={{
							padding: 2,
						}}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								p: 2,
							}}>
							<Typography>گزارش ماهانه</Typography>
						</Box>
						<Divider />
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>تعداد مهمهانان:‌ </Typography>
							<Typography>
								{" "}
								{report.room_reservation.monthly_count} نفر
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد رزرو اتاق ها: </Typography>
							<Typography>
								{" "}
								{report.room_reservation.monthly_reservation} تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>تعداد غذا های فروخته شده : </Typography>
							<Typography>
								{report.food_sales.monthly_count} عدد
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد رزرو غذاها: </Typography>
							<Typography>
								{" "}
								{report.food_sales.monthly_sales} تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد کل: </Typography>
							<Typography>
								{" "}
								{report.room_reservation.monthly_reservation +
									report.food_sales.monthly_sales}{" "}
								تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Divider />
					</Paper>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}>
					<Paper
						sx={{
							padding: 2,
						}}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								p: 2,
							}}>
							<Typography>گزارش روزانه</Typography>
						</Box>
						<Divider />
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>تعداد مهمهانان:‌ </Typography>
							<Typography>
								{" "}
								{report.room_reservation.daily_count} نفر
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد رزرو اتاق ها: </Typography>
							<Typography>
								{" "}
								{report.room_reservation.daily_reservation} تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>تعداد غذا های فروخته شده : </Typography>
							<Typography>{report.food_sales.daily_count} عدد</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد رزرو غذاها: </Typography>
							<Typography>
								{" "}
								{report.food_sales.daily_sales} تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								p: 2,
							}}>
							<Typography>مجموع درآمد کل: </Typography>
							<Typography>
								{" "}
								{report.food_sales.daily_sales +
									report.room_reservation.daily_reservation}{" "}
								تومان
							</Typography>{" "}
							{/* TODO: set value from back-end?? */}
						</Box>
						<Divider />
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default Reports;
