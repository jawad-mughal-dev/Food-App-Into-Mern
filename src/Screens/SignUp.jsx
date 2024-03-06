import React from 'react';
import { useForm } from "react-hook-form";
import productImage from '../Images/product_04.jpg'
import axios from "axios"
import { Link, redirect } from 'react-router-dom';



function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data) => {

        console.log('Name:', data.name);
        console.log('Email:', data.email);
        console.log('Password:', data.password);

        axios.post("http://localhost:5000/api/createuser", {
            name: data.name,
            email: data.email,
            password: data.password,
            location: "Lahore"
        }).then(function (response) {


            // if(response.data.success)
            // {
            //     console.log("user is created ")
            // }
            console.log("naviagte");
            // <Navigate to="/about" replace={true} />
            return <redirect to="/" ></redirect>



        })
            .catch(function (error) {
                console.log(error);
                if (!error.response.data.success) {
                    console.log("user have not created ")
                }
            });

        // console.log("on submit funciton for the login page " + data)
    }


    return (
        <div className='  mx-auto h-screen'>
            <div className='flex items-center justify-center flex-col-reverse  flex-wrap md:flex-row'>
                <div className='flex-1 ps-8 mt-5'>
                    <div className='max-w-md '>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>

                            <input className='mt-4 rounded-lg ps-1 py-2 outline-none' placeholder='Name' {...register("name", { required: true })} />
                            {errors.name && <span className='mt-1 text-base text-white font-semibold mb-1 '>Name field is required</span>}
                            <input className='mt-4 rounded-lg ps-1 py-2 outline-none' placeholder='Password' {...register("password", { required: true })} />
                            {errors.password && <span className='mt-1 text-base text-white font-semibold mb-1 '>Password field is required</span>}
                            <input className='mt-4 rounded-lg ps-1 py-2 outline-none' placeholder='Confrom Password' {...register("conformPassword", { required: true })} />
                            {errors.conformPassword && <span className='mt-1 text-base text-white font-semibold mb-1 '>Confirm Password field is required</span>}
                            <input className='mt-4 rounded-lg ps-1 py-2 outline-none' placeholder='Email' {...register("email", { required: true })} />
                            {errors.email && <span className='mt-1 text-base text-white font-semibold mb-1 '>Email field is required</span>}
                            <input className=' hover:bg-red-300 hover:duration-150  cursor-pointer            mt-4 rounded ps-1 py-2 outline-none border-2 border-card-bg text-white font-bold text-xl' type='submit' />


                        </form>
                        <div className='mt-3 text-center'>
                            <Link to="/login" className='text-white font-bold text-center' >Already Have Account ?</Link>
                        </div>
                    </div>
                </div>
                <div className='flex-1 '>
                    <img className='w-10/12 mx-auto rounded-xl mt-10 me-8' src={productImage} />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
