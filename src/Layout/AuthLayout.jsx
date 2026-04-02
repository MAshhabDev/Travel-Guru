import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="bg-base-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="w-11/12 max-w-7xl mx-auto px-4 py-3">
                <Navbar textColor="text-black" />
            </header>

            {/* Main */}
            <main className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;