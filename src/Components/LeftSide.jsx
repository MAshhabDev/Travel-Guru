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
        description.length > 100
            ? description.slice(0, 100) + "..."
            : description;

    return (
        <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-tight">
                {name}
            </h1>

            <p className="mt-5 text-white/80 max-w-md text-sm sm:text-base">
                {shortDetails}
            </p>

            <Link
                to={`/tour-details/${id}`}
                className="btn btn-warning mt-6 text-black inline-flex items-center gap-2"
            >
                Booking <FaArrowRight />
            </Link>
        </div>
    );
};

export default LeftSide;