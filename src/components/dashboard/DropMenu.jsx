import {
	Typography,
	Divider,
	ListItemIcon,
	Menu,
	MenuItem,
} from "@mui/material";
import { Logout, Person } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function DropMenu({ openDrop, anchorEl, handleClose }) {
	const { logout } = useAuth();
	const Navigate = useNavigate();
	const handleLogout = () => {
		logout();
		Navigate("/login");
	};
	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={openDrop}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					width: 170,
					overflow: "visible",
					filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
					mt: 1.5,
					"& .MuiAvatar-root": {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					"&::before": {
						content: '""',
						display: "block",
						position: "absolute",
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: "background.paper",
						transform: "translateY(-50%) rotate(45deg)",
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
			<MenuItem onClick={() => Navigate("/profile")}>
				<ListItemIcon>
					<Person fontSize="small" />
				</ListItemIcon>
				<Typography>پروفایل</Typography>
			</MenuItem>
			<Divider />
			<MenuItem onClick={handleLogout}>
				<ListItemIcon>
					<Logout fontSize="small" />
				</ListItemIcon>
				<Typography>خروج</Typography>
			</MenuItem>
		</Menu>
	);
}

export default DropMenu;
