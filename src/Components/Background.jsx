import React from 'react';
import image from "../assets/Rectangle 1.png";

const Background = ({ children }) => {


    return (
        <div
            className="min-h-screen  max-h-full bg-cover bg-center md:bg-fixed"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="fixed inset-0 bg-black/70"></div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};


export default Background;