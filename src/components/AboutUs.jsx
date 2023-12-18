import React from "react";
import "./aboutus.css";
import "./tailwind.css";
import pic from "../assets/pic.jpg";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import { Group } from "@mui/icons-material";
import { Typography } from "@mui/material";
function AboutUs() {
	return (
		<div
			className="flex flex-col min-h-screen justify-center items-center"
			dir="ltr">
			<header className="nav-color text-white py-4 w-full">
				<div className="container mx-auto flex items-center justify-between px-4">
					<h1 className="text-2xl font-bold">
						<Link to="/">Transylvania</Link>
					</h1>
					<nav>
						<ul className="flex space-x-4">
							<li>
								<Link
									to="/login"
									className="btn-link">
									ورود
								</Link>
							</li>
							<li>
								<Link
									to="/register"
									className="btn-link">
									ثبت نام
								</Link>
							</li>
							<li>
								<Link
									to="/"
									className="hover:text-gray-300">
									بازگشت به خانه
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<img
				className="image mb-8 mt-8"
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
							className="hover:text-gray-300 ml-4">
							<Typography>تماس با ما</Typography>
						</Link>
						<Link
							to="/aboutus"
							className="hover:text-gray-300">
							<Typography>درباره ما</Typography>
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
