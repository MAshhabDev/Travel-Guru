import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = ({ textColor = "text-black" }) => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("Log Out Successfully");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className={`flex flex-wrap items-center justify-between gap-4 ${textColor} px-4 md:px-0`}>
            <NavLink to="/" className="w-20">
                <img
                    src={logo}
                    alt="Logo"
                    className={`${textColor === "text-white" ? "filter invert" : ""}`}
                />
            </NavLink>

            <div className="hidden md:flex items-center bg-white/10 px-3 py-1 rounded-lg w-72">
                <CiSearch className={`text-xl mr-2 ${textColor === "text-white" ? "text-white/70" : "text-black/70"}`} />
                <input
                    type="text"
                    placeholder="Search Your Destination"
                    className={`bg-transparent outline-none ${textColor} ${textColor === "text-white" ? "placeholder-white/70" : "placeholder-black/50"} w-full`}
                />
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-sm md:text-base">
                <NavLink to="/news">News</NavLink>
                <NavLink to="/destination">Destination</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>

                {user && (
                    <span className="bg-black px-3 py-1 text-white rounded-full text-sm md:text-base">
                        {user.displayName || user.name}
                    </span>
                )}

                {user ? (
                    <button onClick={handleLogout} className="btn btn-primary">
                        Log Out
                    </button>
                ) : (
                    <NavLink to="/auth/login" className="btn btn-warning text-black px-4 py-1 md:px-6">
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;