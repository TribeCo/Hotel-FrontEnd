import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Axios from "axios";
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Typography,
	Container,
} from "@mui/material";
import Person2Outlined from "@mui/icons-material/Person2Outlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { Link, useNavigate } from "react-router-dom";

import User from "../services/user.js";
import Loading from "../components/utils/Loading.jsx";

const codeSchema = Yup.object().shape({
	code: Yup.string()
		.required("کد را وارد کنید.")
		.matches(/^\d{4}$/, "کد تائید عددی و 4 رقمی است."),
});

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("وارد کردن نام الزامی است"),
	lastName: Yup.string().required("وارد کردن نام خانوادگی الزامی است"),
	idCard: Yup.string()
		.required("وارد کردن کد ملی الزامی است")
		.matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
	email: Yup.string()
		.email("آدرس ایمیل معتبر نیست")
		.required("وارد کردن آدرس ایمیل الزامی است"),
	password: Yup.string()
		.required("وارد کردن کلمه عبور الزامی است")
		.min(8, "کلمه عبور باید بیشتر از 8 کاراکتر باشد."),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"تکرار کلمه عبور باید مطابقت داشته باشد",
	),
});

const Register = () => {
	const Navigate = useNavigate();
	const [isVerification, setIsVerification] = useState(false);
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState(null);

	const sendCodeAgain = async () => {
		try {
			const url =
				"https://hotelt.liara.run/api/accounts/users/update/password/";
			const data = { email: email };
			await Axios.post(url, data);
			alert("کد با موفقیت ارسال شد.");
		} catch (error) {
			alert(error);
		}
	};
	const handleSubmit = async (values) => {
		try {
			setLoading(true);
			const res = await User.create({
				firstName: values.firstName,
				lastName: values.lastName,
				nationalCode: values.idCard,
				email: values.email,
				password: values.password,
			});
			setEmail(values.email);
			setLoading(false);
			setIsVerification(true);
			console.log(res);
		} catch (error) {
			console.log(error);
			alert("خطایی رخ داد لطفا دوباره تلاش کنید.");
			setLoading(false);
		}
	};
	const handleSubmitCode = async (values) => {
		try {
			setLoading(true);
			const res = await User.validationEmail({
				email: email,
				code: values.code,
			});
			console.log(res);
			setLoading(false);
			Navigate("/login");
		} catch (error) {
			alert("کد وارد شده صحیح نمیباشد!");
			setLoading(false);
			console.log(error);
		}
	};
	if (!loading) {
		if (!isVerification) {
			return (
				<Grid
					container
					component="main"
					sx={{ height: "100vh", backgroundColor: "#141A20" }}>
					<CssBaseline />
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage:
								"url(https://img.freepik.com/premium-photo/summer-luxurious-resort-aerial-view-from-night-evening-drone-view-five-star-hotel-pool-bulgaria_134319-3394.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}></Grid>
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						elevation={6}
						square>
						<Container maxWidth="xs">
							<CssBaseline />
							<Box
								sx={{
									marginTop: 8,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
									<Person2Outlined />
								</Avatar>
								<Typography
									sx={{ marginBottom: 2 }}
									component="h1"
									variant="h5">
									ثبت نام
								</Typography>
								<Formik
									initialValues={{
										firstName: "",
										lastName: "",
										idCard: "",
										email: "",
										password: "",
										confirmPassword: "",
									}}
									validationSchema={validationSchema}
									onSubmit={handleSubmit}>
									{({ errors, touched }) => (
										<Form>
											<Grid
												container
												spacing={2}>
												<Grid
													item
													xs={12}
													sm={6}>
													<Field
														as={TextField}
														autoComplete="given-name"
														name="firstName"
														required
														fullWidth
														id="firstName"
														label="نام"
														error={
															touched.firstName && Boolean(errors.firstName)
														}
													/>
													<ErrorMessage
														name="firstName"
														component="div"
													/>
												</Grid>
												<Grid
													item
													xs={12}
													sm={6}>
													<Field
														as={TextField}
														required
														fullWidth
														id="lastName"
														label="نام خانوادگی"
														name="lastName"
														autoComplete="family-name"
														error={touched.lastName && Boolean(errors.lastName)}
													/>
													<ErrorMessage
														name="lastName"
														component="div"
													/>
												</Grid>
												<Grid
													item
													xs={12}>
													<Field
														as={TextField}
														// type="number"
														required
														fullWidth
														id="id-card"
														label="کد ملی"
														name="idCard"
														autoComplete="id-card"
														error={touched.idCard && Boolean(errors.idCard)}
													/>
													<ErrorMessage
														name="idCard"
														component="div"
													/>
												</Grid>
												<Grid
													item
													xs={12}>
													<Field
														as={TextField}
														required
														fullWidth
														id="email"
														label="آدرس ایمیل"
														name="email"
														autoComplete="email"
														error={touched.email && Boolean(errors.email)}
													/>
													<ErrorMessage
														name="email"
														component="div"
													/>
												</Grid>
												<Grid
													item
													xs={12}>
													<Field
														as={TextField}
														required
														fullWidth
														name="password"
														label="کلمه عبور"
														type="password"
														id="password"
														autoComplete="new-password"
														error={touched.password && Boolean(errors.password)}
													/>
													<ErrorMessage
														name="password"
														component="div"
													/>
												</Grid>
												<Grid
													item
													xs={12}>
													<Field
														as={TextField}
														required
														fullWidth
														name="confirmPassword"
														label="تکرار کلمه عبور"
														type="password"
														id="confirm-password"
														autoComplete="current-password"
														error={
															touched.confirmPassword &&
															Boolean(errors.confirmPassword)
														}
													/>
													<ErrorMessage
														name="confirmPassword"
														component="div"
													/>
												</Grid>
											</Grid>
											<Button
												type="submit"
												fullWidth
												variant="contained"
												sx={{
													mt: 3,
													mb: 2,
													borderRadius: 15,
													bgcolor: "secondary.main",
												}}>
												<Typography variant="h6">ثبت نام</Typography>
											</Button>
											<Grid
												container
												justifyContent="flex-end">
												<Grid item>
													<Link to="/login">
														<Button sx={{ color: "secondary.main" }}>
															<Typography>
																حساب کاربری دارید؟ وارد شوید.
															</Typography>
														</Button>
													</Link>
												</Grid>
											</Grid>
										</Form>
									)}
								</Formik>
							</Box>
						</Container>
					</Grid>
				</Grid>
			);
		} else {
			return (
				<Grid
					container
					component="main"
					sx={{ height: "100vh", backgroundColor: "#141A20" }}>
					<CssBaseline />
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage:
								"url(https://img.freepik.com/premium-photo/summer-luxurious-resort-aerial-view-from-night-evening-drone-view-five-star-hotel-pool-bulgaria_134319-3394.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}></Grid>
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						elevation={6}
						square>
						<Container maxWidth="xs">
							<CssBaseline />
							<Box
								sx={{
									marginTop: 8,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
									<EmailOutlined />
								</Avatar>
								<Typography
									sx={{ marginBottom: 2 }}
									component="h1"
									variant="h5">
									تائید ایمیل
								</Typography>
								<Formik
									initialValues={{
										code: "",
									}}
									validationSchema={codeSchema}
									onSubmit={handleSubmitCode}>
									{({ errors, touched }) => (
										<Form>
											<Grid
												item
												xs={12}>
												<Field
													as={TextField}
													required
													fullWidth
													id="code"
													label="کد تائید"
													name="code"
													autoComplete="code"
													error={touched.idCard && Boolean(errors.idCard)}
												/>
												<ErrorMessage
													name="code"
													component="div"
												/>
											</Grid>
											<Button
												type="submit"
												fullWidth
												variant="contained"
												sx={{
													mt: 3,
													mb: 2,
													borderRadius: 15,
													bgcolor: "secondary.main",
												}}>
												<Typography variant="h6">تائید ایمیل</Typography>
											</Button>
											<Grid
												container
												justifyContent="flex-end">
												<Grid item>
													<Button
														onClick={() => sendCodeAgain()}
														sx={{ color: "secondary.main" }}>
														<Typography>کد ارسال نشد؟ ارسال دوباره</Typography>
													</Button>
												</Grid>
											</Grid>
										</Form>
									)}
								</Formik>
							</Box>
						</Container>
					</Grid>
				</Grid>
			);
		}
	} else {
		return <Loading />;
	}
};

export default Register;
