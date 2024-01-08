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
					<Button onClick={handleClose}
						variant="contained"
						component="label"
						sx={{
							"&:hover": {
								backgroundColor: "#ffffff",
							},
							borderRadius: 2,
							bgcolor: "#ebe6e6",
							textTransform: "none",
						}}>لغو</Button>
					<Button
						onClick={handleDeleteClick}
						variant="contained"
						component="label"
						sx={{
							"&:hover": {
								backgroundColor: "#ffffff",
							},
							borderRadius: 2,
							bgcolor: "#ebe6e6",
							textTransform: "none",
						}}>
						حذف
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default DeleteEmployeeDialog;
