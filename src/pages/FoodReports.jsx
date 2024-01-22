import React, { useState, useEffect } from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Paper,
	TableRow,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Container,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";

import Report from "../services/report";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/utils/Loading";
import Chart from "../services/charts";

const FoodReports = () => {
	const { accessToken } = useAuth();
	const [loading, setLoading] = useState(false);
	const [report, setReport] = useState({
		monthly_sales: 0,
		monthly_count: 0,
		yearly_sales: 0,
		yearly_count: 0,
		daily_sales: 0,
		daily_count: 0,
	});
	const [year, setYear] = useState([]);
	const [month, setMonth] = useState([]);
	const [day, setDay] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const chartRes = await Chart.getFoodReport({ authToken: accessToken });
				setYear(chartRes.data.year);
				setMonth(chartRes.data.month);
				setDay(chartRes.data.day);
				const res = await Report.getFoodReports({ authToken: accessToken });
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
			<Container
				maxWidth="lg"
				sx={{ mt: 4, mb: 4 }}>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						md={4}>
						<Paper sx={{ padding: 2 }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									p: 2,
								}}>
								<Typography variant="h5"> گزارش روزانه </Typography>
							</Box>
							<Divider />
							<TableContainer>
								<Table aria-label="caption table 1">
									<TableBody>
										<TableRow>
											<TableCell>
												<Typography mb={3}>تعداد غذا های رزرو شده:</Typography>
												<Typography>مجموع درآمد رزرو غذا ها:</Typography>
											</TableCell>
											<TableCell align="right">
												<Box mb={3}>{report.daily_count}</Box>
												<Box>{report.daily_sales}</Box>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							<Divider />
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									mt: 3,
								}}>
								<PieChart
									series={[
										{
											data: day,
											highlightScope: { faded: "global", highlighted: "item" },
											sortingValues: "desc",
											faded: {
												innerRadius: 15,
												additionalRadius: -30,
												color: "gray",
											},
											paddingAngle: 3,
											innerRadius: 3,
											outerRadius: 100,
										},
									]}
									margin={{ right: 5 }}
									height={200}
									width={200}
									slotProps={{
										legend: { direction: "column", hidden: true },
									}}
								/>
							</Box>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Paper sx={{ padding: 2 }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									p: 2,
								}}>
								<Typography variant="h5"> گزارش ماهانه </Typography>
							</Box>
							<Divider />
							<TableContainer>
								<Table aria-label="caption table 1">
									<TableBody>
										<TableRow>
											<TableCell>
												<Typography mb={3}>تعداد غذا های رزرو شده:</Typography>
												<Typography>مجموع درآمد رزرو غذا ها:</Typography>
											</TableCell>
											<TableCell align="right">
												<Box mb={3}>{report.monthly_count}</Box>
												<Box>{report.monthly_sales}</Box>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							<Divider />
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									mt: 3,
								}}>
								<PieChart
									series={[
										{
											data: month,
											highlightScope: { faded: "global", highlighted: "item" },
											sortingValues: "desc",
											faded: {
												innerRadius: 15,
												additionalRadius: -30,
												color: "gray",
											},
											paddingAngle: 3,
											innerRadius: 3,
											outerRadius: 100,
										},
									]}
									margin={{ right: 5 }}
									height={200}
									width={200}
									slotProps={{
										legend: { direction: "column", hidden: true },
									}}
								/>
							</Box>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Paper sx={{ padding: 2 }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									p: 2,
								}}>
								<Typography variant="h5"> گزارش سالانه </Typography>
							</Box>
							<Divider />
							<TableContainer>
								<Table aria-label="caption table 1">
									<TableBody>
										<TableRow>
											<TableCell>
												<Typography mb={3}>تعداد غذا های رزرو شده:</Typography>
												<Typography>مجموع درآمد رزرو غذا ها:</Typography>
											</TableCell>
											<TableCell align="right">
												<Box mb={3}>{report.yearly_count}</Box>
												<Box>{report.yearly_sales}</Box>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							<Divider />
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									mt: 3,
								}}>
								<PieChart
									series={[
										{
											data: year,
											highlightScope: { faded: "global", highlighted: "item" },
											sortingValues: "desc",
											faded: {
												innerRadius: 15,
												additionalRadius: -30,
												color: "gray",
											},
											paddingAngle: 3,
											innerRadius: 3,
											outerRadius: 100,
										},
									]}
									margin={{ right: 5 }}
									height={200}
									width={200}
									slotProps={{
										legend: { direction: "column", hidden: true },
									}}
								/>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		);
	} else {
		return <Loading />;
	}
};

export default FoodReports;
