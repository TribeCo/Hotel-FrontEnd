import React from "react";
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

const AddFoodDialog = ({ open, handleClose, handleAddFood }) => {
	const mealChoice = {
		m: "صبحانه",
		d: "ناهار",
		n: "شام",
	};

	const validationSchema = Yup.object({
		price: Yup.number().typeError("ورودی باید یک عدد باشد").required("قیمت الزامی است"),
		name: Yup.string().required("نام غذا الزامی است"),
		meal: Yup.string().required("وعده غذایی الزامی است"),
		type: Yup.string().required("نوع غذا الزامی است"),
		count: Yup.number().typeError("ورودی باید یک عدد باشد").required("تعداد غذا الزامی است"),
	});

	const formik = useFormik({
		initialValues: {
			price: "",
			name: "",
			meal: "",
			type: "",
			count: "",
			image: null,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleAddFood({
				price: values.price,
				name: values.name,
				meal: values.meal,
				type: values.type,
				count: values.count,
				image: values.image,
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
						label="نوع غذا"
						name="type"
						value={formik.values.type}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.type && Boolean(formik.errors.type)}
						helperText={formik.touched.type && formik.errors.type}
					/>
					<InputLabel id="meal-label">وعده غذایی</InputLabel>
					<Select
						labelId="meal-label"
						id="meal"
						name="meal"
						value={formik.values.meal}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.meal && Boolean(formik.errors.meal)}>
						{Object.entries(mealChoice).map(([key, value]) => (
							<MenuItem
								key={key}
								value={key}>
								{value}
							</MenuItem>
						))}
					</Select>
					<TextField
						label="تعداد موجود از غذا"
						name="count"
						value={formik.values.count}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.count && Boolean(formik.errors.count)}
						helperText={formik.touched.count && formik.errors.count}
					/>
					<TextField
						label="قیمت رزرو هر وعده"
						name="price"
						value={formik.values.price}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={
							formik.touched.price && Boolean(formik.errors.price)
						}
						helperText={
							formik.touched.price && formik.errors.price
						}
					/>

					<Box
						sx={{
							mt: 2,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Button
							variant="contained"
							component="label"
							htmlFor="image"
							sx={{
								borderRadius: 2,
								bgcolor: "#F8F8F2",
								textTransform: "none",
							}}
						>
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
							<Typography>
								{formik.values.image.name}
							</Typography>
						)}
					</Box>

				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>لغو</Button>
					<Button
						onClick={formik.handleSubmit}
						color="primary">
						افزودن
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default AddFoodDialog;