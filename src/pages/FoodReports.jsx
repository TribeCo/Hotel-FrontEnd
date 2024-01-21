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
} from "@mui/material";
import { PieChart } from "@mui/x-charts";

import Report from "../services/report";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/utils/Loading";

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
	const data = [
		{ id: 0, value: 10, label: "جوجه کباب" },
		{ id: 1, value: 15, label: "قرمه سبزی" },
		{ id: 2, value: 20, label: "سبزی پلو با ماهی" },
		{ id: 4, value: 5, label: "ماهی دودی" },
		{ id: 3, value: 20, label: "پیتزا" },
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
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
										data,
										highlightScope: { faded: "global", highlighted: "item" },
										sortingValues: "desc",
										faded: {
											innerRadius: 30,
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
										data,
										highlightScope: { faded: "global", highlighted: "item" },
										sortingValues: "desc",
										faded: {
											innerRadius: 30,
											additionalRadius: -30,
											color: "gray",
										},
										paddingAngle: 3,
										innerRadius: 60,
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
										data,
										highlightScope: { faded: "global", highlighted: "item" },
										sortingValues: "desc",
										faded: {
											innerRadius: 30,
											additionalRadius: -30,
											color: "gray",
										},
										paddingAngle: 3,
										innerRadius: 80,
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
		);
	} else {
		return <Loading />;
	}
};

export default FoodReports;
