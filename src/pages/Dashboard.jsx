import React from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Button,
	Paper,
	Container,
} from "@mui/material";
import { AttachMoneyOutlined } from "@mui/icons-material";

import AvatarCard from "../components/dashboard/AvatarCard";
import RoomCard from "../components/dashboard/RoomCard";

const baseUrl = "https://hotelback.iran.liara.run";

const DashboardPage = (props) => {
	const user = props.user;
	console.log(user);
	if (user) {
		return (
			<Container
				maxWidth="lg"
				sx={{ mt: 4, mb: 4 }}>
				<Grid
					container
					spacing={3}>
					<Grid
						item
						xs={12}
						md={8}
						lg={9}>
						<RoomCard />
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<AvatarCard
							fullname={user.firstName + " " + user.lastName}
							Photo={baseUrl + user.image}
							role={user.role}
							email={user.email}
						/>
						<Paper
							sx={{
								padding: 2,
								mt: 2,
							}}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									p: 2,
								}}>
								<AttachMoneyOutlined />
								<Typography>صورت حساب در لحظه</Typography>
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
						</Paper>
					</Grid>
				</Grid>
			</Container>
		);
	}
};

export default DashboardPage;
