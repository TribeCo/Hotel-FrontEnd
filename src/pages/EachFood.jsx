import React, { useState, useEffect } from "react";
import bk from "../assets/eachfood.png";
import Food from "../services/food";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
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
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
const comments = [
    { id: 1, text: 'test comment 1 ...........' },
    { id: 2, text: 'test comment 2 ........' },
    { id: 3, text: 'test comment 3 ...................' },
  ];

const Eachfood = ({ user }) => {
	const { id } = useParams();

	const [food, setFood] = useState([]);
	const { accessToken } = useAuth();
	const [isEditMode, setIsEditMode] = useState(false);
	const [isCommentListOpen, setCommentListOpen] = useState(false);
	const Navigate = useNavigate();

	const toggleCommentList = () => {
	  setCommentListOpen(!isCommentListOpen);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await Food.getOne({ uid: id, authToken: accessToken });
				console.log(res);
				if (res.status === 200) {
					setFood(res.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [accessToken]);

	user = { id: 1,										  //TODO: it should be real user!
			 name: "user-test",
			 // some extra info ...
			 // .
			 // .
			 role: 'null'}; // null ==> user | character ==> admin

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
					backgroundImage: `url(${bk})`,          //TODO: get food image from back-end and give backgroundImage it's url??    
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>

				<CommentList
					comments={comments}                      //TODO: all comments should be here as an array like this: [ {id: 0, text: "..."}, {id: 1, text: "..."}, ... ]??   
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
						<Typography variant="h6" >
							مشاهده نظرات
						</Typography>
						<CommentOutlinedIcon sx={{ ml: 1 }} />
					</Fab>

					<Container maxWidth="xs">
						<CssBaseline />
						<Box
							sx={{
								marginTop: 25,
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
										defaultValue={"food name"}     //TODO: default value for food??
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
										defaultValue={"..."}            //TODO: default value for desc??
									/>
								</Grid>
							</Grid>

							<Button
								onClick={() => Navigate("/dashboard")}   //TODO: save food order and Navigate to dashboard??    
								fullWidth
								variant="contained"
								sx={{
									mt: 3,
									borderRadius: 15,
									bgcolor: "secondary.main",
								}}>
								<Typography variant="h6" >
									سفارش غذا
								</Typography>
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
								<Typography variant="h6" >
									ویرایش اطلاعات
								</Typography>
							</Button>
							) } 

							<Button
								onClick={() => Navigate("/dashboard")}   //TODO: Navigate to dashboard without ordering??    
								fullWidth
								variant="contained"
								sx={{
									mt: 2,
									mb: 2,
									borderRadius: 15,
									bgcolor: "#f76d6d",
								}}>
								<Typography variant="h6" >
									خروج
								</Typography>
							</Button>

						</Box>
					</Container>
				</Grid>
			) : ( // Edit mood:
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
						<Typography variant="h6" >
							مشاهده نظرات
						</Typography>
						<CommentOutlinedIcon sx={{ ml: 1 }} />
					</Fab>

					<Container maxWidth="xs">
						<CssBaseline />
						<Box
							sx={{
								marginTop: 25,
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
										fullWidth
										label="نام غذا"
										defaultValue={"food name"}     //TODO: default value for food??
									/>
								</Grid>

								<Grid
									item
									mb={2}
									xs={12}>
									<TextField
										multiline
										rows={6}
										fullWidth
										label="توضیحات"
										defaultValue={"..."}           //TODO: default value for desc??
									/>
								</Grid>
							</Grid>

								<Button
									onClick={() => setIsEditMode(false)}  //TODO: saving new input for food and switch to non-edit mode??    
									fullWidth 
									variant="contained"
									sx={{
										mt: 3,
										borderRadius: 15,
										bgcolor: "#7ed695",
									}}>
									<Typography variant="h6" >
										ذخیزه تغییرات
									</Typography>
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
								<Typography variant="h6" >
									بازگشت
								</Typography>
							</Button>
						</Box>
					</Container>
				</Grid>
			)}
		</Grid>
	);
};

export default Eachfood;