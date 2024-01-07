import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useAuth } from "../context/AuthContext";
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
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

// services
import User from "../services/user";
import Room from "../services/room";
import Comment from "../services/comment";

// components
import CommentList from "../components/commentList";
import Loading from "../components/utils/Loading";
import ResRoomDialog from "../components/ResRoomDialog";

// form validation
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
	// react HOOKs
	const { id } = useParams();
	const Navigate = useNavigate();

	// custom HOOKs
	const { accessToken } = useAuth();

	// states
	const [room, setRoom] = useState([]);
	const [reservedDays, setReservedDays] = useState([]);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});
	const [isEditMode, setIsEditMode] = useState(false);
	const [isCommentListOpen, setCommentListOpen] = useState(false);
	const [openResDialog, setOpenResDialog] = useState(false);


	// component life cycle
	const handleChange = (event) => {
		setRoom({
			...room,
			type: event.target.value,
		});
	};

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

	// handle buttons
	const handleResBTN = () => {
		setOpenResDialog(true);
	};
	const handleClose = () => {
		setOpenResDialog(false);
	};
	const toggleCommentList = () => {
		setCommentListOpen(!isCommentListOpen);
	};

	// functions
	// for send comments and update state
	const sendComment = async (comment) => {
		setLoading(true);
		try {
			const data = {
				text: comment,
				room_id: id,
				user_id: user.id,
				rating: 5,
			};
			const res = await Comment.addRoom({ data: data, authToken: accessToken });
			console.log(res);
			const roomRes = await Room.getOne({
				uid: id,
				authToken: accessToken,
			});
			setRoom(roomRes.data);
		} catch (error) {
			alert(error);
		}
		setLoading(false);
	};
	const editComment = async ({ comment_id, text }) => {
		setLoading(true);
		try {
			const data = {
				text: text,
				rating: 5,
			};
			const res = await Comment.update({
				uid: comment_id,
				data: data,
				authToken: accessToken,
			});
			console.log(res);
			const roomRes = await Room.getOne({
				uid: id,
				authToken: accessToken,
			});
			setRoom(roomRes.data);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	const deleteComment = async (comment_id) => {
		setLoading(true);
		try {
			const res = await Comment.delete({
				uid: comment_id,
				authToken: accessToken,
			});
			console.log(res);
			const roomRes = await Room.getOne({
				uid: id,
				authToken: accessToken,
			});
			setRoom(roomRes.data);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
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

	// render User Interface
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
						editComment={editComment}
						deleteComment={deleteComment}
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
									marginTop: 19,
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
											rows={6}
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
										"&:hover": {
											backgroundColor: "#b272b8",
										},
										mt: 2,
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
											"&:hover": {
												backgroundColor: "#c98e4b",
											},
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
										"&:hover": {
											backgroundColor: "#c74e4e",
										},
										mt: 2,
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
													container
													// direction="row"
													spacing={2}
													item
												>
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
														xs={6}
														sm={6}>
														<FormControl fullWidth>
															<InputLabel>نوع اتاق</InputLabel>
															<Select
																label="نوع اتاق"
																name="type"
																value={values.type}
																onChange={handleChange}
																onBlur={handleBlur}
																error={touched.type && Boolean(errors.type)}
															>
																<MenuItem value='o'>معمولی</MenuItem>
																<MenuItem value='v'>VIP</MenuItem>
															</Select>
														</FormControl>
													</Grid>


												</Grid>
												<Grid
													mt={1}
													mb={2}
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

											</Grid>


											<Grid
												mt={1}
												mb={2}
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
												mb={2}
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
													"&:hover": {
														backgroundColor: "#5cab70",
													},
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
													"&:hover": {
														backgroundColor: "#c74e4e",
													},
													mt: 2,
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
