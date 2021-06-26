import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container-fluid p-0">
            <div class="row m-0">
                <div className="col-md-3 p-0">
                    <Sidebar />
                </div>
                <div className="col-md-9 p-0">
                </div>
            </div>
        </div>
    );
};

export default Dashboard;