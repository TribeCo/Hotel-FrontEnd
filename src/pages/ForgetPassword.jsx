import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import Loading from "../components/utils/Loading";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const resetSchema = Yup.object().shape({
	code: Yup.string()
		.required("کد را وارد کنید.")
		.matches(/^\d{4}$/, "کد تائید عددی و 4 رقمی است."),
	password: Yup.string()
		.required("وارد کردن کلمه عبور الزامی است")
		.min(8, "کلمه عبور باید بیشتر از 8 کاراکتر باشد."),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"تکرار کلمه عبور باید مطابقت داشته باشد",
	),
});

const emailSchema = Yup.object().shape({
	email: Yup.string()
		.email("آدرس ایمیل معتبر نیست")
		.required("وارد کردن آدرس ایمیل الزامی است"),
});

const ForgetPassword = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState(null);

	const Navigate = useNavigate();

	const handleSubmit = async (values) => {
		try {
			setLoading(true);
			const url =
				"https://hotelt.liara.run/api/accounts/users/change/password/";
			const data = {
				email: email,
				code: values.code,
				password: values.password,
			};
			await Axios.post(url, data);
			setLoading(false);
			Navigate("/login");
		} catch (error) {
			alert(error);
			setLoading(false);
		}
	};
	const handleSendEmail = async (values) => {
		try {
			setLoading(true);
			await Axios.post(
				"https://hotelt.liara.run/api/accounts/users/update/password/",
				{
					email: values.email,
				},
			);
			setEmail(values.email);
			setLoading(false);
		} catch (error) {
			alert(error);
			setLoading(false);
		}
	};
	if (!loading) {
		if (!email) {
			return (
				<Grid
					container
					component="main"
					sx={{ height: "100vh", backgroundColor: "#141A20" }}>
					<CssBaseline />
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						q
						elevation={6}
						square>
						<Container maxWidth="xs">
							<CssBaseline />
							<Box
								sx={{
									display: "flex",
									marginTop: 8,
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
									<LockOutlinedIcon />
								</Avatar>
								<Typography
									sx={{ marginBottom: 2 }}
									component="h1"
									variant="h5">
									فراموشی رمز عبور
								</Typography>
								<Formik
									initialValues={{
										email: "",
									}}
									validationSchema={emailSchema}
									onSubmit={handleSendEmail}>
									{({ errors, touched }) => (
										<Form>
											<Field
												as={TextField}
												margin="normal"
												type="email"
												required
												fullWidth
												id="email"
												label="آدرس ایمیل"
												name="email"
												autoComplete="email"
												error={touched.email && Boolean(errors.email)}
											/>
											<ErrorMessage name="email" />
											<Button
												type="submit"
												fullWidth
												variant="contained"
												sx={{ mt: 3, mb: 2, borderRadius: 25 }}>
												<Typography variant="h6">ارسال کد</Typography>
											</Button>
										</Form>
									)}
								</Formik>
							</Box>
						</Container>
					</Grid>
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage:
								"url(https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}></Grid>
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
						xs={12}
						sm={8}
						md={5}
						q
						elevation={6}
						square>
						<Container maxWidth="xs">
							<CssBaseline />
							<Box
								sx={{
									display: "flex",
									marginTop: 8,
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
									<LockOutlinedIcon />
								</Avatar>
								<Typography
									sx={{ marginBottom: 2 }}
									component="h1"
									variant="h5">
									فراموشی رمز عبور
								</Typography>
								<Formik
									initialValues={{
										password: "",
										code: "",
										confirmPassword: "",
									}}
									validationSchema={resetSchema}
									onSubmit={handleSubmit}>
									{({ errors, touched }) => (
										<Form>
											<Field
												as={TextField}
												margin="normal"
												required
												fullWidth
												name="code"
												label="کد ارسال شده به ایمیل شما"
												id="code"
												error={touched.code && Boolean(errors.code)}
											/>
											<Field
												as={TextField}
												margin="normal"
												required
												fullWidth
												name="password"
												label="کلمه عبور"
												type="password"
												id="password"
												autoComplete="current-password"
												error={touched.password && Boolean(errors.password)}
											/>
											<Field
												as={TextField}
												margin="normal"
												type="password"
												required
												fullWidth
												id="confirmPassword"
												label="تکرار کلمه عبور"
												name="confirmPassword"
												autoComplete="confirmPassword"
												error={
													touched.confirmPassword &&
													Boolean(errors.confirmPassword)
												}
											/>
											<Button
												type="submit"
												fullWidth
												variant="contained"
												sx={{ mt: 3, mb: 2, borderRadius: 25 }}>
												<Typography variant="h6">ارسال کد</Typography>
											</Button>
										</Form>
									)}
								</Formik>
							</Box>
						</Container>
					</Grid>
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage:
								"url(https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}></Grid>
				</Grid>
			);
		}
	} else {
		return <Loading />;
	}
};

export default ForgetPassword;
