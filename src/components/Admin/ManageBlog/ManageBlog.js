import React, { useEffect, useState } from 'react';
import ManageBlogCard from '../ManageBlogCard/ManageBlogCard';
import Sidebar from '../Sidebar/Sidebar';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs);
    useEffect(() => {
        fetch('http://localhost:5050/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container-fluid m-0 p-0">
            <div className="row m-0">
                <div className="col-md-3 m-0 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 m-0 p-0">
                    <div className="row m-0">
                        <h3 className="mt-5 mb-5 text-center">Manage Blog</h3>
                        {
                            blogs.map(blog => <ManageBlogCard blog={blog} key={blog._id}></ManageBlogCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;