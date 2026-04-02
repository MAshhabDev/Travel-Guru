import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Background from '../Components/Background';

const HomeLayout = () => {
    return (
        <Background>
            <header className="py-3 w-11/12 max-w-7xl mx-auto px-4 sm:px-0">
                <Navbar textColor="text-white" />
            </header>

            <main className="mt-10 md:mt-16 lg:mt-20 px-4 sm:px-0">
                <div className="w-11/12 max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </Background>
    );
};

export default HomeLayout;