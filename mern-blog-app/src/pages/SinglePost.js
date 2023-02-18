import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

import '../partials/singlePost.css'

function SinglePost() {
    const [post, setPost] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    // Get the datas of post from the server
    useEffect(() => {
        getPost();
    }, []);
    // Function for geting data from the sserver
    const getPost = async () => {
        try {
            const datas = await axios.get(`http://localhost:3001/posts/${params.id}`);
            setPost(datas.data);
        } catch (error) {
            console.log(error);
        }
    }


    //Delete the post onclicked 
    const handleDeletePost = async (e) => {
        e.preventDefault();
         
        try {
             await axios.delete(`http://localhost:3001/posts/${params.id}`,{
            
            })
            //Alert the Ok response
            swal({
                title: "Success!",
                text: "Your post deleted successfully",
                icon: "success",
                button: "Ok",
              });
              
            //Redirect to detail post Page
            navigate(`/`);
       }
        catch (error) {
        swal({
            title: "Issued!",
            text: `${error.message}`,
            icon: "error",
            button: "Ok",
          });
       }
    }
    return (
        <div className='post'>
            <form onSubmit={handleDeletePost}>
                <button className='danger'>Delete</button>
            </form>
            <Link to={`/posts/${post._id}/edit`}>
                <button >Edit</button>
            </Link>

            <h2>{post.title}</h2>


            <div className="post-container">
                <div className='summary'>
                    <img src="https://images.unsplash.com/photo-1648590297514-70303e254076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2188&q=80" alt="" />
                    <div className="abstract">
                        <h4>Abstract :</h4>
                        <p>{post.abstract}</p>
                    </div>
                </div>
                <p className='content'>{post.content}</p>

            </div>
        </div>
    )
}

export default SinglePost