import React, { useState } from "react";

const Icon = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			style={{
				position: "absolute",
				top: "150px",
				left: "150px",
				width: "40px",
				height: "40px",
				borderRadius: "10px",
				border: "3px solid #3C3D40",
				transition: "background-color 0.3s ease", // Add transition for smooth color change
				backgroundColor: isHovered ? "#3C3D40" : "transparent", // Change background color on hover
			}}
			onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when mouse enters
			onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when mouse leaves
		>
			<svg
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g
					id="upload-cloud"
					clip-path="url(#clip0_338_545)">
					<path
						id="Vector"
						d="M16 16.5L12 12.5L8 16.5"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						id="Vector_2"
						d="M12 12.5V21.5"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						id="Vector_3"
						d="M20.39 18.89C21.3653 18.3583 22.1358 17.5169 22.5798 16.4986C23.0239 15.4804 23.1162 14.3432 22.8422 13.2667C22.5682 12.1901 21.9434 11.2355 21.0666 10.5534C20.1898 9.87137 19.1108 9.50072 18 9.49998H16.74C16.4373 8.32923 15.8731 7.24232 15.0899 6.32098C14.3067 5.39964 13.3248 4.66783 12.2181 4.18059C11.1113 3.69335 9.90851 3.46334 8.70008 3.50787C7.49164 3.55239 6.30903 3.87028 5.24114 4.43765C4.17325 5.00501 3.24787 5.80709 2.53458 6.78357C1.82129 7.76004 1.33865 8.88552 1.12294 10.0754C0.90723 11.2652 0.964065 12.4885 1.28917 13.6532C1.61428 14.818 2.1992 15.8938 2.99996 16.8"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						id="Vector_4"
						d="M16 16.5L12 12.5L8 16.5"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_338_545">
						<rect
							width="24"
							height="24"
							fill="white"
							transform="translate(0 0.5)"
						/>
					</clipPath>
				</defs>
			</svg>
			<label
				style={{
					position: "absolute",
					top: "50px",
					left: "-60px",
					width: "150px",
					height: "20px",
					direction: "rtl",
					backgroundColor: "#212121",
					textAlign: "center",
					fontSize: "13px",
				}}>
				تصویر اتاق را بارگزاری کنید
			</label>
		</div>
	);
};

const RoomNumber = () => {
	const [roomNumber, setRoomNumber] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		if (value === "" || /^[0-9]$/.test(value)) {
			setRoomNumber(value);
		}
	};

	return (
		<div style={{ position: "relative" }}>
			<input
				type="number"
				style={{
					position: "absolute",
					top: "55px",
					left: "108px",
					width: "119px",
					height: "56px",
					borderRadius: "10px",
					border: "5px solid #3C3D40",
					fontFamily: "Vazirmatn",
					fontSize: "22px",
					fontWeight: 400,
					lineHeight: "34px",
					letterSpacing: "0em",
					textAlign: "center",
					backgroundColor: "#212121",
					color: "#FFFFFF",
				}}
				value={roomNumber}
				onChange={handleChange}
			/>
			<label
				style={{
					position: "absolute",
					top: "45px",
					left: "160px",
					width: "64px",
					height: "20px",
					direction: "rtl",
					backgroundColor: "#212121",
					textAlign: "center",
					fontSize: "13px",
				}}>
				شماره اتاق
			</label>
		</div>
	);
};

const BedCount = () => {
	const [bedCount, setBedCount] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		if (value === "" || /^[0-9]$/.test(value)) {
			setBedCount(value);
		}
	};

	return (
		<div style={{ position: "relative" }}>
			<input
				type="number"
				style={{
					position: "absolute",
					top: "55px",
					left: "257px",
					width: "119px",
					height: "56px",
					borderRadius: "10px",
					border: "5px solid #3C3D40",
					fontFamily: "Vazirmatn",
					fontSize: "22px",
					fontWeight: 400,
					lineHeight: "34px",
					letterSpacing: "0em",
					textAlign: "center",
					backgroundColor: "#212121",
					color: "#FFFFFF",
				}}
				value={bedCount}
				onChange={handleChange}
			/>
			<label
				style={{
					position: "absolute",
					top: "45px",
					left: "295px",
					width: "83px",
					height: "20px",
					direction: "rtl",
					backgroundColor: "#212121",
					textAlign: "center",
					fontSize: "13px",
				}}>
				تعداد تخت ها
			</label>
		</div>
	);
};

const RoomType = () => {
	const [roomType, setRoomType] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		if (value === "" || /^[a-zA-Z]+$/.test(value)) {
			setRoomType(value);
		}
	};

	return (
		<div style={{ position: "relative" }}>
			<input
				type="text"
				style={{
					position: "absolute",
					top: "55px",
					left: "406px",
					width: "119px",
					height: "56px",
					borderRadius: "10px",
					border: "5px solid #3C3D40",
					fontFamily: "Vazirmatn",
					fontSize: "22px",
					fontWeight: 400,
					lineHeight: "34px",
					letterSpacing: "0em",
					textAlign: "center",
					backgroundColor: "#212121",
					color: "#FFFFFF",
				}}
				value={roomType}
				onChange={handleChange}
			/>
			<label
				style={{
					position: "absolute",
					top: "45px",
					left: "470px",
					width: "51px",
					height: "20px",
					direction: "rtl",
					backgroundColor: "#212121",
					textAlign: "center",
					fontSize: "13px",
				}}>
				نوع اتاق
			</label>
		</div>
	);
};

const PricePerNight = () => {
	const [price, setPrice] = useState("");
	const currency = " تومان";

	const handleChange = (event) => {
		const value = event.target.value;
		if (value === "" || /^[0-9]*$/.test(value)) {
			setPrice(value);
		}
	};

	return (
		<div
			style={{ position: "relative", display: "flex", alignItems: "center" }}>
			<input
				type="text"
				style={{
					position: "absolute",
					top: "151px",
					left: "251px",
					width: "274px",
					height: "56px",
					borderRadius: "10px",
					border: "5px solid #3C3D40",
					fontFamily: "Vazirmatn",
					fontSize: "22px",
					fontWeight: 400,
					lineHeight: "34px",
					letterSpacing: "0em",
					textAlign: "center",
					backgroundColor: "#212121",
					color: "#FFFFFF",
				}}
				value={price}
				onChange={handleChange}
			/>
			<label
				style={{
					position: "absolute",
					top: "142px",
					left: "410px",
					width: "120px",
					height: "20px",
					direction: "rtl",
					backgroundColor: "#212121",
					textAlign: "center",
					fontSize: "13px",
				}}>
				قیمت به ازای هر شب
			</label>
		</div>
	);
};

const Description = ({ description }) => (
	<div style={{ position: "relative", display: "flex", alignItems: "center" }}>
		<div
			style={{
				position: "absolute",
				top: "250px",
				left: "108px",
				width: "422px",
				height: "277px",
				borderRadius: "10px",
				border: "5px solid #3C3D40",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "10px",
			}}>
			<textarea
				value={description}
				style={{
					width: "100%",
					height: "100%",
					border: "none",
					backgroundColor: "#212121",
					color: "#FFFFFF",
					direction: "rtl",
					fontSize: "16px",
				}}
			/>
		</div>
		<label
			style={{
				position: "absolute",
				top: "240px",
				left: "460px",
				width: "60px",
				height: "20px",
				direction: "rtl",
				backgroundColor: "#212121",
				textAlign: "center",
				fontSize: "13px",
			}}>
			توضیحات
		</label>
	</div>
);

const SaveButton = () => {
	const [hover, setHover] = useState(false);

	return (
		<button
			style={{
				position: "absolute",
				top: "580px",
				left: "250px",
				width: "117px",
				height: "46px",
				borderRadius: "13px",
				border: "4px solid #3C3D40",
				fontFamily: "Vazirmatn",
				fontSize: "19px",
				fontWeight: 400,
				lineHeight: "29.69px",
				letterSpacing: "0em",
				textAlign: "center",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "10px",
				backgroundColor: hover ? "#3C3D40" : "#212121",
				color: "#FFFFFF",
			}}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			ذخیره
		</button>
	);
};

const RoomCard = ({
	roomNumber,
	bedCount,
	roomType,
	pricePerNight,
	description,
}) => (
	<div
		style={{
			position: "relative",
			width: "632px",
			height: "675px",
			borderRadius: "24px",
			border: "13px #3C3D40 solid",
			color: "#FFFFFF",
		}}>
		<RoomNumber roomNumber={roomNumber} />
		<BedCount bedCount={bedCount} />
		<RoomType roomType={roomType} />
		<PricePerNight pricePerNight={pricePerNight} />
		<Icon />
		<Description description={description} />
		<SaveButton />
	</div>
);

export default RoomCard;
