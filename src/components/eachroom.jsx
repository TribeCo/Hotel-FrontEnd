import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./eachroom.css"; // Import your CSS file here
import "./tailwind.css";
import bk from "../assets/eachroom.png";
import Room from "../services/room";

const Eachroom = () => {
	const { id } = useParams();

	const [room, setRoom] = useState([]);
	const { accessToken } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await Room.getOne({ uid: id, authToken: accessToken });
				console.log(res);
				if (res.status === 200) {
					setRoom(res.data);
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
			<div className="w-full h-full lg:w-1/2">
				<img
					src={bk}
					alt="Your eachroomimage"
					className="w-full h-full"
				/>
			</div>

			{/* Right side (content) */}
			<div className="w-full eachroomcontainer lg:w-1/2">
				<h1 className="eachroomroom-info mt-4">مشخصات اتاق</h1>
				<div className="eachroomrow mx-2">
					<div className="relative flex flex-col">
						<label
							htmlFor="eachroomitem"
							className="eachroomlabel absolute bottom-10 left-10">
							{" "}
							شماره اتاق
						</label>
						<input
							type="text"
							placeholder="Input 1"
							className="eachroomitem w-1/3 p-2 border rounded-md mx-2"
						/>
					</div>
					{/* Add other input fields similarly */}
				</div>
				<div className="eachroomrow mx-2">
					<div className="relative flex flex-col">
						<label
							htmlFor="eachroomitem"
							className="eachroomlabel absolute bottom-10 left-10">
							{" "}
							قیمت به ازای هر شب
						</label>
						<input
							type="text"
							placeholder="Input 1"
							className="eachroomitem2 w-1/3 p-2 border rounded-md mx-2"
						/>
					</div>
				</div>
				<div className="eachroomrow">
					<div className="relative flex flex-col">
						<label
							htmlFor="eachroomitem"
							className="eachroomlabel absolute bottom-54 left-3/4">
							{" "}
							توضیحات
						</label>
						<textarea
							className="eachroomtext px-3 py-2"
							placeholder="Enter your text here..."></textarea>
					</div>
				</div>
				<div className="eachroomrow">
					<button className="eachroombutton">رزرو اتاق</button>
				</div>
			</div>
		</div>
	);
};

export default Eachroom;
