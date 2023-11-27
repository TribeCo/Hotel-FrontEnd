import {
	Avatar,
	Container,
	Typography,
	Paper,
	Box,
	Divider,
} from "@mui/material";
import React from "react";

function AvatarCard({ fullname, Photo }) {
	return (
		<Paper
			sx={{
				p: 2,
				display: "flex",
				flexDirection: "column",
				height: 240,
			}}>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center">
				<Avatar
					sx={{
						height: 100,
						width: 100,
						mb: 2,
					}}
					src={Photo}></Avatar>
				<Typography>{fullname}</Typography>
			</Box>
		</Paper>
	);
}

export default AvatarCard;
