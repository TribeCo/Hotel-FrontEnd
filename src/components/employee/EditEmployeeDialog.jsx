import React from "react";
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
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

const EditEmployeeDialog = ({
	open,
	handleClose,
	handleEditEmployee,
	employeeData,
}) => {
	const roles = {
		m: "مدیر کل",
		d: "معاون هتل",
		a: "پذیرش هتل",
		r: "مدیر رستوران",
	};

	const validationSchema = Yup.object({
		role: Yup.string().required("مقام الزامی است"),
	});

	const formik = useFormik({
		initialValues: {
			role: employeeData.role || "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleEditEmployee(values);
			handleClose();
		},
	});

	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<Box sx={{ m: 2, minWidth: 300 }}>
				<DialogTitle align="center">ویرایش مقام کارمند</DialogTitle>
				<DialogContent>
					{/* <TextField
						label="نام"
						name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.firstName && Boolean(formik.errors.firstName)}
						helperText={formik.touched.firstName && formik.errors.firstName}
					/>
					<TextField
						label="نام خانوادگی"
						name="lastName"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.lastName && Boolean(formik.errors.lastName)}
						helperText={formik.touched.lastName && formik.errors.lastName}
					/>
					<TextField
						label="کد ملی"
						name="nationalCode"
						value={formik.values.nationalCode}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={
							formik.touched.nationalCode && Boolean(formik.errors.nationalCode)
						}
						helperText={
							formik.touched.nationalCode && formik.errors.nationalCode
						}
					/> */}
					<InputLabel id="role-label">مقام</InputLabel>
					<Select
						label="مقام"
						labelId="role-label"
						name="role"
						value={formik.values.role}
						onChange={formik.handleChange}
						fullWidth
						margin="dense"
						error={formik.touched.role && Boolean(formik.errors.role)}>
						{Object.entries(roles).map(([key, value]) => (
							<MenuItem
								key={key}
								value={key}>
								{value}
							</MenuItem>
						))}
					</Select>
					{/* <TextField
						label="ایمیل"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/> */}
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
						ویرایش
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default EditEmployeeDialog;
