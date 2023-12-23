import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Avatar,
	Typography,
	Box,
	TextField,
} from "@mui/material";

const EmployeeInfoDialog = ({ open, handleClose, employeeData }) => {
	const roles = {
		m: "مدیر کل",
		d: "معاون هتل",
		a: "پذیرش هتل",
		r: "مدیر رستوران",
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth="xs"
			fullWidth>
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">اطلاعات کارمند</DialogTitle>
				<DialogContent>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						textAlign="start">
						<Avatar
							alt="Employee Avatar"
							src={"https://hotelback.iran.liara.run" + employeeData.image}
							sx={{ width: 80, height: 80, mb: 2 }}
						/>
						<Typography
							variant="h6"
							gutterBottom>
							{`${employeeData.firstName} ${employeeData.lastName}`}
						</Typography>
						<Typography
							variant="body1"
							color="textSecondary"
							gutterBottom>
							{roles[employeeData.role]}
						</Typography>
						<TextField
							label="کد ملی"
							name="nationalCode"
							value={employeeData.nationalCode}
							disabled
							fullWidth
							margin="normal"
						/>
						<TextField
							label="ایمیل"
							name="email"
							value={employeeData.email}
							disabled
							fullWidth
							margin="normal"
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>بستن</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default EmployeeInfoDialog;
