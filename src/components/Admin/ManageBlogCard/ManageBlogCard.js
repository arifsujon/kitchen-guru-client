import React from 'react';

const ManageBlogCard = ({blog}) => {
    console.log(blog)
    const handleDelete = (id)=>{
        fetch(`http://localhost:5050/deleteBlog/${id}`, {
                method: 'DELETE'
            })
            .then(result => {
                console.log("deleted successfully", result);
            })
    }
    return (
        <div className="col-md-3 text-center mb-5">
            {/* <img src={blog.imageURL} alt="" style={{height: '60px'}}/> */}
            <h5 className="my-3">{blog.title}</h5>
            <button  className="ml-5 mb-3 btn btn-danger" onClick={() => handleDelete(blog._id)}><span className="">Delete</span></button>
        </div>
    );
};

export default ManageBlogCard;