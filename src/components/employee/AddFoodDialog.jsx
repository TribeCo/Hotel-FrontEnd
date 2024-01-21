import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
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
	Box,
	Typography,
} from "@mui/material";

const AddFoodDialog = ({
	open,
	handleClose,
	handleAddFood,
	handleUploadImage,
}) => {
	const validationSchema = Yup.object({
		price: Yup.number()
			.positive("ورودی باید یک عدد مثبت باشد")
			.required("قیمت الزامی است"),
		name: Yup.string().required("نام غذا الزامی است"),
		description: Yup.string().required("توضیحات الزامی است"),
	});

	const formik = useFormik({
		initialValues: {
			price: "",
			name: "",
			description: "",
			count: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleAddFood({
				info: {
					price: values.price,
					name: values.name,
					description: values.description,
					count: 100,
					day: "2023-12-11",
				},
				image: {
					file: values.image,
				},
			});
			handleClose();
		},
	});
	return (
		<Dialog
			fullWidth
			open={open}
			onClose={handleClose}>
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">افزودن غذای جدید</DialogTitle>
				<DialogContent>
					<TextField
						label="نام غذا"
						name="name"
						value={formik.values.name}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.name && Boolean(formik.errors.name)}
						helperText={formik.touched.name && formik.errors.name}
					/>
					<TextField
						label="قیمت"
						name="price"
						value={formik.values.price}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.price && Boolean(formik.errors.price)}
						helperText={formik.touched.price && formik.errors.price}
					/>
					<TextField
						label="توضیحات"
						multiline
						rows={4}
						name="description"
						value={formik.values.description}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={
							formik.touched.description && Boolean(formik.errors.description)
						}
						helperText={formik.touched.description && formik.errors.description}
					/>
					<Box
						sx={{
							mt: 2,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Button



							variant="contained"
							component="label"
							htmlFor="image"
							sx={{
								"&:hover": {
									backgroundColor: "#ffffff",
								},
								borderRadius: 2,
								bgcolor: "#ebe6e6",
								textTransform: "none",
							}}>


							انتخاب تصویر
							<input
								id="image"
								name="image"
								type="file"
								accept="image/*"
								onChange={(event) => {
									formik.setFieldValue("image", event.currentTarget.files[0]);
								}}
								style={{ display: "none" }}
							/>
						</Button>
						{formik.values.image && (
							<Typography>{formik.values.image.name}</Typography>
						)}
					</Box>
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
						}}>
						لغو</Button>
					<Button
						onClick={formik.handleSubmit}

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
						افزودن
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default AddFoodDialog;
