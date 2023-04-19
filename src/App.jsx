import { useContext, useReducer, useState } from 'react'
import './App.css'
import CardPost from './components/CardPost';
import { PostContext } from './context/PostContext';
import { usePost } from './hook/usePost';

function App() {
 
  const { post } = useContext(PostContext);
  const { postVacio, listPost } = usePost()


  const listarPost = () => {
    listPost(post)
  }

	return (
		<div className='body'>
			<h1>Lista de Post</h1>
			{post.map((post, idx) => {
				return <CardPost key={idx} data={post}></CardPost>;
			})}
      <h4> Hecho por Andrés Felipe Aristizabal Miranda </h4>
		</div>
	);
}

export default App
