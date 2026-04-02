import React from 'react';

const TourDetailsCard = ({tour}) => {

    const {name,description}=tour

    return (
        <div className='w-10/12'>
            <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold uppercase">
                {name}
            </h1>

            <p className="mt-5 text-white/80 max-w-md">
                {description}
            </p>

            
        </div>
        </div>
    );
};

export default TourDetailsCard;