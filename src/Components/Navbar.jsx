import React from 'react';
import { NavLink } from 'react-router';
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between text-white px-4 md:px-0">

            {/* Logo */}
            <NavLink to="/" className="w-20 ">
                <img className='filter invert' src={logo} alt="logo" />
            </NavLink>

            {/* Search */}
            <div className="hidden md:flex items-center bg-white/10 px-3 py-1 rounded-lg w-72">
                <CiSearch className="text-white/70 text-xl mr-2" />
                <input
                    type="text"
                    placeholder="Search Your Destination"
                    className="bg-transparent outline-none text-white placeholder-white/70 w-full"
                />
            </div>

            {/* Menu */}
            <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
                <NavLink to="/news">News</NavLink>
                <NavLink to="/destination">Destination</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>

                <button className="btn btn-warning text-black px-4 py-1 md:px-6">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;