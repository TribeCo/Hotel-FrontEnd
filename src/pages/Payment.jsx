import React from "react";
import moment from "moment-jalaali";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Button,
	Paper,
	TableRow,
	Fab,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
} from "@mui/material";
import { AttachMoneyOutlined, ListRounded } from "@mui/icons-material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from "react-router-dom";

const PaymentPage = ({ payment }) => {
	const Navigate = useNavigate();
	const handlePayment = () => {
		alert("پرداخت با موفقیت انجام شد");
		console.log("Payment success!");
	};
	console.log(payment);
	return (
		<Grid
			sx={{
				padding: 2,
			}}
			container
			spacing={2}>

			<Fab
				onClick={() => Navigate("/faq")}
				variant="circular"
				style={{
					position: "fixed",
					bottom: 16,
					left: 16,
					margin: "12px",
				}}>
				<HelpOutlineIcon fontSize="large"/>
			</Fab>

			<Grid
				item
				xs={12}
				md={8}>
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
						<ListRounded />
						<Typography>فاکتور</Typography>
					</Box>
					<Divider />
					<TableContainer>
						<Table aria-label="caption table">
							<TableHead>
								<TableRow>
									<TableCell>نام محصول یا خدمات</TableCell>
									<TableCell align="center">قیمت (تومان)</TableCell>
									<TableCell align="center">تاریخ</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{payment.room.map((row) => (
									<TableRow key={row.room.number}>
										<TableCell
											component="th"
											scope="row">
											رزرو اتاق شماره : {row.room.number}
										</TableCell>
										<TableCell align="center">{row.total_price}</TableCell>
										<TableCell align="center">
											{moment(row.created, "YYYY-M-D")
												.endOf("jMonth")
												.format("jYYYY/jM/jD")}
										</TableCell>
									</TableRow>
								))}
								{payment.food.map((row) => (
									<TableRow key={row.food.name}>
										<TableCell
											component="th"
											scope="row">
											{row.food.name}
										</TableCell>
										<TableCell align="center">{row.food.price}</TableCell>
										<TableCell align="center">
											{moment(row.created, "YYYY-M-D")
												.endOf("jMonth")
												.format("jYYYY/jM/jD")}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
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
						<AttachMoneyOutlined />
						<Typography>صورت حساب</Typography>
					</Box>
					<Divider />
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							p: 2,
						}}>
						<Typography>رزرو اتاق : </Typography>
						<Typography> {Sum(payment.room)} تومان</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							p: 2,
						}}>
						<Typography>رستوران : </Typography>
						<Typography> {Sum(payment.food)} تومان</Typography>
					</Box>
					<Divider />
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							p: 2,
						}}>
						<Typography>{"مجموع مبلغ قابل پرداخت :"}</Typography>
						<Typography> {Sum(payment.room) + Sum(payment.food)}</Typography>
					</Box>
					<Box
						sx={{
							p: 1,
						}}>
						<Button
							color={"success"}
							fullWidth
							variant="contained"
							onClick={() => handlePayment()}>
							پرداخت
						</Button>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default PaymentPage;

const Sum = (array) => {
	let sum = 0;
	array.map((value) => {
		sum += value.remain_paid;
	});

	return sum;
};
