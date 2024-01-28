import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./tailwind.css";
import { Group } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import User from "../services/user";
import "/src/components/Landing.css";

import Images from "../assets/images";
const mainpicture = Images.mainPicture;
const pic1 = Images.pic1;
const pic2 = Images.pic2;
const pic3 = Images.pic3;
const des = Images.des;

const Landing = () => {
	const [user, setUser] = useState(null);
	const { accessToken } = useAuth();

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
			className="flex flex-col min-h-screen justify-center items-center"
			dir="ltr">
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
			<img
				className="w-full h-full object-cover blur-sm landingblurry-image  invisible md:visible lg:visible"
				src={mainpicture}
				alt="Background Image"
			/>
			<div className="lg:absolute w-full mb-64 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center flex justify-center align-center lg:visible">
			<p  className="landingmaintext ">هتل ترانسیلوانیا</p>
			</div>
			<div className="landingcard-container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 justify-center">
				{/* Card 1 */}
				<div className="lg:relative landingcard max-w-md landingcard shadow-lg rounded-lg overflow-hidden">
					<img
						className="w-full h-60 object-cover object-center p-2"
						src={pic1}
						alt="Card Image 1"
					/>
					<div className="p-4">
						<h2
							className="font-bold text-xl mb-2 landingtext-color"
							dir="rtl">
							<Typography variant="h5">اتاق تک خوابه</Typography>
						</h2>
						<p
							className="landingtext-color text-base mb-4"
							dir="rtl">
							<Typography>
								اتاق یکخوابه، فضای راحت و شیکی را برای اقامت به مسافران ارائه
								می‌دهد. این اتاق دارای یک اتاق خواب با تخت دو نفره، یک حمام شخصی
								با امکانات بهداشتی مدرن و یک سالن نشیمن آرام و دل‌پذیر است. اتاق
								با دکوراسیون مدرن و امکانات راحتی همچون تلویزیون، دسترسی به
								اینترنت بی‌سیم، میز کار و کمد لباس مجهز شده است.{" "}
							</Typography>
						</p>
					</div>
				</div>

				{/* Card 2 */}
				<div className="relative landingcard max-w-md landingcard shadow-lg rounded-lg overflow-hidden">
					<img
						className="w-full h-60 object-cover object-center p-2"
						src={pic2}
						alt="Card Image 1"
					/>
					<div className="p-4">
						<h2
							className="font-bold text-xl mb-2 landingtext-color"
							dir="rtl">
							<Typography variant="h5">اتاق دوخوابه</Typography>
						</h2>
						<p
							className="landingtext-color text-base mb-4"
							dir="rtl">
							<Typography>
								.اتاق دوخوابه، یک فضای فراگیر و راحت برای اقامت دوستانه یا
								خانوادگی ارائه می‌دهد. این اتاق شامل دو اتاق خواب با تخت دو
								نفره، دو حمام شخصی مدرن و یک سالن نشیمن فضیلت‌آمیز است. اتاق
								دارای تمامی امکانات رفاهی مانند تلویزیون، اینترنت بی‌سیم، کمد
								لباس و نشیمنی آرامش‌بخش است. دید از پنجره‌های این اتاق نیز بسیار
								دل‌انگیز و آرامبخش است.
							</Typography>
						</p>
					</div>
				</div>
				{/* Card 3 */}
				<div className=" relative landingcard max-w-md landingcard shadow-lg rounded-lg overflow-hidden">
					<img
						className="w-full h-60 object-cover object-center p-2"
						src={pic3}
						alt="Card Image 1"
					/>
					<div className="p-4">
						<h2
							className="font-bold text-xl mb-2 landingtext-color"
							dir="rtl">
							<Typography variant="h5">اتاق ویژه</Typography>
						</h2>
						<p
							className="landingtext-color text-base"
							dir="rtl">
							<Typography>
								اتاق ویژه، فضایی ارگونومیک و لوکس با امکانات بی‌نظیر ارائه
								می‌دهد. این اتاق دارای دکوراسیون شیک و منحصر به فردی است که
								همراه با چشم‌اندازهای دل‌انگیز، امکانات رفاهی از جمله وان حمام و
								خدمات اختصاصی مثل خدمه را فراهم می‌کند. با این فضای آرام و
								دل‌پذیر، اتاق ویژه تجربه‌ای منحصر به فرد از رفاه و آسایش را برای
								مسافران فراهم می‌کند.
							</Typography>
						</p>
					</div>
				</div>
			</div>
			<p className="landinginfo">درباره هتل</p>
			<div className="mb-8 flex landingdes max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
				<div className="w-3/5 m-0 overflow-hidden text-black rounded-r-none shrink-0 rounded-xl landinground-pic">
					<img
						src={des}
						alt="image"
						className="object-cover w-full h-full invisible lg:visible md:visible"
					/>
				</div>
				<div className="p-6">
					<h4
						className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal landingtext-color"
						dir="rtl">
						کشف امکانات رفاهی در هتل شگفت‌انگیز
					</h4>
					<p
						className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed landingtext-color"
						dir="rtl">
						هتل ما واقع در قلب شهر است و از نزدیکی به اماکن دیدنی شهر محلی
						برخوردار است. این هتل امکاناتی همچون استخر، رستوران با منوی
						تنوع‌پذیر و سرویس اتاق با کیفیت ارائه می‌دهد. تجربه اقامت در محیط
						آرام و دل‌پذیر این هتل، یک تجربه بی‌نظیر برای مسافران ماست.
					</p>
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
							to="/aboutus"
							className="hover:text-gray-300 ml-4 mb-2">
							<Typography>درباره ما</Typography>
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
};

export default Landing;
