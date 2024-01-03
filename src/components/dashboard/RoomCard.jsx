import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import moment from "moment-jalaali";

const baseUrl = "https://hotelback.iran.liara.run";

function RoomCard({ res }) {
	if (res.room) {
		console.log(res);
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
								شماره اتاق {res.room.number}
							</Typography>

							<Typography>
								شما این اتاق را در تاریخ{" "}
								{moment(res.created, "YYYY-M-D")
									.endOf("jMonth")
									.format("jYYYY/jM/jD")}{" "}
								{/* تا تاریخ */}
								{/* {moment(res.check_out, "YYYY-M-D")
									.endOf("jMonth")
									.format("jYYYY/jM/jD")} */}
								رزرو کرده اید .
							</Typography>
						</Container>
						<Box
							mb={2}
							component="img"
							sx={{
								borderRadius: 2,
							}}
							src={baseUrl + res.room.type.image}></Box>
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
