import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
	return (
		<Routes>
			{/* <Route
				path="/"
				element={<Landing />}
			/> */}
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
