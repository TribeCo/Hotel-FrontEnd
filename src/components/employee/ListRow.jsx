import { useState } from "react";
import {
	IconButton,
	Box,
	Divider,
	Grid,
	Typography,
	Button,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Fab,
	Container,
	Collapse,
} from "@mui/material";

import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

function ListRow(props) {
	const { emp, handleInfoBtnClick, handleEditBtnClick, handleDeleteBtnClick } =
		props;
	const [open, setOpen] = useState(false);
	return (
		<>
			<TableRow key={emp.id}>
				<TableCell
					component="th"
					scope="row">
					<Typography>{emp.firstName + " " + emp.lastName}</Typography>
				</TableCell>
				<TableCell align="center">
					<Typography>{Role(emp.role)}</Typography>
				</TableCell>
				<TableCell align="right">
					<Button
						onClick={() => handleInfoBtnClick(emp)}
						variant="contained"
						sx={{
							m: 1,
							minWidth: 100,
							bgcolor: "	#0096FF",
							color: "#FFFFFF",
						}}>
						<Typography variant="h6">اطلاعات</Typography>
					</Button>
					<Button
						onClick={() => handleEditBtnClick(emp)}
						variant="contained"
						sx={{
							m: 1,
							minWidth: 100,
							bgcolor: "#ff6600",
							color: "#FFFFFF",
						}}>
						<Typography variant="h6">ویرایش</Typography>
					</Button>
					<Button
						onClick={() => handleDeleteBtnClick(emp)}
						variant="contained"
						sx={{
							minWidth: 100,
							m: 1,
							bgcolor: "#ff0000",
							color: "#FFFFFF",
						}}>
						<Typography variant="h6">حذف</Typography>
					</Button>
				</TableCell>
			</TableRow>
		</>
	);
}

const Role = (role) => {
	switch (role) {
		case "m":
			return "مدیر هتل";

		case "d":
			return "معاون هتل";

		case "a":
			return "پذیرش هتل";

		case "r":
			return "مدیر رستوران";
	}
};

export default ListRow;
