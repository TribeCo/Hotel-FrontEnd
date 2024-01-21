import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./aboutus.css";
import "./tailwind.css";
import Images from "../assets/images";
// import pic from "../assets/pic.jpg";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import { Group } from "@mui/icons-material";
import User from "../services/user";
import { useAuth } from "../context/AuthContext";
import { Avatar, Button, Typography, Fab } from "@mui/material";

const pic = Images.pic;

function AboutUs() {

	const [user, setUser] = useState(null);
	const { accessToken } = useAuth();
	const Navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			if (accessToken) {
				try {
					const response = await User.getOne({ accessToken: accessToken });
					console.log(response.data);
					setUser(response.data);
				} catch (error) {}
			}
		};

		fetchData();
	}, [accessToken]);

	return (
		<div
			className="flex flex-col min-h-screen justify-center items-center pt-16"
			dir="ltr" >
			<header
				className="landingnav-color text-white py-4 w-full fixed top-0"
				style={{ zIndex: 1 }}>
				<div className=" mx-auto flex items-center justify-between px-4">
					<h1 className="text-2xl font-bold">Transylvania</h1>
					<nav>
						<ul className="flex space-x-4">
							{user ? (
								<Link to="/dashboard">
									<Button
										variant="contained"
										sx={{
											bgcolor: "#b4b7b7",
											borderRadius: 3,
											"&:hover": { backgroundColor: "#ebebeb" },
										}}>
										<Typography>ورود به داشبورد </Typography>
										<Avatar
											src={`https://hotelt.liara.run${user.image}`}
											sx={{
												mr: 1,
												height: 28,
												width: 28,
											}}></Avatar>
									</Button>
								</Link>
							) : (
								<>
									<li className="landingbtn-link">
										<Link to="/login">
											<Typography>ورود</Typography>
										</Link>
									</li>
									<li className="landingbtn-link">
										<Link to="/register">
											<Typography>ثبت نام</Typography>
										</Link>
									</li>
								</>
							)}
						</ul>
					</nav>
				</div>
			</header>
			//className="flex flex-col min-h-screen justify-center items-center"
			//dir="ltr" >
			//<Fab
      //          onClick={() => Navigate("/")}
      //          variant="extended"
      //          style={{
      //              position: "fixed",
      //              top: 0,
      //              left: 0,
      //              margin: "16px",
      //          }}>
      //          <Typography>بازگشت به صفحه اصلی</Typography>
      //      </Fab>
			<img
				className="image mb-8 mt-4"
				src={pic}
				alt="Sample"
			/>
			<p className="info">تیم ما</p>
			<div className="flex flex-col gap-4">
				<div className="flex justify-center gap-4 items-center">
					<div className="text-center">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						<p className="mt-2 name">پورنوین</p>
					</div>
					<div className="text-center">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						<p className="mt-2 name">کرمی</p>
					</div>
					<div className="text-center">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						<p className="mt-2 name">وظیفه</p>
					</div>
				</div>
				<div className="flex justify-center gap-4 items-center">
					<div className="text-center">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						<p className="mt-2 name">طاها</p>
					</div>
					<div className="text-center">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						<p className="mt-2 name">رضا</p>
					</div>
				</div>
			</div>
			<footer
				className="landingfooter-color items-center text-white py-4 w-full mt-8"
				dir="rtl">
				<div
					className="mx-auto flex items-center px-4"
					style={{ justifyContent: "space-between" }}>
					<div className="column-1">
					<Link
							to="/contactus"
							className="hover:text-gray-300 ml-4 mb-2">
							<Typography>تماس با ما</Typography>
						</Link>
						<Link
							to="/faq"
							className="hover:text-gray-300">
							<Typography> سوالات متداول </Typography>
						</Link>
					</div>
					<div className="column-2">
						<a href="https://github.com/Parsavazifeh">
							<img
								src="https://avatars.githubusercontent.com/Parsavazifeh"
								alt="Avatar 1"
								width="40"
								height="40"
								style={{ borderRadius: "50%", margin: "0 5px" }}
							/>
						</a>
						<a href="https://github.com/pouryape">
							<img
								src="https://avatars.githubusercontent.com/pouryape"
								alt="Avatar 2"
								width="40"
								height="40"
								style={{ borderRadius: "50%", margin: "0 5px" }}
							/>
						</a>
						<a href="https://github.com/TahaM8000">
							<img
								src="https://avatars.githubusercontent.com/TahaM8000"
								alt="Avatar 3"
								width="40"
								height="40"
								style={{ borderRadius: "50%", margin: "0 5px" }}
							/>
						</a>
						<a href="https://github.com/pourya22334415">
							<img
								src="https://avatars.githubusercontent.com/pourya22334415"
								alt="Avatar 4"
								width="40"
								height="40"
								style={{ borderRadius: "50%", margin: "0 5px" }}
							/>
						</a>
						<a href="https://github.com/Reza-B">
							<img
								src="https://avatars.githubusercontent.com/Reza-B"
								alt="Avatar 5"
								width="40"
								height="40"
								style={{ borderRadius: "50%", margin: "0 5px" }}
							/>
						</a>
					</div>
				</div>
				<div
					style={{
						textAlign: "center",
						color: "Highlight",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Group
						fontSize="small"
						style={{ marginLeft: "8px" }}
					/>
					<Typography
						variant="body1"
						style={{ margin: "0" }}>
						طراحی شده توسط گروه پنج‌ بعلاوه یک
					</Typography>
				</div>
			</footer>
		</div>
	);
}

export default AboutUs;
