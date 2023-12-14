import React from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
} from "@mui/material";

const DeleteEmployeeDialog = ({
	open,
	handleClose,
	handleDeleteEmployee,
	employeeData,
}) => {
	const handleDeleteClick = () => {
		handleDeleteEmployee(employeeData);
		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<DialogTitle>حذف کارمند</DialogTitle>
			<DialogContent>
				<Typography>
					آیا از حذف کارمند {employeeData.firstName} {employeeData.lastName}{" "}
					اطمینان دارید؟
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>لغو</Button>
				<Button
					onClick={handleDeleteClick}
					color="primary">
					حذف
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteEmployeeDialog;
