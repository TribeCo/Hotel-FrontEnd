import axios from "axios";

const baseUrl = "/api/rooms";

//? Room Api
class Room {
	// @Desc get Room info with id
	static getOne = ({ uid, authToken }) => {
		const url = `${baseUrl}/type/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc get Room info with id
	static getUserRoom = ({ authToken }) => {
		const url = `${baseUrl}/reservation/user/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};

	// @Desc upload user image
	static uploadImage = ({ uid, file, authToken }) => {
		const formData = new FormData();
		formData.append("image", file);

		const url = `${baseUrl}/type/update/image/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, formData, config);
	};

	// @Desc get Reservation All Reservation Room
	static getAllReservation = ({ authToken }) => {
		const url = `${baseUrl}/reservation/all/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
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

	// @Desc get User All Room
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

	// @Desc delete a Room with id
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

	// @Desc edit Room info with id
	static edit = ({ uid, data, authToken }) => {
		const url = `${baseUrl}/type/update/${uid}/`;
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
		const url = `${baseUrl}/type/create/`;
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
