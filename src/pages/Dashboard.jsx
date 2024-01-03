import React, { useState, useEffect } from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Paper,
	Container,
} from "@mui/material";
import { AttachMoneyOutlined } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import AvatarCard from "../components/dashboard/AvatarCard";
import RoomCard from "../components/dashboard/RoomCard";
import Loading from "../components/utils/Loading";
import Room from "../services/room";
import Food from "../services/food";

const baseUrl = "https://hotelback.iran.liara.run";

const DashboardPage = ({ user, payment, setPayment }) => {
	const [room, setRoom] = useState([]);
	const { accessToken } = useAuth();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const resRoom = await Room.getUserAll({ authToken: accessToken });
				const resFood = await Food.getUserAll({ authToken: accessToken });
				setPayment({
					room: resRoom.data.payments,
					food: resFood.data.payments,
				});
				const res = await Room.getUserRoom({ authToken: accessToken });
				setRoom(res.data.payments[0]);
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
					spacing={3}>
					<Grid
						item
						xs={12}
						md={8}
						lg={9}>
						<RoomCard res={room} />
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
								<Typography>{Sum(payment.room) + Sum(payment.food)}</Typography>
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

export default DashboardPage;

const Sum = (array) => {
	let sum = 0;
	array.map((value) => {
		sum += value.remain_paid;
	});

	return sum;
};
