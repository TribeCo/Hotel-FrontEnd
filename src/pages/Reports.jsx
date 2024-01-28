import React, { useEffect, useState } from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Paper,
	Container,
} from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";

import Report from "../services/report";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/utils/Loading";
import Chart from "../services/charts";

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

	const [loading, setLoading] = useState(false);
	const [chartsData, setChartsData] = useState({
		year: { labels: [], food: [], room: [] },
		month: { labels: [], food: [], room: [] },
		day: { labels: [], food: [], room: [] },
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				let res;
				const data = {
					year: { labels: [], food: [], room: [] },
					month: { labels: [], food: [], room: [] },
					day: { labels: [], food: [], room: [] },
				};

				res = await Chart.getYearReport({ authToken: accessToken });
				data.year = {
					labels: Object.keys(res.data.room),
					room: Object.values(res.data.room),
					food: Object.values(res.data.food),
				};
				res = await Chart.getMonthReport({ authToken: accessToken });
				data.month = {
					labels: Object.keys(res.data.room),
					room: Object.values(res.data.room),
					food: Object.values(res.data.food),
				};
				res = await Chart.getDayReport({ authToken: accessToken });
				data.day = {
					labels: Object.keys(res.data.room),
					room: Object.values(res.data.room),
					food: Object.values(res.data.food),
				};

				res = await Report.getAllReports({ authToken: accessToken });

				setChartsData(data);
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
			<Container
				maxWidth="lg"
				sx={{ mt: 4, mb: 4 }}>
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
									margin: 2,
								}}
								height={378}
								series={[
									{
										data: chartsData.year.room,
										label: "درآمد رزرو اتاق",
										stack: "stack1",
									},
									{
										data: chartsData.year.food,
										label: "درآمد رستوران",
										stack: "stack1",
									},
								]}
								xAxis={[{ data: chartsData.year.labels, scaleType: "band" }]}
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
						<Paper>
							<BarChart
								sx={{
									direction: "rtl",
									margin: 2,
								}}
								height={378}
								layout="horizontal"
								series={[
									{
										data: chartsData.month.room,
										label: "درآمد رزرو اتاق",
										stack: "stack1",
									},
									{
										data: chartsData.month.food,
										label: "درآمد رستوران",
										stack: "stack1",
									},
								]}
								yAxis={[
									{
										data: [
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
										],
										scaleType: "band",
									},
								]}
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
						<Paper>
							<LineChart
								sx={{
									direction: "rtl",
									margin: 2,
								}}
								height={378}
								series={[
									{
										data: chartsData.day.food,
										label: "درآمد رستوران",
									},
									{
										data: chartsData.day.room,
										label: "درآمد رزرو اتاق",
									},
								]}
								xAxis={[{ data: chartsData.day.labels, scaleType: "band" }]}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		);
	} else {
		return <Loading />;
	}
};

export default Reports;
