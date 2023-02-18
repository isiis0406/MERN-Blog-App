import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function PostListDisplay() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);


  //Create the function request to get all posts
  const getPosts = async () => {
    try {
      const datas = await axios.get('http://localhost:3001/posts/');
      setPosts(datas.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      {posts.map((post) => {
        return (
          <div className='postListCard' key={post._id}>
            <div className="image">
              <Link to={`/posts/${post._id}`}>
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9naWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" alt="" />
              </Link>
            </div>
            <div className="text">
              <h3>{post.title}</h3>
              <p>{post.abstract}</p>
            </div>
          </div>
        )
      })}
    </div>



  )
}

export default PostListDisplay