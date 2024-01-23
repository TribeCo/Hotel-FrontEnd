import React, { useState, useEffect } from "react";
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
	Container,
	Checkbox,
	LinearProgress,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Food from "../services/food";
import Loading from "../components/utils/Loading";

const Reservations = () => {
	const { accessToken } = useAuth();
	const [foodList, setFoodList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [deliveryLoading, setdeliveryLoading] = useState(false);

	const handleButtonClick = async (food) => {
		setdeliveryLoading(true);
		try {
			await Food.delivered({
				uid: food.id,
				data: {
					delivery: !food.delivery,
				},
				authToken: accessToken,
			});
			const res = await Food.getAll({ authToken: accessToken });
			setFoodList(res.data);
		} catch (error) {
			alert(error);
		}
		setdeliveryLoading(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await Food.getAll({ authToken: accessToken });
				setFoodList(res.data);
				console.log(res.data);
			} catch (error) {
				alert(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [accessToken]);
	if (!loading) {
		return (
			<Container
				maxWidth="lg"
				sx={{ mt: 4, mb: 4 }}>
				<Paper sx={{ padding: 2 }}>
					<Grid item>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								bgcolor: "#303030",
								p: 2,
							}}>
							<Typography variant="h5">غذا های رزرو شده روز</Typography>
						</Box>
						{deliveryLoading && <LinearProgress />}
						<Divider />
						<TableContainer>
							<Table aria-label="caption table">
								<TableHead>
									<TableRow>
										<TableCell align="center">
											<Typography variant="h6">وضعیت تحویل</Typography>
										</TableCell>
										<TableCell align="center">
											<Typography variant="h6">سفارش دهنده</Typography>
										</TableCell>
										<TableCell align="center">
											<Typography variant="h6">نام غذا</Typography>
										</TableCell>
										<TableCell align="center">
											<Typography variant="h6">قیمت غذا</Typography>
										</TableCell>
										<TableCell align="center">
											<Typography variant="h6">محل تحویل</Typography>
										</TableCell>
										<TableCell align="center">
											<Typography variant="h6">تحویل</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{foodList.map((food) => (
										<TableRow key={food.id}>
											<TableCell
												component="th"
												scope="row">
												<Checkbox
													checked={food.delivery}
													disabled
												/>
											</TableCell>
											<TableCell align="center">
												{food.user.firstName + food.user.lastName}
											</TableCell>
											<TableCell align="center">{food.food.name}</TableCell>
											<TableCell align="center">{food.food.price}</TableCell>
											<TableCell align="center">
												{food.place === "r" ? "رستوران" : `اتاق`}
											</TableCell>
											<TableCell align="center">
												<Button
													variant="contained"
													disabled={food.delivery}
													color={food.delivery ? "success" : "primary"}
													onClick={() => handleButtonClick(food)}
													sx={{
														"&:hover": {
															backgroundColor: "#1340b0",
														},
														bgcolor: "#2358de",
														width: 150,
														color: food.delivery ? "white" : "inherit",
													}}>
													{food.delivery ? "تحویل داده شده" : "تحویل"}
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Paper>
			</Container>
		);
	} else {
		return <Loading />;
	}
};

export default Reservations;
