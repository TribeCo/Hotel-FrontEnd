import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
	Button,
	TextField,
	Grid,
	Typography,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Dialog,
	DialogTitle,
	DialogActions,
	LinearProgress,
} from "@mui/material";

const CommentList = ({
	comments,
	isOpen,
	onClose,
	sendComment,
	editComment,
	deleteComment,
	isLoading,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
	const [editMoodComment, setEditMoodComment] = useState(null);
	const [selectedComment, setSelectedComment] = useState(null);

	const validationSchema = Yup.object({
		comment: Yup.string().required("کامنت ارسالی نمی‌تواند خالی باشد"),
	});
	const editSchema = Yup.object({
		text: Yup.string().required("ویرایش کامنت نمیتواند خالی باشد."),
	});

	const formik = useFormik({
		initialValues: {
			comment: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			sendComment(values.comment);
			formik.resetForm();
		},
	});
	const handleEditClick = (comment) => {
		handleMenuClose();
		setEditMoodComment(comment.id);
	};
	const handleDeleteClick = (comment) => {
		console.log(comment);
		if (comment !== null) {
			setSelectedComment(comment);
			setDeleteConfirmationOpen(true);
		}
		handleMenuClose();
	};

	const handleDeleteCancel = () => {
		setDeleteConfirmationOpen(false);
	};
	const handleCancelEdit = () => {
		// Cancel the editing process
		setEditMoodComment(null);
	};

	const handleMenuClick = (event, index) => {
		setAnchorEl(event.currentTarget);
		setSelectedIndex(index);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		setSelectedIndex(null);
	};
	const handleEditSubmit = ({ text, comment_id }) => {
		editComment({ text: text, comment_id: comment_id });
		setEditMoodComment(null);
	};

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
					<React.Fragment key={index}>
						<ListItem>
							{editMoodComment === comment.id ? (
								<Formik
									initialValues={{
										text: comment.text,
										comment_id: comment.id,
									}}
									validationSchema={editSchema}
									onSubmit={handleEditSubmit}>
									{({ errors, touched }) => (
										<Form>
											<Field
												as={TextField}
												margin="normal"
												type="text"
												required
												fullWidth
												id="text"
												name="text"
												error={touched.text && Boolean(errors.text)}
											/>
											<ErrorMessage name="text" />
											<Grid
												container
												direction="row"
												spacing={1}>
												<Grid
													item
													xs={6}>
													<Button
														type="submit"
														variant="contained"
														fullWidth
														sx={{
															"&:hover": {
																backgroundColor: "#ffffff",
															},
															borderRadius: 3,
															m: 1,
															bgcolor: "#ebe6e6",
															textTransform: "none",
														}}>
														<Typography>ذخیره</Typography>
													</Button>
												</Grid>
												<Grid
													item
													xs={6}>
													<Button
														onClick={handleCancelEdit}
														type="button"
														variant="contained"
														fullWidth
														component="label"
														sx={{
															"&:hover": {
																backgroundColor: "#ffffff",
															},
															borderRadius: 3,
															m: 1,
															bgcolor: "#ebe6e6",
															textTransform: "none",
														}}>
														<Typography>انصراف</Typography>
													</Button>
												</Grid>
											</Grid>
										</Form>
									)}
								</Formik>
							) : (
								<>
									<ListItemText primary={comment.text} />
									<IconButton
										onClick={(event) => handleMenuClick(event, index, comment)}>
										<MoreVertIcon />
									</IconButton>
								</>
							)}
						</ListItem>
						<Divider />
					</React.Fragment>
				))}
			</List>

			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}>
				<MenuItem onClick={() => handleEditClick(comments[selectedIndex])}>
					ویرایش کامنت
				</MenuItem>
				<MenuItem onClick={() => handleDeleteClick(comments[selectedIndex])}>
					حذف کامنت
				</MenuItem>
			</Menu>
			<Dialog
				open={deleteConfirmationOpen}
				onClose={handleDeleteCancel}
				aria-labelledby="delete-comment-dialog-title">
				<DialogTitle id="delete-comment-dialog-title">
					از حذف این کامنت اطمینان دارید؟
				</DialogTitle>
				<DialogActions>
					<Button
						onClick={() => handleDeleteCancel()}
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
						انصراف
					</Button>
					<Button
						onClick={() => {
							deleteComment(selectedComment.id);
							setDeleteConfirmationOpen(false);
						}}
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
			</Dialog>

			<Grid p={1}>
				{isLoading && <LinearProgress />}
				<Divider />
				<form onSubmit={formik.handleSubmit}>
					{editMoodComment === null ? (
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
					) : (
						<TextField
							sx={{
								mb: 1,
								borderRadius: 3,
							}}
							disabled
							multiline
							rows={4}
							fullWidth
							name="comment"
							id="comment"
							label="نظر شما"
						/>
					)}

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{
							"&:hover": {
								backgroundColor: "#ffffff",
							},
							borderRadius: 3,

							bgcolor: "#ebe6e6",
							mb: 1,
							textTransform: "none",
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
