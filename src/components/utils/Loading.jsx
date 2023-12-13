import React from "react";

import { Grid, CircularProgress } from "@mui/material";

function Loding() {
	return (
		<Grid
			container
			component="main"
			sx={{
				height: "100vh",
				backgroundColor: "#141A20",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			<CircularProgress
				color="primary"
				size="5rem"
				variant="indeterminate"
			/>
		</Grid>
	);
}

export default Loding;
