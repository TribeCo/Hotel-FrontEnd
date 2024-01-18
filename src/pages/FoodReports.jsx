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
							<Typography> گزارش سالانه </Typography>
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
							<Typography> گزارش ماهانه </Typography>
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
							<Typography> گزارش روزانه </Typography>
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
					</Paper>
				</Grid>
			</Grid>
		);
	} else {
		return <Loading />;
	}
};

export default FoodReports;
