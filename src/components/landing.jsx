import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./tailwind.css";
import "./landing.css"; // Import your CSS file
import mainpicture from "../assets/mainpicture.png";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import des from "../assets/des.jpg";

function HotelComponent() {
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
							<li>
								<Link
									to="news"
									className="hover:text-gray-300">
									اخبار
								</Link>
							</li>
							<li>
								<Link
									to="/login"
									className="landingbtn-link">
									ورود
								</Link>
							</li>
							<li>
								<Link
									to="/register"
									className="landingbtn-link">
									ثبت نام
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<img
				className="w-full h-full object-cover blur-sm landingblurry-image"
				src={mainpicture}
				alt="Background Image"
			/>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-centet">
				<h1
					className="font-bold"
					style={{ fontSize: "70px" }}>
					هتل ترانسیلوانیا
				</h1>
			</div>
			<div className=" landingcard-container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Card 1 */}
				<div className="relative landingcard max-w-md landingcard shadow-lg rounded-lg overflow-hidden">
					<img
						className="w-full h-60 object-cover object-center p-2"
						src={pic1}
						alt="Card Image 1"
					/>
					<div className="p-4">
						<h2
							className="font-bold text-xl mb-2 landingtext-color"
							dir="rtl">
							اتاق تک خوابه
						</h2>
						<p
							className="landingtext-color text-base mb-4"
							dir="rtl">
							اتاق یکخوابه، فضای راحت و شیکی را برای اقامت به مسافران ارائه
							می‌دهد. این اتاق دارای یک اتاق خواب با تخت دو نفره، یک حمام شخصی
							با امکانات بهداشتی مدرن و یک سالن نشیمن آرام و دل‌پذیر است. اتاق
							با دکوراسیون مدرن و امکانات راحتی همچون تلویزیون، دسترسی به
							اینترنت بی‌سیم، میز کار و کمد لباس مجهز شده است.{" "}
						</p>
            <Link
									to="/allroom" className="absolute bottom-2 left-2  landingbtn-link2 font-bold py-2 px-4 mt-4 rounded mt-2"
									>بیشتر
								</Link>
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
							اتاق دوخوابه
						</h2>
						<p
							className="landingtext-color text-base mb-4"
							dir="rtl">
							.اتاق دوخوابه، یک فضای فراگیر و راحت برای اقامت دوستانه یا
							خانوادگی ارائه می‌دهد. این اتاق شامل دو اتاق خواب با تخت دو نفره،
							دو حمام شخصی مدرن و یک سالن نشیمن فضیلت‌آمیز است. اتاق دارای تمامی
							امکانات رفاهی مانند تلویزیون، اینترنت بی‌سیم، کمد لباس و نشیمنی
							آرامش‌بخش است. دید از پنجره‌های این اتاق نیز بسیار دل‌انگیز و
							آرامبخش است.
						</p>
            <Link
									to="/allroom" className="absolute bottom-2 left-2  landingbtn-link2 font-bold py-2 px-4 mt-4 rounded mt-2"
									>بیشتر
								</Link>
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
							اتاق ویژه
						</h2>
						<p
							className="landingtext-color text-base"
							dir="rtl">
							اتاق ویژه، فضایی ارگونومیک و لوکس با امکانات بی‌نظیر ارائه می‌دهد.
							این اتاق دارای دکوراسیون شیک و منحصر به فردی است که همراه با
							چشم‌اندازهای دل‌انگیز، امکانات رفاهی از جمله وان حمام و خدمات
							اختصاصی مثل خدمه را فراهم می‌کند. با این فضای آرام و دل‌پذیر، اتاق
							ویژه تجربه‌ای منحصر به فرد از رفاه و آسایش را برای مسافران فراهم
							می‌کند.
						</p>
            <Link
									to="/allroom" className="absolute bottom-2 left-2  landingbtn-link2 font-bold py-2 px-4 mt-4 rounded mt-2"
									>بیشتر
								</Link>
					</div>
				</div>
			</div>
			<p className="landinginfo">درباره هتل</p>
			<div className="mb-8 flex landingdes max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
				<div className="w-3/5 m-0 overflow-hidden text-black rounded-r-none shrink-0 rounded-xl landinground-pic">
					<img
						src={des}
						alt="image"
						className="object-cover w-full h-full"
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
				className="landingfooter-color text-white py-4 w-full mt-8"
				dir="rtl">
				<div className=" mx-auto flex items-center px-4">
					<Link
						to="/contactus"
						className="hover:text-gray-300 ml-4">
						تماس با ما
					</Link>
					<Link
						to="/aboutus"
						className="hover:text-gray-300">
						درباره ما
					</Link>
				</div>
			</footer>
		</div>
	);
}

export default HotelComponent;
