import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography, Paper } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";

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

	const roomData_day = [
		400, 300, 200, 278, 189, 239, 349, 400, 300, 200, 278, 189, 239, 349, 400,
		300, 200, 278, 189, 239, 349, 400, 300, 200, 278, 189, 239, 349, 400, 300,
	];
	const foodData_day = [
		240, 138, 980, 390, 480, 380, 430, 240, 138, 980, 390, 480, 380, 430, 240,
		138, 980, 390, 480, 380, 430, 240, 138, 980, 390, 480, 380, 430, 120, 230,
	];

	const roomData_month = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
	const foodData_month = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

	const roomData_year = [4000, 3000, 2000];
	const foodData_year = [2400, 1398, 9800];

	const xLabels_year = [1400, 1401, 1402];

	const xLabels_month = [
		"فروردین",
		"اردیبهشت",
		"خرداد",
		"تیر",
		"مرداد",
		"شهریور",
		"مهر",
		"آبان",
		"آذر",
		"دی",
		"بهمن",
		"اسفند",
	];
	const xLabels_day = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	];

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await Report.getAllReports({ authToken: accessToken });
				console.log(res);
				setReport(res.data);
				setLoading(false);
			} catch (error) {
				alert(error);
				setLoading(false);
			}
		};
		fetchData();
	}, [accessToken]);
	if (!loading) {
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
								<Typography variant="h5">گزارش سالانه</Typography>
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
									{report.room_reservation.yearly_count} نفر
								</Typography>
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
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>تعداد غذا های فروخته شده : </Typography>
								<Typography>{report.food_sales.yearly_count} عدد</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>مجموع درآمد رزرو غذاها: </Typography>
								<Typography>{report.food_sales.yearly_sales} تومان</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>مجموع درآمد کل: </Typography>
								<Typography>
									{report.food_sales.yearly_sales +
										report.room_reservation.yearly_reservation}
									تومان
								</Typography>
							</Box>
							<Divider />
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}>
						<Paper>
							<BarChart
								sx={{
									direction: "rtl",
								}}
								height={378}
								series={[
									{
										data: foodData_year,
										label: "درآمد رستوران",
										stack: "stack1",
									},
									{
										data: roomData_year,
										label: "درآمد رزرو اتاق",
										stack: "stack1",
									},
								]}
								xAxis={[{ data: xLabels_year, scaleType: "band" }]}
							/>
						</Paper>
					</Grid>
				</Grid>
				{/* m */}
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
								<Typography variant="h5">گزارش ماهانه</Typography>
							</Box>
							<Divider />
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>تعداد مهمانان:‌ </Typography>
								<Typography>
									{" "}
									{report.room_reservation.monthly_count} نفر
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>مجموع درآمد رزرو اتاق ها: </Typography>
								<Typography>
									{report.room_reservation.monthly_reservation} تومان
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>تعداد غذا های فروخته شده : </Typography>
								<Typography>{report.food_sales.monthly_count} عدد</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>مجموع درآمد رزرو غذاها: </Typography>
								<Typography>{report.food_sales.monthly_sales} تومان</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>مجموع درآمد کل: </Typography>
								<Typography>
									{report.room_reservation.monthly_reservation +
										report.food_sales.monthly_sales}{" "}
									تومان
								</Typography>
							</Box>
							<Divider />
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}>
						<Paper
							sx={{
								padding: 2,
							}}>
							<BarChart
								sx={{
									direction: "rtl",
								}}
								height={348}
								series={[
									{
										data: roomData_month,
										label: "درآمد رستوران",
										stack: "stack1",
									},
									{
										data: foodData_month,
										label: "درآمد رزرو اتاق",
										stack: "stack1",
									},
								]}
								xAxis={[{ data: xLabels_month, scaleType: "band" }]}
							/>
						</Paper>
					</Grid>
				</Grid>
				{/* day */}
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
								<Typography variant="h5">گزارش روزانه</Typography>
							</Box>
							<Divider />
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>تعداد مهمانان:‌ </Typography>
								<Typography>
									{" "}
									{report.room_reservation.daily_count} نفر
								</Typography>
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
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>تعداد غذا های فروخته شده : </Typography>
								<Typography>{report.food_sales.daily_count} عدد</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									p: 2,
								}}>
								<Typography>مجموع درآمد رزرو غذاها: </Typography>
								<Typography>{report.food_sales.daily_sales} تومان</Typography>
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
								</Typography>
							</Box>
							<Divider />
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}>
						<Paper
							sx={{
								padding: 2,
							}}>
							<LineChart
								sx={{
									direction: "rtl",
								}}
								height={348}
								series={[
									{
										data: roomData_day,
										label: "درآمد رستوران",
										stack: "stack1",
									},
									{
										data: foodData_day,
										label: "درآمد رزرو اتاق",
										stack: "stack1",
									},
								]}
								xAxis={[{ data: xLabels_day, scaleType: "band" }]}
							/>
						</Paper>
					</Grid>
				</Grid>
			</>
		);
	} else {
		return <Loading />;
	}
};

export default Reports;
