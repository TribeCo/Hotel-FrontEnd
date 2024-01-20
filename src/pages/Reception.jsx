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
	TextField,
} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from "../context/AuthContext";
import ListRow from "../components/reception/ListRow";
import Room from "../services/room";
import Loading from "../components/utils/Loading";

const Reception = () => {
	const [guestList, setGuestList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const { accessToken } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await Room.getAllReservation({ authToken: accessToken });
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


	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
		
		const filteredGuestList = guestList.filter((guest) =>
		guest.name.toLowerCase().includes(searchQuery.toLowerCase())
		);

		setGuestList(filteredGuestList)
	};

	if (!loading) {
		return (
			<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
				<Paper sx={{ padding: 2 }}>
					<Grid item>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								bgcolor: "#303030",
								p: 2,
							}}
						>
							<Grid container alignItems="center" spacing={1}>
								<Grid item sm={4}>
									<TextField
										label="جست و جوی نام"
										variant="outlined"
										fullWidth
										value={searchQuery}
										onChange={handleSearchChange}
									/>
								</Grid>
								<Grid item>
									<SearchIcon fontSize="large" />
								</Grid>
							</Grid>
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
