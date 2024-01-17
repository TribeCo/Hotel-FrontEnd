import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import Axios from "axios";
import User from "../services/user";
import Food from "../services/food";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Container,
	Fab,
	Typography,
} from "@mui/material";

import CommentList from "../components/commentList";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

import Loading from "../components/utils/Loading";

const validationSchema = Yup.object({
	name: Yup.string().required("نام غذا را وارد کنید"),
	price: Yup.number()
		.required("قیمت را وارد کنید")
		.positive("قیمت باید عدد مثبت باشد"),
	type: Yup.string().required("توضیحات را وارد کنید"),
});

const Eachfood = () => {
	const { id } = useParams();
	const [food, setFood] = useState([]);
	const { accessToken } = useAuth();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});
	const [isEditMode, setIsEditMode] = useState(false);
	const [isCommentListOpen, setCommentListOpen] = useState(false);
	const Navigate = useNavigate();

	const toggleCommentList = () => {
		setCommentListOpen(!isCommentListOpen);
	};

	useEffect(() => {
		const fetchData = async () => {
			if (accessToken) {
				try {
					setLoading(true);
					const userRes = await User.getOne({ accessToken: accessToken });
					const foodRes = await Food.getOne({
						uid: id,
						authToken: accessToken,
					});
					console.log(foodRes.data, userRes.data);
					setUser(userRes.data);
					setFood(foodRes.data);
					setLoading(false);
				} catch (error) {
					alert("خطایی رخ داد لطفا دوباره تلاش کنید");
					setLoading(false);
				}
			}
		};
		fetchData();
	}, [accessToken]);

	const sendComment = async (comment) => {
		try {
			setLoading(true);
			const url = "/api/accounts/comments/food/create/";
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			};
			const data = {
				text: comment,
				food_id: id,
				user_id: user.id,
				rating: 5,
			};
			console.log(data);
			const res = await Axios.post(url, data, config);
			const foodRes = await Food.getOne({
				uid: id,
				authToken: accessToken,
			});
			setFood(foodRes.data);
			setLoading(false);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async (values) => {
		try {
			const data = {
				...values,
				day: food.day,
				date: food.date,
			};
			const res = await Food.edit({
				uid: id,
				authToken: accessToken,
				data: data,
			});
			console.log(res);
			setIsEditMode(false);
		} catch (error) {
			console.log(error);
		}
	};

	if (!loading) {
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
						backgroundImage: `url(${food.image})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					<CommentList
						sendComment={sendComment}
						comments={food.comments}
						isOpen={isCommentListOpen}
						onClose={toggleCommentList}
					/>
				</Grid>
				{!isEditMode ? (
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						elevation={6}
						square>
						<Fab
							onClick={() => toggleCommentList()}
							variant="extended"
							style={{
								position: "fixed",
								margin: "16px",
							}}>
							<Typography variant="h6">مشاهده نظرات</Typography>
							<CommentOutlinedIcon sx={{ ml: 1 }} />
						</Fab>
						<Container maxWidth="xs">
							<CssBaseline />
							<Box
								sx={{
									marginTop: 19,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Grid
									container
									spacing={2}>
									<Grid
										item
										mb={2}
										xs={12}>
										<TextField
											disabled
											fullWidth
											label="نام غذا"
											defaultValue={food.name} //TODO: default value for food??
										/>
									</Grid>
									<Grid
										item
										mb={2}
										xs={12}>
										<TextField
											disabled
											fullWidth
											label="قیمت"
											defaultValue={food.price} //TODO: default value for food??
										/>
									</Grid>
									<Grid
										item
										mb={2}
										xs={12}>
										<TextField
											multiline
											rows={6}
											disabled
											fullWidth
											label="توضیحات"
											defaultValue={food.type} //TODO: default value for desc??
										/>
									</Grid>
								</Grid>
								<Button
									onClick={() => Navigate("/dashboard")} //TODO: save food order and Navigate to dashboard??
									fullWidth
									variant="contained"
									sx={{
										mt: 3,
										borderRadius: 15,
										bgcolor: "secondary.main",
									}}>
									<Typography variant="h6">سفارش غذا</Typography>
								</Button>
								{user.role && (
									<Button
										onClick={() => setIsEditMode(true)}
										fullWidth
										variant="contained"
										sx={{
											mt: 2,
											borderRadius: 15,
											bgcolor: "#f7b060",
										}}>
										<Typography variant="h6">ویرایش اطلاعات</Typography>
									</Button>
								)}
								<Button
									onClick={() => Navigate("/dashboard")} //TODO: Navigate to dashboard without ordering??
									fullWidth
									variant="contained"
									sx={{
										mt: 2,
										mb: 2,
										borderRadius: 15,
										bgcolor: "#f76d6d",
									}}>
									<Typography variant="h6">خروج</Typography>
								</Button>
							</Box>
						</Container>
					</Grid>
				) : (
					// Edit mood:
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
									marginTop: 19,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Formik
									initialValues={{
										name: food.name || "",
										price: food.price || "",
										type: food.type || "",
										meal: food.meal || "d",
									}}
									validationSchema={validationSchema}
									onSubmit={handleUpdate}>
									{({ values, errors, touched, handleChange, handleBlur }) => (
										<Form>
											<Grid
												container
												spacing={2}>
												<Grid
													mt={1}
													item
													xs={12}>
													<TextField
														fullWidth
														label="نام غذا"
														name="name"
														value={values.name}
														onChange={handleChange}
														onBlur={handleBlur}
														error={touched.name && Boolean(errors.name)}
														helperText={touched.name && errors.name}
													/>
												</Grid>
												<Grid
													mt={1}
													item
													xs={12}>
													<TextField
														fullWidth
														label="قیمت"
														name="price"
														type="number"
														value={values.price}
														onChange={handleChange}
														onBlur={handleBlur}
														error={touched.price && Boolean(errors.price)}
														helperText={touched.price && errors.price}
													/>
												</Grid>
												<Grid
													mt={1}
													item
													xs={12}>
													<TextField
														multiline
														rows={6}
														fullWidth
														label="توضیحات"
														name="type"
														value={values.type}
														onChange={handleChange}
														onBlur={handleBlur}
														error={touched.type && Boolean(errors.type)}
														helperText={touched.type && errors.type}
													/>
												</Grid>
												<Button
													type="submit"
													fullWidth
													variant="contained"
													sx={{
														mt: 3,
														borderRadius: 15,
														bgcolor: "#7ed695",
													}}>
													<Typography variant="h6">ذخیره تغییرات</Typography>
												</Button>
												<Button
													onClick={() => setIsEditMode(false)}
													fullWidth
													variant="contained"
													sx={{
														mt: 3,
														mb: 2,
														borderRadius: 15,
														bgcolor: "#f76d6d",
													}}>
													<Typography variant="h6">بازگشت</Typography>
												</Button>
											</Grid>
										</Form>
									)}
								</Formik>
							</Box>
						</Container>
					</Grid>
				)}
			</Grid>
		);
	} else {
		return <Loading />;
	}
};

export default Eachfood;
