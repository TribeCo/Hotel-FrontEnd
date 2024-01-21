import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Box,
	Typography,
	ToggleButtonGroup,
	ToggleButton,
	Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Food from "../services/food";

const ReserveFoodDialog = ({ open, handleClose, food_id, accessToken }) => {
	const Navigate = useNavigate();
	const [selected, setSelected] = useState(null);
	const handleSelect = (e, select) => {
		setSelected(select);
	};
	const handleReserveFood = async (data) => {
		try {
			await Food.reserve({ data: data, authToken: accessToken });
			alert("رزرو غذا با موفقیت انجام شد!");
			Navigate("/dashboard");
		} catch (error) {
			alert("در ثبت سفارش خطایی رخ داد! لطفا دوباره تلاش کنید.");
		}
	};
	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">
					<Typography variant="h5">رزرو غذا</Typography>
				</DialogTitle>
				<DialogContent>
					<Divider />
					<Typography sx={{ mb: 5, mt: 2 }}>
						لطفا وعده غذایی مورد نظر را انتخاب کنید.
					</Typography>
					<ToggleButtonGroup
						value={selected}
						exclusive
						onChange={handleSelect}>
						<ToggleButton value="d">
							{/* <Typography>ناهار</Typography> */}
							<Typography>ناهار : 11:00 الی 16:00</Typography>
						</ToggleButton>
						<ToggleButton value="n">
							{/* <Typography>شام</Typography> */}
							<Typography>شام : 18:00 الی 22:00</Typography>
						</ToggleButton>
					</ToggleButtonGroup>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>
						<Typography>لغو</Typography>
					</Button>
					<Button
						onClick={() => {
							if (selected) {
								handleReserveFood({ food_id: food_id, meal: selected });
								handleClose();
							} else {
								alert("لطفا وعده سرو غذا را انتخاب کنید.");
							}
						}}
						color="primary">
						<Typography>رزرو</Typography>
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default ReserveFoodDialog;
