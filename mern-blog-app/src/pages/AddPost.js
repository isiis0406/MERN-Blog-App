import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import('../partials/formPost.css');


function AddPost() {
    const [title, setTitle] = useState("")
    const [abstract, setAbstract] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState(null)

    const navigate = useNavigate();

    //Modules for react-quill text area
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    //Formats for react-quill text area
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];


    //Manage the data submeted by user
    const handleSubmit = async (e) => {

        e.preventDefault();
        const newpost = {title, abstract, author, content};
        if(file){
            const data = new FormData();
            const filename = Date.now().toString() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newpost.cover = filename;
            try {
                await axios.post('http://localhost:3001/upload', data);
    
            } catch (error) {
            }
        }
        try {
            await axios.post('http://localhost:3001/posts', newpost)
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
            <form id='form' onSubmit={handleSubmit} encType="multipart/form-data">
                <input 
                type="text" 
                name='title' 
                placeholder='Title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
                
                <input 
                type="text" 
                name='abstract' 
                placeholder='Abstract' 
                value={abstract} 
                onChange={(e) => setAbstract(e.target.value)} />
    
                <input 
                type="text" 
                name='author' 
                placeholder='Author' 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} />

                <input 
                type="file" 
                name='cover' 
                onChange={(e) => setFile(e.target.files[0])} />
                <ReactQuill
                    placeholder='Content'
                    value={content}
                    onChange={(newValue) => setContent(newValue)}
                    modules={modules}
                    formats={formats}
                />
                <span></span>
                <button type="submit">Add Post</button>

            </form>
        </div>
    )
}

export default AddPost