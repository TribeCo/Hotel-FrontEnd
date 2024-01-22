import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, Container } from "@mui/material";
import axios from "axios";
import image from "/src/assets/payment-success.png";
import { Grade } from "@mui/icons-material";

function PaymentSuccess() {
	const [success, setSuccess] = useState("");

	const params = new URLSearchParams(window.location.search);
	const authority = params.get("Authority");
	const status = params.get("Status");
	console.log(status);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://hotelt.liara.run/api/verify/?Authority=${authority}&Status=${status}`;
				const res = await axios.get(url);
				console.log(res);
				setSuccess(res.data.message);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container
			component="main"
			maxWidth="xs"
			style={{
				marginTop: "2rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<img
				src={image}
				alt="Contact Us"
				style={{
					marginTop: "2rem",
					width: "100%",
					marginBottom: "1rem",
					borderRadius: "1rem",
				}}
			/>
			<Typography
				color="#FFFFFF"
				variant="h4"
				align="center">
				{success}
			</Typography>
			<Link to="/dashboard">
				<Button
					fullWidth
					variant="contained"
					color="primary"
					style={{
						margin: "1.5rem 0 1rem",
						backgroundColor: "#00ff08",
					}}>
					<Typography
						m={1}
						variant="h6">
						بازگشت به داشبورد
					</Typography>
				</Button>
			</Link>
		</Container>
	);
}

export default PaymentSuccess;
