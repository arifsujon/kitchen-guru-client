import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Home/Home/Home';

const Login = () => {
    // Getting data from parent component

    
    // console.log(loggedInUser);
    
    
    const { register, handleSubmit } = useForm();

    const [admin, setAdmin] = useState({});
    useEffect( () => {
        const url = `http://localhost:5050/admins`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAdmin(data[0])
        })
    }, [])
    // console.log(admin);
    const {email, password} = admin;
    // console.log(email, password)

    const onSubmit = async (data) => {
        const signedInUser = {email: data.email, signedIn: true};
        console.log(signedInUser);
        sessionStorage.removeItem('signedIn');
        let matchEmail = await data.email === email;
        let matchPassword = await data.password === password;
        matchEmail && matchPassword && 
        sessionStorage.setItem("email", data.email);
        matchEmail && matchPassword && 
        sessionStorage.setItem("signedIn", true);
    };

    let history = useHistory();
    const handleOnClick = () => {
        history.push("/admin");
    }

    return (

        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-5 p-2 rounded" placeholder="Email" {...register("email")} /><br/>
                <input className="mt-3 p-2 rounded" placeholder="Password" {...register("password")} /><br/>
                <input className="mt-3 p-2 rounded btn btn-info" onClick={handleOnClick} type="submit" />
            </form> 
        </div>
    );
};

export default Login;