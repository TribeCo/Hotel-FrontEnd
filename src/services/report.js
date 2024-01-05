import axios from "axios";

const baseUrl = "/api/reports";

class Report {
	// @Desc get all reports
	static getAllReports({ authToken }) {
		const url = `${baseUrl}/all/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	}

	// @Desc get all reports
	static getFoodReports({ authToken }) {
		const url = `${baseUrl}/food/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	}
}

export default Report;
