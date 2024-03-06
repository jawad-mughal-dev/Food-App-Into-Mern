import React from 'react'
import logo from '../Images/logo.png'
import { FaCartArrowDown } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

export default function Header() {

    const menuList = [
        { label: "Home", link: "/" },
        { label: "ABOUT", link: "/about" },
        { label: "BLOG", link: "/blog" },
        { label: "SHOP", link: "/shop" },
        { label: "Login", link: "/login" },
        { label: "Sign Up", link: "/signup" }
    ];

    return (
        <div className='flex flex-row justify-between bg-white mx-8 py-3 px-3 rounded-3xl'>
            <div className='flex flex-row items-center'>
                <div>
                    <img className='w-16' src={logo} alt='logo image' />
                </div>
                <div className='ms-5 flex flex-row'>
                    {
                        menuList.map(({ label, link }, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    className={({ isActive }) => {
                                        return ` ms-3 text-sm font-medium hover:text-primary-red cursor-pointer  hover:duration-300 ${isActive ? "text-red-500" : "text-black"}`
                                    }}
                                    to={link}
                                >
                                    {label.toUpperCase()}
                                </NavLink>
                            );
                        })

                    }
                

                </div>
            </div>
            <div className='flex flex-row items-center'>
                <div className='me-4 hover:text-primary-red hover:duration-500'>
                    <h6 className='text-xs font-medium text-right'>Order by phone</h6>
                    <h3 className='text-primary-red font-semibold cursor-pointer text-xl '>1-800-700-600</h3>
                </div>
                <div className='bg-card-bg w-10 h-10 rounded-full me-4 flex flex-row justify-center items-center' >
                    <FaCartArrowDown size={13} />
                    <span className='ms-1'>0</span>
                </div>
                <div className=''>
                    <p className='cursor-pointer hover:duration-500 hover:bg-primary-red hover:text-white   uppercase text-sm text-primary-red font-semibold border-2 px-2 py-2 border-primary-red rounded-full'>View Full Menu</p>
                </div>
            </div>
        </div>
    )
}
