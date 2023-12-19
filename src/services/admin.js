import axios from "axios";

const baseUrl = "api/accounts/employees";

//? Admin Api
class Admin {
	// @Desc get Admin with id
	static getOne = ({ uid, authToken }) => {
		const url = `${baseUrl}/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc get All Admins
	static getAll = ({ authToken }) => {
		const url = `${baseUrl}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc edit user info with id
	static edit = ({ uid, data, authToken }) => {
		const url = `/api/accounts/users/role/update/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, data, config);
	};

	// @Desc create user account
	static create = ({ data, authToken }) => {
		const url = `${baseUrl}/create/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.post(url, data, config);
	};
}

export default Admin;
