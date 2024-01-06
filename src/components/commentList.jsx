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

const CommentList = ({ comments, isOpen, onClose, sendComment }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [editMoodComment, setEditMoodComment] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const validationSchema = Yup.object({
    comment: Yup.string().required("کامنت ارسالی نمی‌تواند خالی باشد"),
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

  const editFormik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle editing logic for the selected comment
      sendComment(values.text);
      // Clear the form or perform other actions if needed
      editFormik.resetForm();
      setEditMoodComment(null);
    },
  });

  const handleEditClick = (commentId) => {
    setEditMoodComment(commentId);
  };

  const handleSaveClick = () => {
    // Handle save logic for the edited comment
    editFormik.handleSubmit();
  };

  const handleMenuClick = (event, index, comment) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
    setSelectedCommentId(comment.id); // Store the selected comment ID
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
    setSelectedCommentId(null); // Reset selected comment ID when the menu closes
  };

  const handleEdit = (comment) => {
    // Using the selectedCommentId to identify the comment to edit
    if (comment !== null) {
      handleEditClick(comment.id);
    }
    handleMenuClose();
  };

  const handleDeleteClick = (comment) => {
    // Using the selectedCommentId to identify the comment to delete
    if (comment !== null) {
      // Open the delete confirmation dialog
      setDeleteConfirmationOpen(true);
    }
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    // Handle delete logic for the selected comment
    if (selectedCommentId !== null) {
      // delete the comment with selectedCommentId
      // handleDeleteComment(selectedCommentId);
    }
    // temporary solution: close the window!
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteCancel = () => {
    // Close the delete confirmation dialog
    setDeleteConfirmationOpen(false);
  };

  const handleCancelEdit = () => {
    // Cancel the editing process
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
      }}
    >
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
                    onSubmit={editFormik.handleSubmit}
                  >
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
                        <Grid container direction={"row"} spacing={1}>
                          <Grid item xs={6}>
                            <Button
                              onClick={handleSaveClick}
                              type="submit"
                              variant="contained"
                              fullWidth
                              component="label"
                              sx={{
                                "&:hover": {
                                  backgroundColor: "#ffffff",
                                },
                                borderRadius: 3,
                                mt: 1,
                                bgcolor: "#ebe6e6",
                                textTransform: "none",
                              }}
                            >
                              ذخیره
                            </Button>
                          </Grid>
                          <Grid item xs={6}>
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
                                mt: 1,
                                bgcolor: "#ebe6e6",
                                textTransform: "none",
                              }}
                            >
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
                    onClick={(event) => handleMenuClick(event, index, comment)}
                  >
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
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleEdit(comments[selectedIndex])}>
          ویرایش کامنت
        </MenuItem>
        <MenuItem onClick={() => handleDeleteClick(comments[selectedIndex])}>
          حذف کامنت
        </MenuItem>
      </Menu>

      <Dialog
        open={deleteConfirmationOpen}
        onClose={handleDeleteCancel}
        aria-labelledby="delete-comment-dialog-title"
      >
        <DialogTitle id="delete-comment-dialog-title">
          از حذف این کامنت اطمینان دارید؟
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleDeleteCancel}
            variant="contained"
            component="label"
            sx={{
              "&:hover": {
                backgroundColor: "#ffffff",
              },
              borderRadius: 2,
              bgcolor: "#ebe6e6",
              textTransform: "none",
            }}
          >
            انصراف
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            component="label"
            sx={{
              "&:hover": {
                backgroundColor: "#ffffff",
              },
              borderRadius: 2,
              bgcolor: "#ebe6e6",
              textTransform: "none",
            }}
          >
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
              error={
                formik.touched.comment && Boolean(formik.errors.comment)
              }
              helperText={
                formik.touched.comment && formik.errors.comment
              }
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
              value={editFormik.values.text}
              error={
                editFormik.touched.text && Boolean(editFormik.errors.text)
              }
              helperText={
                editFormik.touched.text && editFormik.errors.text
              }
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
            }}
          >
            <SendIcon sx={{ mr: 1 }} />
            <Typography variant="h6">ارسال کامنت</Typography>
          </Button>
        </form>
      </Grid>
    </Drawer>
  );
};

export default CommentList;
