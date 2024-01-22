import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import moment from "moment-jalaali";
import Images from "../../assets/images";

function RoomCard({ room }) {
	if (room) {
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
								شماره اتاق {room.room.number}
							</Typography>

							<Typography>
								شما این اتاق را در تاریخ{" "}
								{moment(room.created, "YYYY-MM-DD").format("jYYYY/jMM/jDD")}{" "}
								برای {room.night_count} شب از تاریخ{" "}
								{moment(room.check_in, "YYYY-MM-DD").format("jYYYY/jMM/jDD")}{" "}
								رزرو کرده اید.
							</Typography>
						</Container>
						<Box
							mb={2}
							component="img"
							sx={{
								borderRadius: 2,
							}}
							src={Images.baseUrl + room.room.type.image}></Box>
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
					<Typography variant="h4">اتاقی رزرو ندارید.</Typography>
				</Paper>
			</>
		);
	}
}

export default RoomCard;
