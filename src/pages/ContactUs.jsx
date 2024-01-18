import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Typography,
	TextField,
	Button,
	Alert,
	AlertTitle,
	Fab,
	Box,
	Grid,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Images from "../assets/images";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
	name: Yup.string().required("نام خود را وارد کنید"),
	subject: Yup.string().required("موضوع پیام را وارد کنید"),
	email: Yup.string()
		.email("آدرس ایمیل معتبر نیست")
		.required("آدرس ایمیل خود را وارد کنید"),
	text: Yup.string().required("پیام خود را وارد کنید"),
});

const ContactUs = () => {
	const [showSuccess, setShowSuccess] = useState(false);
	const sendMessage = async (values) => { };
	const Navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			text: "",
			subject: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			try {
				setShowSuccess(false);
				const url = "https://hotelt.liara.run/api/accounts/contact/email/";
				await axios.post(url, values);
				setShowSuccess(true);
				formik.handleReset();
			} catch (error) {
				alert("خطایی رخ داد لطفا دوباره تلاش کنید.");
			}
		},
	});

	const containerStyle = {
		marginTop: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	return (
		<>
			<Container
				component="main"
				maxWidth="xs"
				style={containerStyle}>

				<Fab
						onClick={() => Navigate("/")}
						variant="extended"
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							margin: "16px",
						}}>
						<Typography>بازگشت به صفحه اصلی</Typography>
					</Fab>

				<Typography
					color="#FFFFFF"
					variant="h4"
					align="center">
					ارتباط با ما
				</Typography>
				<img
					src={Images.pic}
					alt="Contact Us"
					style={{
						marginTop: "2rem",
						width: "100%",
						marginBottom: "1rem",
						borderRadius: "1rem",
					}}
					/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="name"
					label="نام شما"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="آدرس ایمیل"
					name="email"
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="subject"
					label="موضوع پیام"
					name="subject"
					value={formik.values.subject}
					onChange={formik.handleChange}
					error={formik.touched.subject && Boolean(formik.errors.subject)}
					helperText={formik.touched.subject && formik.errors.subject}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="text"
					label="متن"
					name="text"
					multiline
					rows={4}
					value={formik.values.text}
					onChange={formik.handleChange}
					error={formik.touched.text && Boolean(formik.errors.text)}
					helperText={formik.touched.text && formik.errors.text}
				/>
				<Button
					onClick={formik.handleSubmit}
					fullWidth
					variant="contained"
					color="primary"
					style={{
						margin: "1.5rem 0 1rem",
						backgroundColor: "#FFC0CB",
					}}>
					<Typography variant="h6">ثبت</Typography>
				</Button>
				{showSuccess && (
					<Alert severity="success">
						<AlertTitle>{"پیام شما با موفقیت ارسال شد!"}</AlertTitle>
						<Typography>
							پس از بررسی از طریق ایمیل با شما در ارتباط خواهیم بود.
						</Typography>
					</Alert>
				)}
			</Container>

			<Grid
				mt={7}
				container
				bgcolor={"#2d2d2e"}
			>
				<Grid
					container
					mt={1}
					justifyContent={"space-between"}
				>

					<Grid container md={6}>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="flex-start"
						>
							<Button
								component={Link}
								to="/aboutus"
								sx={{
									ml: 2,
									mt: 1,
									"&:hover": {
										bgcolor: "#2d2d2e",
										color: "#dbdbdb",
									},
									color: "#ffffff"
								}}
								variant="text"
							>
								<Typography>
									درباره ما
								</Typography>
							</Button>

							<Button
								component={Link}
								to="/faq"
								sx={{
									ml: 2,
									mt: 1,
									"&:hover": {
										bgcolor: "#2d2d2e",
										color: "#dbdbdb",
									},
									color: "#ffffff"
								}}
								variant="text"
							>
								<Typography>
									پرسش‌های متداول
								</Typography>
							</Button>
						</Box>
					</Grid>

					<Grid container md={6} sx={{ direction: "rtl" }}>

						<Grid
							item
							mt={1}
						>
							<Box
								display="flex"
								flexDirection="column"
							>
								<Box
									sx={{
										mr: 2,
										mt: 1,
									}}
									display="flex"
									flexDirection="row"
									alignItems="center">
									<Avatar alt="Pourya Karami"
										src="https://avatars.githubusercontent.com/pourya22334415"
										onClick={() => window.location.href = 'https://github.com/pourya22334415'} />
								</Box>
								<Box
									sx={{
										mr: 2,
										mt: 1,
									}}
									display="flex"
									flexDirection="row"
									alignItems="center">
									<Avatar alt="Reza Buzarjmehri"
										src="https://avatars.githubusercontent.com/Reza-B"
										onClick={() => window.location.href = 'https://github.com/Reza-B'} />
								</Box>
								<Box
									sx={{
										mr: 2,
										mt: 1,
									}}
									display="flex"
									flexDirection="row"
									alignItems="center">
									<Avatar alt="Taha Mousavi"
										src="https://avatars.githubusercontent.com/TahaM8000"
										onClick={() => window.location.href = 'https://github.com/TahaM8000'} />
								</Box>
							</Box>
						</Grid>

						<Grid
							item
							mt={1}
						>
							<Box
								display="flex"
								flexDirection="column"
							>
								<Box
									sx={{
										mr: 2,
										mt: 1,
									}}
									display="flex"
									flexDirection="row"
									alignItems="center">
									<Avatar alt="Parsa Vazife"
										src="https://avatars.githubusercontent.com/Parsavazifeh"
										onClick={() => window.location.href = 'https://github.com/Parsavazifeh'} />
								</Box>
								<Box
									sx={{
										mr: 2,
										mt: 1,
									}}
									display="flex"
									flexDirection="row"
									alignItems="center">
									<Avatar alt="Pourya Poornovin"
										src="https://avatars.githubusercontent.com/pouryape"
										onClick={() => window.location.href = 'https://github.com/pouryape'} />
								</Box>
							</Box>
						</Grid>

					</Grid>

				</Grid>

				<Grid
					item
					sx={12}
					xs={12}
					mt={1}
				>
					<Typography align="center" color={"#ffffff"}>
						Generated by 5 + 1
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default ContactUs;
