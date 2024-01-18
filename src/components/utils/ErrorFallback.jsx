import React from "react";
import { Typography, Button, Container, Grid } from "@mui/material";
import Image from "../../assets/error.png";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
	console.log(error);
	return (
		<Container>
			<Grid
				container
				spacing={2}
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{ minHeight: "100vh" }}>
				<img
					src={Image}
					alt="Not Found"
					style={{
						width: "480px",
						marginBottom: "2rem",
					}}
				/>

				<Grid item>
					<Typography
						variant="h4"
						color="#FFFFFF">
						خطایی رخ داد لطفا دوباره تلاش کنید!
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant="body1"
						color="#808080">
						{error.message}
					</Typography>
				</Grid>
				<Grid item>
					<Button
						onClick={resetErrorBoundary}
						variant="contained"
						sx={{
							bgcolor: "#ff00cc",
							color: "#fff",
							"&:hover": {
								bgcolor: "#ad018a",
							},
						}}>
						<Typography>بازگشت به خانه</Typography>
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

{
	/* <div
			role="alert"
			style={{
				backgroundColor: "#44475A",
				padding: "20px",
				borderRadius: "10px",
			}}>
			<p
				style={{
					backgroundColor: "#8BE9FD",
					fontWeight: "bold",
					fontSize: "18px",
				}}>
				Something went wrong:
			</p>
			<pre
				style={{
					backgroundColor: "#BD93F9",
					padding: "15px",
					border: "1px solid #ffcccc",
					borderRadius: "5px",
				}}>
				{error.message}
			</pre>
			<button
				onClick={resetErrorBoundary}
				style={{
					backgroundColor: "#ff4d4d",
					color: "white",
					padding: "10px 20px",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}>
				Try again
			</button>
		</div> */
}

export default ErrorFallback;
