import React from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	Box,
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
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">حذف کارمند</DialogTitle>
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
			</Box>
		</Dialog>
	);
};

export default DeleteEmployeeDialog;
