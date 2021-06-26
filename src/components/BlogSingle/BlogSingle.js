import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogSingle = () => {
    const {id} = useParams();
    console.log(id);

  
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    const {title, imageURL, content} = blogs;

    useEffect( () => {
        const url = `http://localhost:5050/blogs`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBlogs(data.find(blog => blog._id === id))
        })
    }, [id])

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-2 col-md-8">
                    <img className="card-img-top mx-auto d-block rounded" style={{}} src={imageURL} alt="" />
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;