import { Email } from "@mui/icons-material";
import {
	Avatar,
	Container,
	Typography,
	Paper,
	Box,
	Divider,
} from "@mui/material";
import React from "react";

function AvatarCard({ fullname, Photo, role, email }) {
	return (
		<Paper
			sx={{
				p: 2,
				display: "flex",
				flexDirection: "column",
				height: 360,
			}}>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center">
				{Role(role)}
				<Divider />
				<Avatar
					sx={{
						height: 150,
						width: 150,
						mb: 2,
					}}
					src={Photo}></Avatar>
				<Typography
					variant="h5"
					sx={{
						mb: 2,
						mt: 2,
					}}>
					{fullname}
				</Typography>
				<Typography>{email}</Typography>
			</Box>
		</Paper>
	);
}

const Role = (role) => {
	switch (role) {
		case "m":
			return (
				<Typography
					variant="h6"
					mb={3}>
					مدیر هتل
				</Typography>
			);

		case "d":
			return <Typography variant="h6">معاون هتل</Typography>;

		case "a":
			return <Typography variant="h6">پذیرش هتل</Typography>;

		case "r":
			return <Typography variant="h6">مدیر رستوران</Typography>;

		default:
			return <Typography variant="h6">کاربر</Typography>;
	}
};

export default AvatarCard;
