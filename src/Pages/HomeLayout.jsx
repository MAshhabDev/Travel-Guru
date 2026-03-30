import React from 'react';
import Navbar from '../Components/Navbar';
import image from "../assets/Rectangle 1.png"


const HomeLayout = () => {
    return (
        <div className="min-h-screen bg-cover bg-center md:bg-fixed"
            style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute fixed inset-0 bg-black/70"></div>
            
            <div className="relative z-10 mx-auto">

                <header className='py-3 w-10/12 mx-auto' >
                    <Navbar ></Navbar>


                </header>

                <main>
                    <aside>

                    </aside>
                        
                </main>
            </div>
        </div>
    );
};

export default HomeLayout;