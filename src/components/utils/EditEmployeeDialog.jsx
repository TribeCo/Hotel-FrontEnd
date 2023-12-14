import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
} from "@mui/material";

const EditEmployeeDialog = ({
	open,
	handleClose,
	handleEditEmployee,
	employeeData,
}) => {
	const [editedData, setEditedData] = useState({
		firstName: employeeData.firstName,
		lastName: employeeData.lastName,
		role: employeeData.role,
		email: employeeData.email,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditedData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleEditClick = () => {
		// Pass the edited employee data to the parent component
		handleEditEmployee(editedData);
		// Clear the form and close the dialog
		setEditedData({
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
			<DialogTitle>ویرایش کارمند</DialogTitle>
			<DialogContent>
				<TextField
					label="نام"
					name="firstName"
					value={editedData.firstName}
					onChange={handleInputChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="نام خانوادگی"
					name="lastName"
					value={editedData.lastName}
					onChange={handleInputChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="مقام"
					name="role"
					value={editedData.role}
					onChange={handleInputChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="ایمیل"
					name="email"
					value={editedData.email}
					onChange={handleInputChange}
					fullWidth
					margin="normal"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>لغو</Button>
				<Button
					onClick={handleEditClick}
					color="primary">
					ویرایش
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default EditEmployeeDialog;
