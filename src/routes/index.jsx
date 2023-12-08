import { Routes, Route } from "react-router-dom";

import Landing from "../components/landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AboutUs from "../components/AboutUs";
import AllRoom from "../components/Allroom";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const Router = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Landing />}
			/>
			<Route
				path="/aboutus"
				element={<AboutUs />}
			/>
			<Route
				path="/dashboard"
				element={<Dashboard />}
			/>
			<Route
				path="/allroom"
				element={<AllRoom />}
			/>
			<Route
				path="/profile"
				element={<Profile />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/register"
				element={<Register />}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default Router;
