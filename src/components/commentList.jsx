import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, TextField, Grid, Typography, Divider } from "@mui/material";

const CommentList = ({ comments, isOpen, onClose, sendComment }) => {
	const validationSchema = Yup.object({
		comment: Yup.string(),
	});

	const formik = useFormik({
		initialValues: {
			comment: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			sendComment(values.comment);
			// Clear the form or perform other actions if needed
			formik.resetForm();
		},
	});
	return (
		<Drawer
			anchor="left"
			open={isOpen}
			onClose={onClose}
			sx={{
				"& .MuiDrawer-paper": {
					width: "300px",
					position: "static",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "100%",
				},
			}}>
			<List>
				{comments.map((comment, index) => (
					<>
						<ListItem key={index}>
							<ListItemText primary={comment.text} />
						</ListItem>
						<Divider />
					</>
				))}
			</List>

			<Grid p={1}>
				<Divider />
				<form onSubmit={formik.handleSubmit}>
					<TextField
						sx={{
							mb: 1,
							borderRadius: 3,
						}}
						multiline
						rows={4}
						fullWidth
						name="comment"
						id="comment"
						label="نظر شما"
						value={formik.values.comment}
						onChange={formik.handleChange}
						error={formik.touched.comment && Boolean(formik.errors.comment)}
						helperText={formik.touched.comment && formik.errors.comment}
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{
							mb: 1,
							borderRadius: 3,
							bgcolor: "#F8F8F2",
						}}>
						<SendIcon sx={{ mr: 1 }} />
						<Typography variant="h6">ارسال کامنت</Typography>
					</Button>
				</form>
			</Grid>
		</Drawer>
	);
};

export default CommentList;
