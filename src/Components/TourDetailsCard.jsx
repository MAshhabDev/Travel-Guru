import React from 'react';

const TourDetailsCard = ({ tour }) => {
    const { name, description } = tour;

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <div className="text-white">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-tight">
                    {name}
                </h1>

                <p className="mt-5 text-white/80 max-w-md md:max-w-xl text-sm sm:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default TourDetailsCard;