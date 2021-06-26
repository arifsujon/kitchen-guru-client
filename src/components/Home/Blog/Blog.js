import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({ blog }) => {
    console.log(blog);
    const { imageURL, title, _id } = blog;
    return (
        <div className="col-md-4 blog">
            <div class="card card-info">
                <Link to={`/blog/${_id}`}><img className="card-img-top mx-auto" style={{}} src={imageURL} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Blog;

