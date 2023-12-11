import axios from "axios";

const baseUrl = "api/rooms";

//? Room Api
class Room {
	// @Desc get Room info with id
	static getOne = ({ uid, authToken }) => {
		const url = `${baseUrl}/${uid}`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc upload user image
	static uploadImage = ({ uid, data, authToken }) => {
		const url = `${baseUrl}/upload/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.post(url, data, config);
	};

	// @Desc get All Room
	static getAll = ({ authToken }) => {
		const url = `${baseUrl}/type/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc delete a Room with id
	static delete = ({ uid, authToken }) => {
		const url = `${baseUrl}/delete/${uid}`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.delete(url, config);
	};

	// @Desc edit Room info with id
	static edit = ({ uid, data, authToken }) => {
		const url = `${baseUrl}/update/${uid}`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, data, config);
	};

	// @Desc create Room
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

export default Room;
