import { useEffect, useState } from "react";
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
import Room from "../services/room";
import Loading from "../components/utils/Loading";

const Reception = () => {
	const [guestList, setGuestList] = useState([]);
	const [loading, setLoading] = useState(false);
	const { accessToken } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await Room.getAll({ authToken: accessToken });
				console.log(res.data);
				setGuestList(res.data);
				setLoading(false);
			} catch (error) {
				alert(error);
				setLoading(false);
			}
		};
		fetchData();
	}, [accessToken]);
	if (!loading) {
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
	} else {
		return <Loading />;
	}
};

export default Reception;
