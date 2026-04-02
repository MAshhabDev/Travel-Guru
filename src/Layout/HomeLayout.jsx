import React from 'react';
import Navbar from '../Components/Navbar';
import image from "../assets/Rectangle 1.png"
import LeftSide from '../Components/LeftSide';
import { Outlet } from 'react-router';
import Background from '../Components/Background';


const HomeLayout = () => {
    return (
        <Background>


            <header className='py-3 w-10/12 mx-auto' >
                <Navbar textColor='text-white'></Navbar>


            </header>

            <main className='mt-30'>

                <Outlet>

                </Outlet>


            </main>

        </Background>

    );
};

export default HomeLayout;