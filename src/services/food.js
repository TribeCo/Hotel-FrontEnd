import axios from "axios";

const baseUrl = "api/food";

//? Food Api
class Food {
	// @Desc get Food info with id
	static getOne = (uid) => {
		const url = `${baseUrl}/${uid}`;
		return axios.get(url);
	};

	// @Desc get All Food
	static getAll = () => {
		const url = `${baseUrl}/`;
		return axios.get(url);
	};

	// @Desc delete a Food with id
	static delete = (uid) => {
		const url = `${baseUrl}/delete/${uid}`;
		return axios.delete(url);
	};

	// @Desc edit Food info with id
	static edit = (uid, data) => {
		const url = `${baseUrl}/update/${uid}`;
		return axios.put(url, data);
	};

	// @Desc create Food
	static create = (data) => {
		console.log(1);
		const url = `${baseUrl}/create/`;
		return axios.post(url, data);
	};
}

export default Food;
