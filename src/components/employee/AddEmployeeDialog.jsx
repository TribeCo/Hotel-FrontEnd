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
} from "@mui/material";

const AddEmployeeDialog = ({ open, handleClose, handleAddEmployee }) => {
	const roles = {
		m: "مدیر کل",
		d: "معاون هتل",
		a: "پذیرش هتل",
		r: "مدیر رستوران",
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("نام الزامی است"),
		lastName: Yup.string().required("نام خانوادگی الزامی است"),
		nationalCode: Yup.string()
			.required("کد ملی الزامی است")
			.matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
		role: Yup.string().required("انتخاب مقام الزامی است"),
		email: Yup.string()
			.email("آدرس ایمیل معتبر نیست")
			.required("ایمیل الزامی است"),
		password: Yup.string().required("رمز عبور الزامی است"),
		confirmPassword: Yup.string()
			.oneOf(
				[Yup.ref("password"), null],
				"رمز عبور و تکرار آن باید یکسان باشند",
			)
			.required("تکرار رمز عبور الزامی است"),
	});

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			nationalCode: "",
			role: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleAddEmployee({
				firstName: values.firstName,
				lastName: values.lastName,
				nationalCode: values.nationalCode,
				role: values.role,
				email: values.email,
				password: values.password,
			});
			handleClose();
		},
	});

	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<Box sx={{ m: 2 }}>
				<DialogTitle align="center">افزودن کارمند جدید</DialogTitle>
				<DialogContent>
					<TextField
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
					/>
					<InputLabel id="role-label">مقام</InputLabel>
					<Select
						labelId="role-label"
						id="role"
						name="role"
						value={formik.values.role}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.role && Boolean(formik.errors.role)}>
						{Object.entries(roles).map(([key, value]) => (
							<MenuItem
								key={key}
								value={key}>
								{value}
							</MenuItem>
						))}
					</Select>
					<TextField
						label="ایمیل"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						label="رمز عبور"
						name="password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<TextField
						label="تکرار رمز عبور"
						name="confirmPassword"
						type="password"
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
						fullWidth
						margin="normal"
						error={
							formik.touched.confirmPassword &&
							Boolean(formik.errors.confirmPassword)
						}
						helperText={
							formik.touched.confirmPassword && formik.errors.confirmPassword
						}
					/>
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

export default AddEmployeeDialog;
