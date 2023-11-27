import { Routes, Route } from "react-router-dom";

import Landing from "../components/landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AboutUs from "../components/AboutUs";

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
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/register"
				element={<Register />}
			/>
		</Routes>
	);
};

export default Router;
