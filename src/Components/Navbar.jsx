import React from 'react';
import { NavLink } from 'react-router';
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ textColor = "text-black" }) => {
    return (
        <div className={`flex items-center justify-between ${textColor} px-4 md:px-0`}>

            {/* Logo */}
            <NavLink to="/" className="w-20 ">
                <img
                    className={`${textColor === "text-white" ? "filter invert" : ""}`}
                    src={logo}
                />
            </NavLink>

            {/* Search */}
            <div className="hidden md:flex items-center bg-white/10 px-3 py-1 rounded-lg w-72">
                <CiSearch className={`text-xl mr-2 ${textColor === "text-white" ? "text-white/70" : "text-black/70"}`} />
                <input
                    type="text"
                    placeholder="Search Your Destination"
                    className={`bg-transparent outline-none ${textColor} ${textColor === "text-white" ? "placeholder-white/70" : "placeholder-black/50"} w-full`}
                
                />
            </div>

            {/* Menu */}
            <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
                <NavLink to="/news">News</NavLink>
                <NavLink to="/destination">Destination</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>

                <NavLink to="/auth/login" className="btn btn-warning text-black px-4 py-1 md:px-6">
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;