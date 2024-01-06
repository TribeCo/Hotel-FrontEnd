import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Room from "../services/room";
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Container,
	Fab,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@mui/material";
import User from "../services/user";
import CommentList from "../components/commentList";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Loading from "../components/utils/Loading";
import ResRoomDialog from "../components/ResRoomDialog";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
	code: Yup.string().required("لطفاً کد اتاق را وارد کنید"),
	type: Yup.string().required("لطفاً نوع اتاق را وارد کنید"),
	bed_count: Yup.number()
		.required("لطفاً تعداد تخت‌ها را وارد کنید")
		.positive("تعداد تخت‌ها باید عدد مثبت باشد"),
	price_one_night: Yup.number()
		.required("لطفاً قیمت هر شب را وارد کنید")
		.positive("قیمت باید عدد مثبت باشد"),
	description: Yup.string().required("لطفاً توضیحات را وارد کنید"),
});

const Eachroom = () => {
	const { id } = useParams();
	const [room, setRoom] = useState([]);
	const [reservedDays, setReservedDays] = useState([]);

	const { accessToken } = useAuth();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});
	const [isEditMode, setIsEditMode] = useState(false);
	const [isCommentListOpen, setCommentListOpen] = useState(false);
	const Navigate = useNavigate();
	const [openResDialog, setOpenResDialog] = useState(false);

	const handleResBTN = () => {
		setOpenResDialog(true);
	};
	const handleClose = () => {
		setOpenResDialog(false);
	};

	const toggleCommentList = () => {
		setCommentListOpen(!isCommentListOpen);
	};

	useEffect(() => {
		const fetchData = async () => {
			if (accessToken) {
				try {
					setLoading(true);
					const userRes = await User.getOne({ accessToken: accessToken });
					const roomRes = await Room.getOne({
						uid: id,
						authToken: accessToken,
					});
					const roomResDays = await Room.getReservedDays({
						uid: id,
						authToken: accessToken,
					});
					console.log(roomResDays.data);
					setReservedDays(roomResDays.data);
					setUser(userRes.data);
					setRoom(roomRes.data);
					setLoading(false);
				} catch (error) {
					console.log(error);
					setLoading(false);
				}
			}
		};
		fetchData();
	}, [accessToken]);
	const sendComment = async (comment) => {
		try {
			setLoading(true);
			const url = "/api/accounts/comments/room/create/";
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			};

			const data = {
				text: comment,
				room_id: id,
				user_id: user.id,
				rating: 5,
			};
			const res = await Axios.post(url, data, config);
			const roomRes = await Room.getOne({
				uid: id,
				authToken: accessToken,
			});
			setRoom(roomRes.data);
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
			};
			const res = await Room.edit({
				uid: id,
				authToken: accessToken,
				data: data,
			});
			setRoom(res.data);
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
						backgroundImage: `url(${room.image})`, //TODO: get room image from back-end and give backgroundImage it's url??
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					<CommentList
						sendComment={sendComment}
						comments={room.comments}
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
									marginTop: 20,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Grid
									container
									spacing={1}>
									<Grid
										item
										container
										direction={"row"}
										spacing={1}>
										<Grid
											item
											mb={2}
											xs={6}>
											<TextField
												disabled
												fullWidth
												label="اتاق"
												defaultValue={room.code}
											/>
										</Grid>
										<Grid
											item
											mb={2}
											xs={6}>
											<TextField
												disabled
												fullWidth
												label="نوع اتاق"
												defaultValue={room.type === "o" ? "معمولی" : "VIP"}
											/>
										</Grid>
									</Grid>
									<Grid
										item
										container
										direction={"row"}
										spacing={1}>
										<Grid
											item
											mb={2}
											xs={6}>
											<TextField
												disabled
												fullWidth
												label="تعداد تخت ها"
												defaultValue={room.bed_count} //TODO: default value for bed count??
											/>
										</Grid>
										<Grid
											item
											mb={2}
											xs={6}>
											<TextField
												disabled
												fullWidth
												label="قیمت هر شب"
												defaultValue={room.price_one_night}
											/>
										</Grid>
									</Grid>
									<Grid
										item
										mb={2}
										xs={12}>
										<TextField
											multiline
											rows={5}
											disabled
											fullWidth
											label="توضیحات"
											defaultValue={room.description}
										/>
									</Grid>
								</Grid>
								<Button
									onClick={handleResBTN}
									fullWidth
									variant="contained"
									sx={{
										mt: 3,
										borderRadius: 15,
										bgcolor: "secondary.main",
									}}>
									<Typography variant="h6">سفارش اتاق</Typography>
								</Button>
								{user.role && (
									<Button
										onClick={() => setIsEditMode(true)}
										fullWidth
										variant="contained"
										sx={{
											mt: 3,
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
										mt: 3,
										mb: 2,
										borderRadius: 15,
										bgcolor: "#f76d6d",
									}}>
									<Typography variant="h6">خروج</Typography>
								</Button>
							</Box>
						</Container>
						{openResDialog && (
							<ResRoomDialog
								open={openResDialog}
								handleClose={handleClose}
								room_type_id={room.id}
								reserved={reservedDays}
								accessToken={accessToken}
							/>
						)}
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
										code: room.code || "",
										type: room.type || "",
										bed_count: room.bed_count || "",
										price_one_night: room.price_one_night || "",
										description: room.description || "",
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
													xs={12}
													sm={6}>
													<TextField
														fullWidth
														label="اتاق"
														name="code"
														value={values.code}
														onChange={handleChange}
														onBlur={handleBlur}
														error={touched.code && Boolean(errors.code)}
														helperText={touched.code && errors.code}
													/>
												</Grid>
												<Grid
													mt={1}
													item
													xs={12}
													sm={6}>
													<TextField
														fullWidth
														label="نوع اتاق"
														name="type"
														value={values.type}
														onChange={handleChange}
														onBlur={handleBlur}
														error={touched.type && Boolean(errors.type)}
														helperText={touched.type && errors.type}
													/>
												</Grid>
											</Grid>
											<Grid
												mt={1}
												item
												xs={12}>
												<TextField
													fullWidth
													label="تعداد تخت‌ها"
													name="bed_count"
													type="number"
													value={values.bed_count}
													onChange={handleChange}
													onBlur={handleBlur}
													error={touched.bed_count && Boolean(errors.bed_count)}
													helperText={touched.bed_count && errors.bed_count}
												/>
											</Grid>
											<Grid
												mt={1}
												item
												xs={12}>
												<TextField
													fullWidth
													label="قیمت هر شب"
													name="price_one_night"
													type="number"
													value={values.price_one_night}
													onChange={handleChange}
													onBlur={handleBlur}
													error={
														touched.price_one_night &&
														Boolean(errors.price_one_night)
													}
													helperText={
														touched.price_one_night && errors.price_one_night
													}
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
													name="description"
													value={values.description}
													onChange={handleChange}
													onBlur={handleBlur}
													error={
														touched.description && Boolean(errors.description)
													}
													helperText={touched.description && errors.description}
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

export default Eachroom;
