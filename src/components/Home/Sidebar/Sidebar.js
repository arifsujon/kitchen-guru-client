import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Sidebar = () => {
    const {_id} = useParams();
    console.log(_id);
    

    const [blogs, setBlogs] = useState([]);
    // const { imageURL, title, id } = blog;

    console.log(blogs);
    useEffect(() => {
        fetch('http://localhost:5050/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container" id="services">
            <div className="row">
                {
                    blogs.map(blog => 
                        <div className="row">
                            <div className="col-12">
                                <Link to={`/blog/${blog._id}`}> <img src={blog.imageURL} alt="" /></Link>
                                <h6>{blog.title}</h6>
                            </div>
                        </div>
                     )
                }
            </div>
        </div>
    );
};

export default Sidebar;