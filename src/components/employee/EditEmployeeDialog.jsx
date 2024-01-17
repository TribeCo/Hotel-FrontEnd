import React from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
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
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>لغو</Button>
					<Button
						onClick={formik.handleSubmit}
						color="primary">
						ویرایش
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default EditEmployeeDialog;
