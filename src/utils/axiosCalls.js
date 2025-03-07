import axios from "axios";

// POST request
export const httpRequest = async (requestType, link, obj = {}) => {
	try {
		let res;
		if (requestType === "get") {
			res = await axios.get(link);
		}
		if (requestType === "post") {
			res = await axios.post(link, obj);
		}
		if (requestType === "put") {
			res = await axios.put(link, obj);
		}
		return { data: res.data, status: res.status };
	} catch (err) {
		console.log(`${requestType} request failed:`, err.message);
	}
};
