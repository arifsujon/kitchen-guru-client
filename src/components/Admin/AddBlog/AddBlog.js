import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const BlogData = {
            title: data.title,
            content: data.content,
            imageURL: imageURL
        };
        

        const url = 'http://localhost:5050/addBlog';
        console.log(BlogData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BlogData)
        })
        .then( res => console.log('server side response', res))

    };
    
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '567ed280f2234c502b55f6ed8195bb1f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
        setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div className="container-fluid m-0 p-0">
            <div className="row m-0">
                <div className="col-md-3 m-0 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 m-0 p-0 text-center add-services">
                    <h3 className="mt-5">Add Blog</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-5 p-2 rounded" placeholder="Blog Title" {...register("title")} /><br/>
                        <input className="mt-3 p-2 rounded" placeholder="Blog Content" {...register("content")} /><br/>
                        <input className="mt-3" type="file" onChange={handleImageUpload}/> <br/>
                        <input className="mt-3 p-2 rounded btn btn-info" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;