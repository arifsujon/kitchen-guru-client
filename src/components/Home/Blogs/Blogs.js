import React, { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container mt-5" id="services">
            <h2 className="text-center mb-4">Our Blogs</h2>
            <div className="row">
                {
                    blogs.map(blog => <Blog blog={blog} key={blog._id} ></Blog> )
                }
            </div>
        </div>
    );
};

export default Blogs;