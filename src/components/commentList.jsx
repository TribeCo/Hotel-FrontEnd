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
} from "@mui/material";

const CommentList = ({
	comments,
	isOpen,
	onClose,
	sendComment,
	editComment,
	deleteComment,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
	const [editMoodComment, setEditMoodComment] = useState(null);
	const [selectedCommentId, setSelectedCommentId] = useState(null);

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
			formik.resetForm();
		},
	});

	const editFormik = useFormik({
		initialValues: {
			comment: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			editComment({ comment_id: editMoodComment, text: values.comment });
			setEditMoodComment(null);
		},
	});

	const handleEditClick = (commentId) => {
		setEditMoodComment(commentId);
	};

	const handleSaveClick = () => {
		setEditMoodComment(null);
	};

	const handleMenuClick = (event, index, comment) => {
		setAnchorEl(event.currentTarget);
		setSelectedIndex(index);
		setSelectedCommentId(comment.id);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		setSelectedIndex(null);
		setSelectedCommentId(null); // Reset selected comment ID when the menu closes
	};

	const handleEdit = (comment) => {
		if (comment !== null) {
			handleEditClick(comment.id);
		}
		handleMenuClose();
	};

	const handleDeleteClick = (comment) => {
		if (comment !== null) {
			setSelectedCommentId(comment.id);
			setDeleteConfirmationOpen(true);
		}
		handleMenuClose();
	};

	// Handle delete logic for the selected comment
	const handleDeleteConfirm = (comment_id) => {
		if (comment_id !== null) {
			deleteComment(comment_id);
		}
		setDeleteConfirmationOpen(false);
	};

	// Close the delete confirmation dialog
	const handleDeleteCancel = () => {
		setDeleteConfirmationOpen(false);
	};

	// Cancel the editing process
	const handleCancelEdit = () => {
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
								<Grid p={2}>
									<Formik
										initialValues={{
											text: comment.text,
										}}
										validationSchema={validationSchema}
										onSubmit={handleEdit}>
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
													autoComplete="text"
													error={touched.text && Boolean(errors.text)}
												/>
												<ErrorMessage name="text" />
												<Grid
													container
													direction={"row"}
													spacing={1}>
													<Grid
														item
														xs={6}>
														<Button
															onClick={handleSaveClick}
															type="submit"
															fullWidth
															variant="contained"
															sx={{
																mt: 1,
																borderRadius: 3,
																bgcolor: "#F8F8F2",
															}}>
															ذخیره
														</Button>
													</Grid>
													<Grid
														item
														xs={6}>
														<Button
															onClick={handleCancelEdit}
															type="submit"
															fullWidth
															variant="contained"
															sx={{
																mt: 1,
																mb: 1,
																borderRadius: 3,
																bgcolor: "#F8F8F2",
															}}>
															انصراف
														</Button>
													</Grid>
												</Grid>
											</Form>
										)}
									</Formik>
								</Grid>
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
				<MenuItem onClick={() => handleEdit(comments[selectedIndex])}>
					ویرایش کامنت
				</MenuItem>
				<MenuItem
					onClick={() => {
						setSelectedCommentId(comments[selectedIndex].id);
						handleDeleteClick(comments[selectedIndex]);
					}}>
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
						onClick={handleDeleteCancel}
						color="primary">
						انصراف
					</Button>
					<Button
						onClick={() => {
							console.log(selectedCommentId);
							handleDeleteConfirm(comments[selectedIndex].id);
						}}
						color="error">
						حذف
					</Button>
				</DialogActions>
			</Dialog>

			<Grid p={1}>
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
							value={formik.values.comment}
							onChange={formik.handleChange}
							error={formik.touched.comment && Boolean(formik.errors.comment)}
							helperText={formik.touched.comment && formik.errors.comment}
						/>
					)}

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
