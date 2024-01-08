import axios from "axios";

const baseUrl = "/api/food";

//? Food Api
class Food {
	// @Desc get Food info with id
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

	// @Desc get All Food
	static getAllFood = ({ authToken }) => {
		const url = `${baseUrl}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	static delivered = ({ uid, data, authToken }) => {
		const url = `${baseUrl}/reservation/delivery/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, data, config);
	};

	static reserve = ({ data, authToken }) => {
		const url = `${baseUrl}/reservation/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.post(url, data, config);
	};

	// @Desc upload food image
	static uploadImage = ({ uid, file, authToken }) => {
		const formData = new FormData();
		formData.append("image", file);

		const url = `${baseUrl}/update/image/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, formData, config);
	};

	// @Desc get All res
	static getAll = ({ authToken }) => {
		const url = `${baseUrl}/reservation/all/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc get User All Food
	static getUserAll = ({ authToken }) => {
		const url = `${baseUrl}/reservation/user/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc delete a Food with id
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

	// @Desc edit Food info with id
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

	// @Desc create Food
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

export default Food;
