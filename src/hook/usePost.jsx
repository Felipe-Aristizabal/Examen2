import React, { useReducer } from "react";
import { PostReducer } from "../PostReducer";

const initialState = [
	{
		userId: null,
		id: null,
		title: "",
        body: ""
	},
];

const usePost = () => {
	const [postVacio, dispatchPosts] = useReducer(PostReducer, initialState);

	const listPosts = (posts) => {
		const action = {
			type: "LIST POSTS",
			payload: posts,
		};
		dispatchPosts(action);
	};

	return { postVacio, listPosts };
};

export { usePost };