import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layouts/DashboardLayout";
import AboutUs from "../components/AboutUs";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ContactUs from "../pages/ContactUs";
import Eachroom from "../pages/EachRoom";
import Eachfood from "../pages/EachFood";
import Landing from "../components/landing";
import ForgetPassword from "../pages/ForgetPassword";
import PaymentSuccess from "../pages/PaymentSuccess";
import FAQPage from "../components/Faqpage";

const Router = () => {
	return (
		<Routes>
			<Route
				path="/payment"
				element={<PaymentSuccess />}
			/>
			<Route
				path="/"
				element={<Landing />}
			/>
			<Route
				path="/aboutus"
				element={<AboutUs />}
			/>
			<Route
				path="/contactus"
				element={<ContactUs />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/faq"
				element={<FAQPage />}
			/>
			<Route
				path="/forget-password"
				element={<ForgetPassword />}
			/>
			<Route
				path="/register"
				element={<Register />}
			/>
			<Route
				path="/dashboard"
				element={<Dashboard />}
			/>
			<Route
				path="/profile"
				element={<Profile />}
			/>
			<Route
				path="/room/:id"
				element={<Eachroom />}
			/>
			<Route
				path="/food/:id"
				element={<Eachfood />}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default Router;
