import axios from "axios";
import React from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import jwt from "jsonwebtoken";

const SERVER_URL = "http://sad-feynman-o4pmqxbi3.iran.liara.run/accounts";
const JWT_SECRET_KEY = "er9238fnwi7fy2d3n3f239r87dcjknwq0e92";
const JWT_ALGORITHM = "HS256";

export const createUser = (data) => {
	const url = `${SERVER_URL}/user/create`;
	return axios.post(url, data);
};

// const { accessToken, login, logout } = useAuth();

// const handleLogin = async (username, password) => {
// 	try {
// 		const response = await fetch(`${SERVER_URL}/login`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({
// 				username,
// 				password,
// 			}),
// 		});
// 		const { accessToken, refreshToken } = await response.json();
// 		login({ accessToken, refreshToken });
// 	} catch (error) {
// 		console.error("Login error:", error);
// 	}
// };

// const handleLogout = () => {
// 	logout();
// };
