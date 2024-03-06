import React from 'react'
import productImage from '../Images/product_04.jpg'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';

// axios is used for alternative of the fetch api 
import axios from 'axios'
function Login() {
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const naviagte = useNavigate();
    const onSubmit = (data) => {
        console.log('Email:', data.email);
        console.log('Password:', data.password);
        axios.post("http://localhost:5000/api/loginUser", {
            email: data.email,
            password: data.password,
        }).then(function (response) {
            console.log(response);
            naviagte("/");

        })
            .catch(function (error) {
                console.log(error);
            });

        // console.log("on submit funciton for the login page " + data)
    }


    return (
        <div className='h-screen'>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-1 w-full justify-center items-center flex-col'>
                    <form className='w-full ' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col items-center'>
                            <input {...register("email", { required: true })} placeholder='Email' className='w-1/2 py-2 mt-2 ps-1 rounded-md outline-none' />
                            {errors.email && <span className='mt-1 text-base text-white font-semibold mb-1 '>Email field is required</span>}
                            <input {...register("password", { required: true })} placeholder='Password' className='w-1/2 py-2 mt-2 ps-1 rounded-md outline-none' />
                            {errors.password && <span className='mt-1 text-base text-white font-semibold mb-1 '>password field is required</span>}
                            <input className=' hover:bg-red-300 hover:duration-150  cursor-pointer            mt-4 rounded ps-1 py-2 outline-none border-2 border-card-bg text-white font-bold text-xl w-5/12' type='submit' value="Login" />
                        </div>
                    </form>
                    <div className='mt-3 text-center'>
                        <Link to="/signup" className='text-white font-bold text-center' >Dont have Account Already ?</Link>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='w-10/12 mx-auto rounded-xl mt-10 me-8' src={productImage} />
                </div>
            </div>
        </div>
    )
}

export default Login