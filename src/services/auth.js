import axios from "axios";

export const createUser = (data) => {
	const url = `api/accounts/user/create/`;
	return axios.post(url, data);
};

export const validationEmail = (data) => {
	const url = `api/accounts/user/validation/`;
	return axios.post(url, data);
};
