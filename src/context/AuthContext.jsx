// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
// 	const [accessToken, setAccessToken] = useState(null);
// 	const [refreshToken, setRefreshToken] = useState(null);

// 	const login = (tokens) => {
// 		setAccessToken(tokens.accessToken);
// 		setRefreshToken(tokens.refreshToken);
// 		sessionStorage.setItem("refreshToken", tokens.refreshToken);
// 	};

// 	const refreshAccessToken = async (refreshToken) => {
// 		try {
// 			// Send a request to the server to refresh the access token
// 			const response = await axios.post("http://your-api-url/refresh-token", {
// 				refreshToken,
// 			});

// 			const newAccessToken = response.data.accessToken;

// 			// Save the new access token to state
// 			setAccessToken(newAccessToken);
// 		} catch (error) {
// 			console.error("Refresh token error:", error);
// 		}
// 	};

// 	const logout = () => {
// 		setAccessToken(null);
// 		setRefreshToken(null);
// 		sessionStorage.removeItem("refreshToken");
// 	};

// 	return (
// 		<AuthContext.Provider
// 			value={{ accessToken, refreshToken, login, refreshAccessToken, logout }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// export const useAuth = () => useContext(AuthContext);
