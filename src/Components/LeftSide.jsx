import React from 'react';
import Loading from './Loading';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';

const LeftSide = ({ category }) => {
    if (!category) {
        return <Loading />;
    }

    const { name, description, id } = category;

    const shortDetails =
        description.length > 180
            ? description.slice(0, 100) + "..."
            : description;

    return (
        <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold uppercase">
                {name}
            </h1>

            <p className="mt-5 text-white/80 max-w-md">
                {shortDetails}
            </p>

            <Link to={`/tour-details/${id}`} className="btn btn-warning mt-6 text-black">
                Booking <FaArrowRight />
            </Link>
        </div>
    );
};

export default LeftSide;