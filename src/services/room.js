import axios from "axios";

const baseUrl = "api/rooms";

//? Room Api
class Room {
	// @Desc get Room info with id
	static getOne = (uid) => {
		const url = `${baseUrl}/${uid}`;
		return axios.get(url);
	};

	// @Desc get All Room
	static getAll = () => {
		const url = `${baseUrl}/`;
		return axios.get(url);
	};

	// @Desc delete a Room with id
	static delete = (uid) => {
		const url = `${baseUrl}/delete/${uid}`;
		return axios.delete(url);
	};

	// @Desc edit Room info with id
	static edit = (uid, data) => {
		const url = `${baseUrl}/update/${uid}`;
		return axios.put(url, data);
	};

	// @Desc create Room
	static create = (data) => {
		const url = `${baseUrl}/create/`;
		return axios.post(url, data);
	};
}

export default Room;
