import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const adminData = {
            email: data.email,
            password: data.password
        };
        console.log(adminData)
        

        const url = 'http://localhost:5050/addAdmin';
        console.log(adminData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then( res => console.log('server side response', res))

    };

    return (
        <div class="container-fluid m-0 p-0">
            <div className="row m-0">
                <div className="col-md-3 m-0 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="offset-md-3 col-md-3">
                    <h3 className="mt-5">Make a Admin</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-5 p-2 rounded" placeholder="Enter Email" {...register("email")} /><br/>
                        <input className="mt-3 p-2 rounded" placeholder="Enter Password" {...register("password")} /><br/>
                        <input className="mt-3 p-2 rounded btn btn-info" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;