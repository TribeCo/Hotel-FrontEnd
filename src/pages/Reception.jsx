import { useState } from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Container,
} from "@mui/material";

import { useAuth } from "../context/AuthContext";
import ListRow from "../components/reception/ListRow";

const Reception = () => {
	const [guestList, setGuestList] = useState([
		{
			id: 13,
			firstName: "رضا",
			lastName: "بوذرجمهری",
			nationalCode: "1991289634",
			email: "rezakuix@gmail.com",
			checkInDate: "19/12/1401",
			checkOutDate: "07/01/1402",
			debt: 19000,
			roomId: 111,
		},
		{
			id: 15,
			firstName: "طاها",
			lastName: "موسوی",
			nationalCode: "1000010101",
			email: "taha@gmail.com",
			checkInDate: "19/12/1401",
			checkOutDate: "07/01/1402",
			debt: 0,
			roomId: 100,
		},
	]);
	const { accessToken } = useAuth();

	return (
		<Container
			maxWidth="lg"
			sx={{ mt: 4, mb: 4 }}>
			<Paper
				sx={{
					padding: 2,
				}}>
				<Grid item>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "#303030",
							p: 2,
						}}>
						<Typography variant="h5">پذیرش</Typography>
					</Box>
					<Divider />
					<TableContainer>
						<Table aria-label="caption table">
							<TableHead>
								<TableRow>
									<TableCell />
									<TableCell>
										<Typography variant="h6">نام</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography variant="h6">شماره اتاق</Typography>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{guestList.map((guest) => (
									<ListRow guest={guest} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Reception;
