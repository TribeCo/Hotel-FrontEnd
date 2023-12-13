import React from "react";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";

const ContactUs = () => {
	const containerStyle = {
		marginTop: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	const formStyle = {
		width: "100%",
		marginTop: "1rem",
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
	};

	return (
		<Container
			component="main"
			maxWidth="xs"
			style={containerStyle}>
			<Typography
				color="#FFFFFF"
				variant="h4"
				align="center">
				ارتباط با ما
			</Typography>
			<img
				src="/src/assets/pic.jpg"
				alt="Contact Us"
				style={{
					marginTop: "2rem",
					width: "100%",
					marginBottom: "1rem",
					borderRadius: "1rem",
				}}
			/>

			<form
				onSubmit={handleSubmit}
				style={formStyle}>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="name"
					label="نام شما"
					name="name"
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="آدرس ایمیل"
					name="email"
					type="email"
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="message"
					label="متن"
					name="message"
					multiline
					rows={4}
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					style={{
						margin: "1.5rem 0 1rem",
						backgroundColor: "#FFC0CB",
					}}>
					ثبت
				</Button>
			</form>
		</Container>
	);
};

export default ContactUs;
