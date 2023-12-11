import React, { useState, useEffect } from "react";
import "./eachfood.css"; // Import your CSS file here
import "./tailwind.css";
import bk from "../assets/eachfood.png";
import { useParams } from "react-router-dom";
import Food from "../services/food";
import { useAuth } from "../context/AuthContext";

const Eachfood = () => {
	const { id } = useParams();

	const [food, setFood] = useState([]);
	const { accessToken } = useAuth();

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
	return (
		<div className="flex flex-col h-full lg:flex-row">
			{/* Left side (picture) */}
			<div className="w-full h-auto lg:w-1/2">
				<img
					src={bk}
					alt="Your eachfoodimage"
					className="w-full h-auto"
				/>
			</div>

			{/* Right side (content) */}
			<div className="w-full eachfoodcontainer lg:w-1/2">
				<h1 className="eachfoodroom-info mt-4">مشخصات غذا</h1>
				<div className="eachfoodrow mx-2">
					<div className="relative flex flex-col">
						<label
							htmlFor="eachfooditem"
							className="eachfoodlabel absolute bottom-10 left-10">
							{" "}
							قیمت
						</label>
						<input
							type="text"
							placeholder="Input 1"
							className="eachfooditem2 w-1/3 p-2 border rounded-md mx-2"
						/>
					</div>
				</div>
				<div className="eachfoodrow">
					<div className="relative flex flex-col">
						<label
							htmlFor="eachfooditem"
							className="eachfoodlabel absolute bottom-54 left-3/4">
							{" "}
							توضیحات
						</label>
						<textarea
							className="eachfoodtext px-3 py-2"
							placeholder="Enter your text here..."></textarea>
					</div>
				</div>
				<div className="eachfoodrow">
					<button className="eachfoodbutton">رزرو غذا</button>
				</div>
			</div>
		</div>
	);
};

export default Eachfood;
