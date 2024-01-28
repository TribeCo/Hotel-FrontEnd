import { createContext, useContext, useState, useEffect } from "react";
import User from "../services/user";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const AccessToken = localStorage.getItem("accessToken");
		const fetchData = async () => {
			try {
				const response = await User.getOne({ accessToken: AccessToken });
				setUser(response.data);
			} catch (error) {
				showBoundary(error);
			}
		};

		fetchData();
	}, []);

	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	);
};

export const useGetUser = () => {
	return useContext(UserContext);
};
