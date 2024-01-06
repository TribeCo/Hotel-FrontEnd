import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
	Fab,
	IconButton,
} from "@mui/material";

import User from "../services/user";
import { ArrowBack } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/utils/Loading";
import Images from "../assets/images";
const baseUrl = "https://hotelback.iran.liara.run";

const validationSchema = Yup.object().shape({
	firstName: Yup.string(),
	lastName: Yup.string(),
	idCard: Yup.string().matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
	email: Yup.string().email("آدرس ایمیل معتبر نیست"),
	password: Yup.string().min(8, "کلمه عبور باید بیشتر از 8 کاراکتر باشد."),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"تکرار کلمه عبور باید مطابقت داشته باشد",
	),
});

const ProfilePage = () => {
	const { accessToken, logout } = useAuth();
	const [user, setUser] = useState(null);
	const [image, setImage] = useState(null);
	const Navigate = useNavigate();
	const [isEditMode, setIsEditMode] = useState(false);

	const handleLogout = () => {
		logout();
		Navigate("/login");
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await User.getOne({ accessToken: accessToken });
				console.log(response.data);
				setUser(response.data);
				setImage(baseUrl + response.data.image);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [accessToken]);

	const handleSubmit = async (values) => {
		try {
			const res = await User.edit({
				uid: user.id,
				data: {
					firstName: values.firstName,
					lastName: values.lastName,
					nationalCode: values.idCard,
					email: values.email,
					password: values.password,
				},
				authToken: accessToken,
			});
			setIsEditMode(false);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
	//
	const fileInputRef = useRef(null);
	const handleAvatarClick = () => {
		fileInputRef.current.click();
	};
	const handleFileChange = async (event) => {
		const file = event.target.files[0];
		console.log(1);
		if (file) {
			try {
				const res = await User.uploadImage(user.id, file);
				console.log(res);
				setImage(res.data.link);
			} catch (error) {
				console.log(error);
			}
		}
	};
	if (user) {
		return (
			<>
				<Grid
					container
					component="main"
					sx={{ height: "100vh", backgroundColor: "#141A20" }}>
					<CssBaseline />
					<Fab
						onClick={() => Navigate("/dashboard")}
						variant="extended"
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							margin: "16px",
						}}>
						<Typography>بازگشت به داشبورد</Typography>
						<ArrowBack sx={{ mr: 1 }} />
					</Fab>
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage: `url(${Images.profileBG})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}></Grid>
					{!isEditMode ? (
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
									<Avatar
										src={baseUrl + user.image}
										sx={{
											width: 200,
											height: 200,
											mb: 5,
											mt: 3,
										}}></Avatar>
									<Grid
										container
										spacing={2}>
										<Grid
											item
											xs={12}
											mt={1}>
											<TextField
												disabled
												fullWidth
												label="نام و نام خانوادگی"
												defaultValue={user.firstName + " " + user.lastName}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											mt={1}>
											<TextField
												disabled
												fullWidth
												label="کد ملی"
												defaultValue={user.nationalCode}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											mt={1}>
											<TextField
												disabled
												fullWidth
												label="ایمیل"
												defaultValue={user.email}
											/>
										</Grid>
									</Grid>
									<Button
										onClick={() => setIsEditMode(true)}
										fullWidth
										variant="contained"
										sx={{
											"&:hover": {
												backgroundColor: "#634dd1",
										  },
											mt: 7,
											mb: 1,
											borderRadius: 10,
											bgcolor: "#7359f8",
											"&:hover": {
												backgroundColor: "#522fff",
											},
										}}>
										<Typography
											color="#FFFFFF"
											variant="h6">
											ویرایش اطلاعات
										</Typography>
									</Button>
									<Button
										onClick={handleLogout}
										fullWidth
										variant="contained"
										sx={{
											"&:hover": {
												backgroundColor: "#c74e4e",
										  },
											mt: 1,
											borderRadius: 5,
											bgcolor: "#f76d6d",
											"&:hover": {
												backgroundColor: "#c44040",
											},
										}}>
										<Typography
											color="#FFFFFF"
											variant="h6">
											خروج
										</Typography>
									</Button>
								</Box>
							</Container>
						</Grid>
					) : (
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
									<div>
										<input
											type="file"
											accept="image/*"
											style={{ display: "none" }}
											ref={fileInputRef}
											onChange={handleFileChange}
										/>
										<IconButton
											sx={{ mb: 4 }}
											color="primary"
											onClick={handleAvatarClick}>
											<Avatar
												src={image}
												sx={{ width: 200, height: 200 }}></Avatar>
										</IconButton>
									</div>
									<Formik
										initialValues={{
											id: user.id,
											firstName: user.firstName,
											lastName: user.lastName,
											idCard: user.nationalCode,
											email: user.email,
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
														mt={1}
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
														mt={1}
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
															error={
																touched.lastName && Boolean(errors.lastName)
															}
														/>
														<ErrorMessage
															name="lastName"
															component="div"
														/>
													</Grid>
													<Grid
														mt={1}
														item
														xs={12}>
														<Field
															as={TextField}
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
														mt={1}
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
														mt={1}
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
															error={
																touched.password && Boolean(errors.password)
															}
														/>
														<ErrorMessage
															name="password"
															component="div"
														/>
													</Grid>
													<Grid
														mt={1}
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
														"&:hover": {
															backgroundColor: "#a653a2",
													  },
														mt: 5,
														borderRadius: 15,
														bgcolor: "#c76dc3",
													}}>
													<Typography
														variant="h6"
														color="#FFFFFF">
														ثبت تغییرات
													</Typography>
												</Button>
											</Form>
										)}
									</Formik>
								</Box>
							</Container>
						</Grid>
					)}
				</Grid>
			</>
		);
	} else {
		return <Loading />;
	}
};

export default ProfilePage;
