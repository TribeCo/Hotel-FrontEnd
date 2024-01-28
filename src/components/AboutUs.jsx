import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./aboutus.css";
import "./tailwind.css";
import "./Landing.css";
import Images from "../assets/images";
// import pic from "../assets/pic.jpg";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import { Group } from "@mui/icons-material";
import User from "../services/user";
import { useAuth } from "../context/AuthContext";
import { Avatar, Button, Typography, Fab, Grid } from "@mui/material";

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
			dir="ltr">
			<Grid mt={4}/>
			<p className="aboutusmaintext">درباره ما</p>
			<Grid mt={1}/>
			<Fab
				onClick={() => Navigate("/")}
				variant="extended"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					margin: "16px",
				}}>
				<Typography>بازگشت به صفحه اصلی</Typography>
			</Fab>
			<img
  className="image img-fluid img-responsive mb-8 mt-4"
  src={pic}
  alt="Sample"
/>

			<Grid mt={3}/>
			<p className="aboutusmaintext">درباره هتل</p>
			<Grid mt={2}/>

			<div className="mb-8 flex aboutusdes max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
				<div className="p-6">
					<h4
						className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal aboutustext-color aboutus-titlecontent"
						dir="rtl">
						کشف امکانات رفاهی در هتل شگفت‌انگیز
					</h4>
					<p
						className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed aboutustext-color aboutus-textcontent	"
						dir="rtl">
						هتل ما واقع در قلب شهر است و از نزدیکی به اماکن دیدنی شهر محلی
						برخوردار است. این هتل امکاناتی همچون استخر، رستوران با منوی
						تنوع‌پذیر و سرویس اتاق با کیفیت ارائه می‌دهد. تجربه اقامت در محیط
						آرام و دل‌پذیر این هتل، یک تجربه بی‌نظیر برای مسافران ماست.
					</p>
				</div>
			</div>

			<Grid mt={4}/>
			<p className="aboutussmallmainext">تیم ما را در لینکدین دنبال کنید</p>
			<Grid mt={3}/>
			
			<div className="flex flex-col gap-4">
				<div className="flex justify-center gap-4 items-center">
					<div className="text-center">
						<a href="https://www.linkedin.com/in/pourya-pournovin-728a761bb/">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						</a>
						<p className="mt-2 name">پورنوین</p>
					</div>
					<div className="text-center">
						<a href="https://www.linkedin.com/in/pourya-karami-7a1a36224/">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						</a>
						<p className="mt-2 name">کرمی</p>
					</div>
					<div className="text-center">
						<a href="https://www.linkedin.com/in/parsa-vazifeh-36b304225/">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						</a>
						<p className="mt-2 name">وظیفه</p>
					</div>
				</div>
				<div className="flex justify-center gap-4 items-center">
					<div className="text-center">
						<a href="https://www.linkedin.com/in/taha-mousavi-301b88245/">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						</a>
						<p className="mt-2 name">طاها</p>
					</div>
					<div className="text-center">
						<a href="https://www.linkedin.com/in/reza-buzarjemehri/">
						<div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
							<img
								src={icon}
								alt="Icon"
							/>
						</div>
						</a>
						<p className="mt-2 name">رضا</p>
					</div>
				</div>
			</div>
			
			<Grid mt={5}/>
			<footer
				className="footer-color items-center text-white py-4 w-full mt-8"
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
