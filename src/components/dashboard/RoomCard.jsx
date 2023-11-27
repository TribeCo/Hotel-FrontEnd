import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

function RoomCard({ res = true }) {
	if (res) {
		return (
			<>
				<Paper
					sx={{
						p: 2,
						display: "flex",
						height: 240,
					}}>
					<Box
						component="img"
						sx={{
							maxHeight: { xs: 300, md: 400 },
							maxWidth: { xs: 300, md: 400 },
							borderRadius: 2,
						}}
						src="/src/assets/Hotelpic1.jpeg"></Box>
					<Container
						sx={{
							display: "flex",
							flexDirection: "column",
						}}>
						<Typography m="10">شماره اتاق 111</Typography>
						<Typography>تاریخ رزرو : 11/01/1402</Typography>
						<Typography>تاریخ پایان : 13/01/1402</Typography>
					</Container>
				</Paper>
			</>
		);
	} else {
		return (
			<>
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
						alignItems: "center	",
						height: 240,
					}}>
					<Typography
						sx={{
							fontWeight: "bold",
						}}>
						اتاقی رزرو ندارید.
					</Typography>
				</Paper>
			</>
		);
	}
}

export default RoomCard;
