import React from 'react';

const Category = ({ category, active }) => {

    const { image, name } = category
    return (
        <div
            className={`relative w-64 h-96 rounded-3xl overflow-hidden shadow-lg transition ${active ? "border-4 border-yellow-400 scale-105" : "opacity-80"
                }`}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <h2 className="absolute bottom-6 left-4 text-white text-2xl font-bold uppercase">
                {name}
            </h2>

        </div>
    );
};

export default Category;