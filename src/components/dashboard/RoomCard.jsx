import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function RoomCard({ res = true }) {
	if (res) {
		return (
			<>
				<Paper
					sx={{
						p: 2,
						display: "flex",
					}}>
					<Grid>
						<Container
							sx={{
								display: "flex",
								flexDirection: "column",
								mb: 2,
							}}>
							<Typography
								variant="h4"
								mb={2}>
								شماره اتاق 111
							</Typography>
							<Typography>
								شما این اتاق را از تاریخ 01/01/1403 تا تاریخ 07/01/1403 رزرو
								کرده اید
							</Typography>
						</Container>
						<Box
							mb={2}
							component="img"
							sx={{
								borderRadius: 2,
							}}
							src="/src/assets/pic1.jpg"></Box>
					</Grid>
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
