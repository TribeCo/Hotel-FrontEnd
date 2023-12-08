import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Grid } from "@mui/material";

const NotFound = () => {
	return (
		<Container>
			<Grid
				container
				spacing={2}
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{ minHeight: "100vh" }}>
				<Grid item>
					<Typography
						variant="h1"
						color="#FF0000">
						404
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant="h4"
						color="#FFFFFF">
						صفحه مورد نظر یافت نشد.
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant="body1"
						color="#808080">
						صفحه مورد نظر شما یافت نشد، برای بازگشت به صفحه اصلی میتوانید از
						دکمه زیر استفاده کنید.
					</Typography>
				</Grid>
				<Grid item>
					<Button
						component={Link}
						to="/"
						variant="contained"
						color="primary">
						بازگشت به خانه
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default NotFound;
