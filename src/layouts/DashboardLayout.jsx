import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
	CssBaseline,
	Box,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	Avatar,
	Container,
	Grid,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Button,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
	RoomPreferences,
	RoomService,
	FoodBank,
	Assignment,
	People,
	ShoppingCart,
	Dashboard as DashboardIcon,
	ChevronLeft,
} from "@mui/icons-material";

// Components
import Loading from "../components/utils/Loading";

// Pages
import Dashboard from "../pages/Dashboard";
import Allfood from "../components/Allfood";
import AllRoom from "../components/Allroom";
import PaymentPage from "../pages/Payment";
import Reception from "../pages/Reception";
import EmployeeList from "../pages/EmployeeList";
import Reports from "../pages/Reports";
import Reservations from "../pages/Reservations";
import FoodReports from "../pages/FoodReports";

// Context
import { useAuth } from "../context/AuthContext";

// Services
import User from "../services/user";
const baseUrl = "https://hotelback.iran.liara.run";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));
const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

const DashboardLayout = () => {
	const Navigate = useNavigate();
	const { accessToken } = useAuth();

	const [user, setUser] = useState(null);
	const [open, setOpen] = useState(false);
	const [page, setPage] = useState(0);
	const togglePage = (num) => {
		console.log(num);
		setPage(num);
	};
	const toggleDrawer = () => {
		setOpen(!open);
	};

	useEffect(() => {
		const checkLoginStatus = async (access) => {
			if (!access) {
				Navigate("/login");
			}
		};

		const fetchData = async () => {
			try {
				const response = await User.getOne({ accessToken: accessToken });
				console.log(response.data);
				if (response.status === 200) {
					setUser(response.data);
				} else {
					Navigate("/login");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [accessToken]);

	const pages = [
		<Dashboard user={user} />, // محتویات داشبورد
		<AllRoom />, // رزرو اتاق
		<Allfood />, // رزرو غذا
		<PaymentPage />, // تسویه حساب
		<Reception />, //پذیرش
		<EmployeeList />, //لیست کارمندان
		<Reports />, //گزارش کل
		<Reservations />, // لیست رزرو های غذا
		<FoodReports />, // گزارش رستوران
	];
	if (user) {
		return (
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position="absolute"
					open={open}>
					<Toolbar
						sx={{
							pr: "24px",
						}}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer}
							sx={{
								marginRight: "36px",
								...(open && { display: "none" }),
							}}>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							sx={{ flexGrow: 1 }}>
							داشبورد
						</Typography>
						<Button onClick={() => Navigate("/profile")}>
							<Typography sx={{ paddingRight: 1, color: "#FFFFFF", mr: 1 }}>
								{user.firstName + " " + user.lastName}
							</Typography>
							<Avatar src={baseUrl + user.image}></Avatar>
						</Button>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					open={open}>
					<Toolbar
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
							px: [1],
						}}>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeft />
						</IconButton>
					</Toolbar>
					<Divider />
					<List component="nav">
						{/* main item list(evry user)*/}
						<ListItemButton onClick={() => togglePage(0)}>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText primary="داشبورد" />
						</ListItemButton>
						<ListItemButton onClick={() => togglePage(1)}>
							<ListItemIcon>
								<RoomPreferences />
							</ListItemIcon>
							<ListItemText primary="رزرو اتاق" />
						</ListItemButton>
						<ListItemButton onClick={() => togglePage(2)}>
							<ListItemIcon>
								<RoomService />
							</ListItemIcon>
							<ListItemText primary="رزرو غذا" />
						</ListItemButton>
						<ListItemButton onClick={() => togglePage(3)}>
							<ListItemIcon>
								<ShoppingCart />
							</ListItemIcon>
							<ListItemText primary="تسویه حساب" />
						</ListItemButton>
						{user.role && (
							<>
								{(user.role === "a" ||
									user.role === "m" ||
									user.role === "d") && (
									<>
										<Divider sx={{ my: 1 }} />
										<ListSubheader
											component="div"
											inset>
											گزارش های ادمین
										</ListSubheader>
										<ListItemButton onClick={() => togglePage(4)}>
											<ListItemIcon>
												<People />
											</ListItemIcon>
											<ListItemText primary="پذیرش" />
										</ListItemButton>
										<ListItemButton onClick={() => togglePage(5)}>
											<ListItemIcon>
												<People />
											</ListItemIcon>
											<ListItemText primary="لیست کارمندان" />
										</ListItemButton>
										<ListItemButton onClick={() => togglePage(6)}>
											<ListItemIcon>
												<Assignment />
											</ListItemIcon>
											<ListItemText primary="گزارش کل" />
										</ListItemButton>
									</>
								)}
								{(user.role === "r" ||
									user.role === "m" ||
									user.role === "d") && (
									<>
										<Divider sx={{ my: 1 }} />
										<ListSubheader
											component="div"
											inset>
											گزارش های رستوران
										</ListSubheader>
										<ListItemButton onClick={() => togglePage(7)}>
											<ListItemIcon>
												<FoodBank />
											</ListItemIcon>
											<ListItemText primary="لیست رزرو ها" />
										</ListItemButton>
										<ListItemButton onClick={() => togglePage(8)}>
											<ListItemIcon>
												<Assignment />
											</ListItemIcon>
											<ListItemText primary="گزارش رستوران" />
										</ListItemButton>
									</>
								)}
							</>
						)}
					</List>
				</Drawer>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}>
					<Toolbar />
					{pages[page]}
				</Box>
			</Box>
		);
	} else {
		return <Loading />;
	}
};

export default DashboardLayout;
