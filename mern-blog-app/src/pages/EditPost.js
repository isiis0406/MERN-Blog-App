import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import('../partials/formPost.css');


function EditPost() {
    const [post, setPost] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    //Get the post when component monted
    useEffect(() => {
        getPost();
    }, []);

    //Get the post to display on edit form
    const getPost = async () => {
        try {
            const datas = await axios.get(`http://localhost:3001/posts/${params.id}`);
            setPost(datas.data);
        } catch (error) {

        }
    }

    //Add values of input to the post state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    }

    //Update the post
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {title,abstract,author,content} = post; 
        try {
             await axios.patch(`http://localhost:3001/posts/${params.id}`,{
                title,abstract,author,content
            })
            //Alert the Ok response
            swal({
                title: "Success!",
                text: "Your post updated successfully",
                icon: "success",
                button: "Ok",
              });
              
            //Redirect to detail post Page
            navigate(`/posts/${params.id}`);
       }
        catch (error) {
        swal({
            title: "Issued!",
            text: `Please try again`,
            icon: "error",
            button: "Ok",
          });
       }
    }

    
    return (
        <div className='editPost'>
            <h3>Edit post</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Title' value={post.title} onChange={(e) => handleChange(e)} />
                <input type="text" name='abstract' placeholder='Abstract' value={post.abstract} onChange={(e) => handleChange(e)} />
                <input type="text" name='author' placeholder='Author' value={post.author} onChange={(e) => handleChange(e)} />
                <textarea id='content' name='content' cols="30" rows="10" onChange={(e) => handleChange(e)} value={post.content} placeholder="Content"></textarea>
                <span></span>
                <button type="submit">Edit Post</button>

            </form>
        </div>
    )
}

export default EditPost
