import axios from "axios";

// POST request
export const postRequest = (url, port, path, obj) => {
	try {
		const res = axios.post(`${url}:${port}${path}`, obj);
		return res.data;
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
