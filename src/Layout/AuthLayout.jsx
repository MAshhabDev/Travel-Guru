import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <div className='bg-base-100 min-h-screen'>
            <header className='w-11/12 p-4 mx-auto'>
            <Navbar textColor="text-black"></Navbar>

            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;