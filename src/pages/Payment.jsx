import React from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Button,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
} from "@mui/material";
import { AttachMoneyOutlined, ListRounded } from "@mui/icons-material";

const PaymentPage = () => {
	const rows = [
		{ name: "اتاق 161 VIP", price: 400000, num: 5 },
		{ name: "چیزبرگر مخصوص", price: 140000, num: 2 },
		{ name: "نوشابه خانواده پپسی", price: 40000, num: 5 },
		{ name: "چلو کباب مخصوص", price: 190000, num: 6 },
	];
	const handlePayment = () => {
		alert("پرداخت با موفقیت انجام شد");
		console.log("Payment success!");
	};
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
									<TableCell align="center">قیمت هر واحد (تومان)</TableCell>
									<TableCell align="center">تعداد</TableCell>
									<TableCell align="right">قیمت کل</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell
											component="th"
											scope="row">
											{row.name}
										</TableCell>
										<TableCell align="center">{row.price}</TableCell>
										<TableCell align="center">{row.num}</TableCell>
										<TableCell align="right">{row.price * row.num}</TableCell>
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
						<Typography> {"2000000"} تومان</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							p: 2,
						}}>
						<Typography>رستوران : </Typography>
						<Typography> {"1620000"} تومان</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							p: 2,
						}}>
						<Typography>تخفیف : </Typography>
						<Typography> {"20000"} تومان</Typography>
					</Box>
					<Divider />
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							p: 2,
						}}>
						<Typography>{"مجموع مبلغ قابل پرداخت :"}</Typography>
						<Typography> {"3600000"}</Typography>
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
