import React from "react";
import '../App.css'

const CardPost = ({ data }) => {
	return (
		<div>
			<h3> {data?.title.toUpperCase()} </h3>
            <span className="text"> {data.body} </span>
            <hr></hr>
		</div>
	);
};

export default CardPost;