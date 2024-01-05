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

const AddRoomDialog = ({ open, handleClose, handleAddRoom }) => {
	const roomTypes = {
		v: "VIP",
		o: "معمولی",
	};

	const validationSchema = Yup.object({
		type: Yup.string().required("نوع اتاق الزامی است"),
		number: Yup.number()
			.typeError("ورودی باید یک عدد باشد")
			.required("تعداد تخت ها الزامی است"),
		bed_count: Yup.number()
			.typeError("ورودی باید یک عدد باشد")
			.required("تعداد تخت ها الزامی است"),
		price_one_night: Yup.number()
			.typeError("ورودی باید یک عدد باشد")
			.required("قیمت رزرو هر شب الزامی است"),
		description: Yup.string().required("توضیحات الزامی است"),
	});

	const formik = useFormik({
		initialValues: {
			number: "",
			type: "",
			bed_count: "",
			price_one_night: "",
			description: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleAddRoom({
				info: {
					number: values.number,
					type: values.type,
					bed_count: values.bed_count,
					price_one_night: values.price_one_night,
					description: values.description,
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
			open={open}
			fullWidth
			onClose={handleClose}>
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">افزودن اتاق جدید</DialogTitle>
				<DialogContent>
					<InputLabel id="type-label">نوع اتاق</InputLabel>
					<Select
						labelId="room-type-label"
						id="type"
						name="type"
						value={formik.values.type}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.type && Boolean(formik.errors.type)}>
						{Object.entries(roomTypes).map(([key, value]) => (
							<MenuItem
								key={key}
								value={key}>
								{value}
							</MenuItem>
						))}
					</Select>
					<TextField
						label="شماره اتاق"
						name="number"
						value={formik.values.number}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.number && Boolean(formik.errors.number)}
						helperText={formik.touched.number && formik.errors.number}
					/>
					<TextField
						label="تعداد تخت ها"
						name="bed_count"
						value={formik.values.bed_count}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.bed_count && Boolean(formik.errors.bed_count)}
						helperText={formik.touched.bed_count && formik.errors.bed_count}
					/>
					<TextField
						label="قیمت رزرو هر شب"
						name="price_one_night"
						value={formik.values.price_one_night}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={
							formik.touched.price_one_night &&
							Boolean(formik.errors.price_one_night)
						}
						helperText={
							formik.touched.price_one_night && formik.errors.price_one_night
						}
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
								borderRadius: 2,
								bgcolor: "#F8F8F2",
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

export default AddRoomDialog;
