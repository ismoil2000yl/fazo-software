import { useMutation } from "@tanstack/react-query";
import { api, queryBuilder } from "services";

async function postData({ url, data, params, method = "post", onSuccess = () => {}, onError = () => {} }) {
	return await api[method](queryBuilder(url, params), data)
		.then(data => {
			onSuccess(data);
		})
		.catch(error => {
			onError(error);
		});
}

const usePost = () => {
	return useMutation(postData);
};

export default usePost;