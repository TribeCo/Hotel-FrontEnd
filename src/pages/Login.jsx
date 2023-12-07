import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	Box,
	Typography,
	Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email("آدرس ایمیل معتبر نیست")
		.required("وارد کردن آدرس ایمیل الزامی است"),
	password: Yup.string()
		.required("وارد کردن کلمه عبور الزامی است")
		.min(8, "کلمه عبور باید بشتر از 8 کاراکتر باشد."),
});

const Login = () => {
	const { login } = useAuth();

	const Navigate = useNavigate();

	const handleSubmit = async (values) => {
		try {
			let res = await login({
				email: values.email,
				password: values.password,
			});
			console.log(res);
			Navigate("/dashboard");
		} catch (error) {
			console.error(error);
		}
	};

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
							ورود
						</Typography>
						<Formik
							initialValues={{
								email: "",
								password: "",
								remember: false,
							}}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}>
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
									<ErrorMessage
										name="email"
										// component="div"
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
									<ErrorMessage
										name="password"
										// component="div"
									/>
									<div />
									<FormControlLabel
										control={
											<Field
												as={Checkbox}
												type="checkbox"
												id="remember"
												name="remember"
												color="primary"
											/>
										}
										label="مرا به خاطر بسپار"
									/>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3, mb: 2, borderRadius: 25 }}>
										ورود
									</Button>
									<Grid container>
										<Grid
											xs
											item>
											<Link to="/forget-password">
												<Button>فراموشی رمز عبور</Button>
											</Link>
										</Grid>
										<Grid item>
											<Link to="/register">
												<Button>{"حساب کاربری ندارید؟ ثبت نام کنید."}</Button>
											</Link>
										</Grid>
									</Grid>
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
};

export default Login;
