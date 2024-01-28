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

const DeleteDialog = ({ open, handleClose, handleDelete, title }) => {
	const handleDeleteClick = () => {
		handleDelete();
		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">{`حذف ${title}`}</DialogTitle>
				<DialogContent>
					<Typography>{`از حذف ${title} اطمینان دارید؟`}</Typography>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
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
						لغو
					</Button>
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

export default DeleteDialog;
