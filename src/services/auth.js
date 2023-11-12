import axios from "axios";
// import jwt from "jsonwebtoken";

const SERVER_URL = "http://sad-feynman-o4pmqxbi3.iran.liara.run/accounts";

export const createUser = (data) => {
	const url = `${SERVER_URL}/user/create`;
	return axios.post(url, data);
};
