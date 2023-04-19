import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
	const [post, setPost] = useState([]);

	const fetchPost = async () => {
		const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
		const { data } = res;
		setPost(data);
        console.log(data)
	};

	useEffect(() => {
		fetchPost();
	}, []);

	return <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>;
};