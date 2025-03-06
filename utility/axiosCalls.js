import axios from "axios";

// POST request
export const postRequest = async (url, port, path, obj) => {
	try {
		const res = await axios.post(`${url}:${port}${path}`, obj);
		return { data: res.data, status: res.status };
	} catch (err) {
		console.log("Post request failed:", err);
	}
};

// export const postRequest = (url, path, obj) => {
// 	try {
// 		const res = axios.post(`${url}${path}`, obj);
// 		return res.data;
// 	} catch (err) {
// 		console.log("Post request failed:", err.message);
// 	}
// };

//PUT request
