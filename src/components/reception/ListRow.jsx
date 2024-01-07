import { useState } from "react";
import {
	IconButton,
	Typography,
	TableRow,
	TableCell,
	Collapse,
	Box,
	Avatar,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

import moment from "moment-jalaali";

function ListRow(props) {
	const { guest } = props;
	const [open, setOpen] = useState(false);
	return (
		<>
			<TableRow key={guest.user.id}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</IconButton>
				</TableCell>
				<TableCell>
					<Typography>
						{guest.user.firstName + " " + guest.user.lastName}
					</Typography>
				</TableCell>
				<TableCell align="center">
					<Typography>{guest.room.number}</Typography>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ padding: 0 }}
					colSpan={6}>
					<Collapse
						in={open}
						timeout="auto"
						sx={{
							bgcolor: "#606060",
						}}
						unmountOnExit>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "start",
								padding: 1,
							}}>
							<Avatar
								src={guest.user.image}
								sx={{
									width: 60,
									height: 60,
								}}
							/>
							<Box
								sx={{
									pl: 1,
									display: "flex",
									flexDirection: "column",
								}}>
								<Typography sx={{ mt: 1 }}>کد ملی</Typography>
								<Typography sx={{ mt: 1 }}>ایمیل</Typography>
								<Typography sx={{ mt: 1 }}>ورود</Typography>
								<Typography sx={{ mt: 1 }}>خروج</Typography>
								<Typography sx={{ mt: 1 }}>بدهی</Typography>
							</Box>
							<Box
								sx={{
									pl: 1,
									display: "flex",
									flexDirection: "column",
								}}>
								<Typography sx={{ mt: 1 }}>
									{guest.user.nationalCode}
								</Typography>
								<Typography sx={{ mt: 1 }}>{guest.user.email}</Typography>
								<Typography sx={{ mt: 1 }}>
									{moment(guest.check_in, "YYYY-MM-DD").format("jYYYY/jMM/jDD")}
								</Typography>
								<Typography sx={{ mt: 1 }}>
									{moment(guest.check_in, "YYYY-MM-DD")
										.add(guest.night_count, "days")
										.format("jYYYY/jMM/jDD")}
								</Typography>
								<Typography sx={{ mt: 1 }}>
									{guest.remain_paid + " " + "تومان"}
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "start",
								padding: 1,
							}}></Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

export default ListRow;
