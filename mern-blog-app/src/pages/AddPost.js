import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import('../partials/formPost.css');


function AddPost() {
    const [post, setPost] = useState({
        title: "",
        abstract: "",
        author: "",
        content: ""
    });
    const navigate = useNavigate();
    //Add values of input to the post state
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setPost({...post, [name]:value});
    }

    //Manage the data submeted by user
    const handleSubmit =  async (e) =>{
        e.preventDefault();
        const {title,abstract,author,content} = post 
        try {
             await axios.post('http://localhost:3001/posts',{
                title,abstract,author,content
            })
            //Alert the Ok response
            swal({
                title: "Success!",
                text: "Your post created successfully",
                icon: "success",
                button: "Ok",
              });
              
            //Redirect to home Page
            navigate('/');
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
        <div className='addPost'>
            <h3>Add post</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Title'  value={post.title}  onChange={(e) => handleChange(e)}/>
                <input type="text" name='abstract' placeholder='Abstract' value={post.abstract}  onChange={(e) => handleChange(e)} />
                <input type="text" name='author'placeholder='Author' value={post.author}  onChange={(e) => handleChange(e)} />
                <textarea id='content' name='content' cols="30" rows="10" onChange={(e) => handleChange(e)} value={post.content} placeholder="Content"></textarea>
                <span></span>
                <button type="submit">Add Post</button>
            
            </form>
        </div>
    )
}

export default AddPost