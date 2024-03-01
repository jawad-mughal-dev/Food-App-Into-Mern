import React from 'react'
import productImg from "../Images/productimage.jpg"
import { FaCartArrowDown } from "react-icons/fa";

export default function ProductCart({ name, img, bg }) {
    return (
        <div
            className={`rounded-3xl p-5 object-fill bg-center bg-cover`}
            style={{
                backgroundImage: bg ? `url(${img})` : 'none', // Set background image dynamically
                backgroundColor: bg ? 'transparent' : 'white', // Set background color dynamically
                backgroundSize: 'cover', // Ensure the background image covers the entire area
                backgroundPosition: 'center', // Center the background image
                backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
             
            }}
        >

            <div className={`font-medium  cursor-pointer ${bg ? "text-white" : "text=black"}`}>Beef</div>
            <div className={`text-4xl  ${bg ? "text-white" : "text=black"}  font-semibold hover:duration-300 hover:text-primary-red cursor-pointer`}>{name}</div>
            {bg ? <div className='h-96' ></div> : <div>
                <img src={img} />
            </div>}

            <div className='flex flex-row justify-between'>
                <div>
                    <div className={` text-2xl ${bg ? "text-white" : "text=black"} font-bold`}>$6.00</div>
                    <div className={`  ${bg ? "text-white" : "text=black"}`}>220gr / 600 cal</div>
                </div>
                <div className='flex flex-row'>
                    <div className='bg-card-bg p-2 px-4 rounded-full me-4 flex flex-row justify-center items-center' >
                        <FaCartArrowDown size={13} />
                        <span className='ms-1'>0</span>
                    </div>
                    <div className=''> <p className=' border-2 hover:bg-primary-red  border-primary-red p-2 px-4 rounded-full text-3xl text-primary-red  pt-1 cursor-pointer hover:duration-200 hover:text-white'>+</p></div>
                </div>


            </div>
        </div>
    )
}
