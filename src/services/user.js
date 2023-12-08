import axios from "axios";

const baseUrl = "api/accounts/users";

//? User Api
class User {
	// @Desc get user with id
	static getOne = (uid) => {
		const url = `${baseUrl}/detail/${uid}`;
		return axios.get(url);
	};

	// @Desc validate user email with email and validation code
	static validationEmail = (data) => {
		const url = `${baseUrl}/validation/`;
		return axios.post(url, data);
	};

	// @Desc delete user with id
	static delete = (uid) => {
		const url = `${baseUrl}/delete/${uid}`;
		return axios.delete(url);
	};

	// @Desc edit user info with id
	static edit = (uid, data) => {
		const url = `${baseUrl}/update/${uid}`;
		return axios.put(url, data);
	};

	// @Desc create user account
	static create = (data) => {
		const url = `${baseUrl}/create/`;
		return axios.post(url, data);
	};
}

export default User;
