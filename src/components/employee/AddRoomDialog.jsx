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
		v: "وی آی پی",
		n: "عادی",
	};

	const validationSchema = Yup.object({
		type: Yup.string().required("نوع اتاق الزامی است"),
		bedCount: Yup.number().typeError("ورودی باید یک عدد باشد").required("تعداد تخت ها الزامی است"),
		priceOneNight: Yup.number().typeError("ورودی باید یک عدد باشد").required("قیمت رزرو هر شب الزامی است"),
		// features: (no validation)
	});

	const formik = useFormik({
		initialValues: {
			type: "",
			bedCount: "",
			priceOneNight: "",
			features: "",
			image: null,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleAddRoom({
				type: values.type,
				bedCount: values.bedCount,
				priceOneNight: values.priceOneNight,
				features: values.features,
				image: values.image,
			});
			handleClose();
		},
	});

	return (
		<Dialog
			open={open}
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
						label="تعداد تخت ها"
						name="bedCount"
						value={formik.values.bedCount}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.bedCount && Boolean(formik.errors.bedCount)}
						helperText={formik.touched.bedCount && formik.errors.bedCount}
					/>
					<TextField
						label="قیمت رزرو هر شب"
						name="priceOneNight"
						value={formik.values.priceOneNight}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={
							formik.touched.priceOneNight && Boolean(formik.errors.priceOneNight)
						}
						helperText={
							formik.touched.priceOneNight && formik.errors.priceOneNight
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

export default AddRoomDialog;
