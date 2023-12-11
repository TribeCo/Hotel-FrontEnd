import axios from "axios";

const baseUrl = "api/accounts/users";

//? User Api
class User {
	// @Desc get user with id
	static getOne = async ({ accessToken }) => {
		const url = `${baseUrl}/detail/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		};
		try {
			return await axios.get(url, config);
		} catch (error) {
			console.log(error.message);
		}
	};

	// @Desc upload user image
	static uploadImage = (uid, file) => {
		const formData = new FormData();
		formData.append("image", file);

		const url = `${baseUrl}/update/image/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
				// Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, formData, config);
	};

	// @Desc validate user email with email and validation code
	static validationEmail = (data) => {
		const url = `${baseUrl}/validation/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		return axios.post(url, data, config);
	};

	// @Desc delete user with id
	static delete = ({ uid, authToken }) => {
		const url = `${baseUrl}/delete/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.delete(url, config);
	};

	// @Desc edit user info with id
	static edit = ({ uid, data, authToken }) => {
		const url = `${baseUrl}/update/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, data, config);
	};

	// @Desc create user account
	static create = (data) => {
		const url = `${baseUrl}/create/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		return axios.post(url, data, config);
	};
}

export default User;
