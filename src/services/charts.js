import axios from "axios";

const baseUrl = "https://hotelt.liara.run/api/charts";

class Chart {
	// @Desc get year chart data reports
	static getYearReport = ({ authToken }) => {
		const url = `${baseUrl}/year/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};
	// @Desc get month chart data reports
	static getMonthReport = ({ authToken }) => {
		const url = `${baseUrl}/month/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};
	// @Desc get day chart data reports
	static getDayReport = ({ authToken }) => {
		const url = `${baseUrl}/day/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};
	// @Desc get chart data for food reports
	static getFoodReport = ({ authToken }) => {
		const url = `${baseUrl}/food/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authToken}`,
			},
		};
		return axios.get(url, config);
	};
}

export default Chart;
