import axios from "axios";

//switch

// POST request
export const postOrPutRequest = async (requestType, link, obj) => {
	try {
		let res;
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

//PUT request
