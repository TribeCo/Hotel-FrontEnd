import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Select,
	MenuItem,
	InputLabel,
} from "@mui/material";

const AddEmployeeDialog = ({ open, handleClose, handleAddEmployee }) => {
	const [employeeData, setEmployeeData] = useState({
		firstName: "",
		lastName: "",
		role: "",
		email: "",
	});

	const roles = {
		m: "مدیر کل",
		d: "معاون هتل",
		a: "پذیرش هتل",
		r: "مدیر رستوران",
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEmployeeData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleAddClick = () => {
		// Pass the new employee data to the parent component
		// handleAddEmployee(employeeData);
		console.log(employeeData);
		// Clear the form and close the dialog
		setEmployeeData({
			firstName: "",
			lastName: "",
			role: "",
			email: "",
		});
		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<DialogTitle>افزودن کارمند جدید</DialogTitle>
			<DialogContent>
				<TextField
					label="نام"
					name="firstName"
					value={employeeData.firstName}
					onChange={handleInputChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="نام خانوادگی"
					name="lastName"
					value={employeeData.lastName}
					onChange={handleInputChange}
					fullWidth
					margin="normal"
				/>
				<InputLabel id="role-label">مقام</InputLabel>
				<Select
					labelId="role-label"
					id="role"
					name="role"
					value={employeeData.role}
					onChange={handleInputChange}
					fullWidth
					margin="normal">
					{Object.entries(roles).map(([key, value]) => (
						<MenuItem
							key={key}
							value={key}>
							{value}
						</MenuItem>
					))}
				</Select>
				<TextField
					label="ایمیل"
					name="email"
					value={employeeData.email}
					onChange={handleInputChange}
					fullWidth
					margin="normal"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>لغو</Button>
				<Button
					onClick={handleAddClick}
					color="primary">
					افزودن
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddEmployeeDialog;
