import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	const [authTokens, setAuthTokens] = useState(null);

	const [user, setUser] = useState(null);

	let contextData = {
		loginUser: loginUser,
	};

	const loginUser = async (e) => {
		e.preventDefault();
		console.log("form su");
		let response = fetch("link", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: null, password: null }),
		});
	};
	return (
		<AuthContext.Provider value={{ name: "Dennis" }}>
			{children}
		</AuthContext.Provider>
	);
};
