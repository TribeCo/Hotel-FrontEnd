import axios from "axios";

const baseUrl = "https://hotelt.liara.run/api/accounts/comments";

class Comment {
	static addRoom = ({ data, authToken }) => {
		const url = `${baseUrl}/room/create/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.post(url, data, config);
	};
	static addFood = ({ data, authToken }) => {
		const url = `${baseUrl}/food/create/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.post(url, data, config);
	};
	static update = ({ uid, authToken, data }) => {
		const url = `${baseUrl}/update/${uid}/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.put(url, data, config);
	};
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
}

export default Comment;
