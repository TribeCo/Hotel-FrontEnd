import { useState, useRef } from "react";
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
	Card,
	CardContent,
	CardMedia,
	IconButton,
} from "@mui/material";

import User from "../services/user";
import { ArrowBack } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";

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

const ProfilePage = () => {
	const { accessToken, refreshAccessFunc } = useAuth();
	let user;
	try {
		const res = User.get();
		user = res.data;
		console.log(data);
	} catch (error) {
		user = {
			id: 1,
			image: "https://placekitten.com/200/200",
			firstName: "رضا",
			lastName: "بوذرجمهری",
			nationalCode: "1991289634",
			email: "Rezakuix@gmail.com",
		};
		console.log(error);
	}

	const Navigate = useNavigate();
	const [isEditMode, setIsEditMode] = useState(false);

	const handleSubmit = async (values) => {
		try {
			const res = await User.edit({
				uid: id,
				data: {
					firstName: values.firstName,
					lastName: values.lastName,
					nationalCode: values.idCard,
					email: values.email,
					password: values.password,
				},
				accessToken,
			});
			Navigate("/profile");
		} catch (error) {
			console.log(error);
		}
	};
	const fileInputRef = useRef(null);
	const handleAvatarClick = () => {
		fileInputRef.current.click();
	};
	const handleFileChange = async (event) => {
		const file = event.target.files[0];
		if (file) {
			try {
				const res = await User.uploadImage({
					uid: user.id,
					data: file,
					authToken: authToken,
				});
				Navigate("/profile");
			} catch (error) {}
		}
	};
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
					بازگشت به داشبورد
					<ArrowBack sx={{ mr: 1 }} />
				</Fab>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							"url(https://s3-alpha-sig.figma.com/img/f07c/e803/405bb6467b3514e734834c00fd24a0c0?Expires=1702857600&Signature=REfAd0AbWTq7mx7skFM53HG7qQlQn8AW7YlGnc9t1eGO6if9-Ap8jAqkLtJAurBVOjTNMqZFzC7wtJzz4ZWOpEYx8gslxKUXRSgIB4CYSCTX~6sod8ML8IElhDkN8GSbWOOJOClK82rmZVL4gd4byfoUorjZbVHNbkQ0UGp~pMkjtALoz75TILepu7uO9ppbHOseyVGcStgBZwU0MvTfuoggcLP2AcqM~6aXI8yvDEIhfFtSKAhxXXZiUnQNh7ts2DQ6HGS2JQXz7J~rj15FBDt5AiTiSUWyKZr5WYbdGeZ3ZIevpCLyw1w~PVQH56bsX3cOshK7OOcXy~xiDqQpWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
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
									src={user.image}
									sx={{ width: 150, height: 150, mb: 4 }}></Avatar>
								<Grid
									container
									spacing={2}>
									<Grid
										item
										xs={12}>
										<TextField
											disabled
											fullWidth
											label="نام و نام خانوادگی"
											defaultValue={user.firstName + " " + user.lastName}
										/>
									</Grid>
									<Grid
										item
										xs={12}>
										<TextField
											disabled
											fullWidth
											label="کد ملی"
											defaultValue={user.nationalCode}
										/>
									</Grid>
									<Grid
										item
										xs={12}>
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
										mt: 3,
										borderRadius: 15,
										bgcolor: "secondary.main",
									}}>
									ویرایش اطلاعات
								</Button>
								<Button
									onClick={() => Navigate("/logout")}
									fullWidth
									variant="contained"
									sx={{
										mt: 3,
										mb: 2,
										borderRadius: 15,
										bgcolor: "#FF0000",
									}}>
									خروج
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
											src={user.image}
											sx={{ width: 150, height: 150 }}></Avatar>
									</IconButton>
								</div>
								<Formik
									initialValues={{
										id: user.id,
										firstName: user.firstName,
										lastName: user.lastName,
										idCard: user.id,
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
													borderRadius: 15,
													bgcolor: "secondary.main",
												}}>
												ثبت تغییرات
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
};

export default ProfilePage;
