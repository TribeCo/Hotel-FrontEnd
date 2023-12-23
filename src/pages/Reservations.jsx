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
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Food from "../services/food";

const Reservations = () => {
	const initialFoodList = [
		{
			id: 1,
			user: { firstName: "رضا", lastName: "بوذرجمهری" },
			foodName: "Burger",
			foodPrice: "10$",
			delivered: true,
		},
		{
			id: 2,
			user: { firstName: "رضا", lastName: "بوذرجمهری" },
			foodName: "Pizza",
			foodPrice: "15$",
			delivered: false,
		},
		// Add more food objects as needed
	];

	const { accessToken } = useAuth();
	const [foodList, setFoodList] = useState(initialFoodList);

	const handleButtonClick = (foodId) => {
		const updatedFoodList = foodList.map((food) =>
			food.id === foodId ? { ...food, delivered: !food.delivered } : food,
		);
		setFoodList(updatedFoodList);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await Food.getAll({ authToken: accessToken });
				console.log(res.data);
				setFoodList(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [accessToken]);

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
						<Typography variant="h5">غذا های رزرو شده</Typography>
					</Box>
					<Divider />
					<TableContainer>
						<Table aria-label="caption table">
							<TableHead>
								<TableRow>
									<TableCell>وضعیت تحویل</TableCell>
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
										<Typography variant="h6">عملیات</Typography>
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
												checked={food.delivered}
												disabled
											/>
										</TableCell>
										<TableCell align="center">
											{food.user.firstName + food.user.lastName}
										</TableCell>
										<TableCell align="center">{food.food.name}</TableCell>
										<TableCell align="center">{food.food.price}</TableCell>
										<TableCell align="center">
											<Button
												variant="contained"
												color={food.delivered ? "success" : "primary"}
												onClick={() => handleButtonClick(food.id)}
												sx={{
													width: 150,
													color: food.delivered ? "white" : "inherit",
												}}>
												{food.delivered ? "تحویل داده شده" : "تحویل"}
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
};

export default Reservations;
