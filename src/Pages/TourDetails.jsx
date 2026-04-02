import React, { useEffect, useState } from 'react';
import Background from '../Components/Background';
import Navbar from '../Components/Navbar';
import TourDetailsCard from '../Components/TourDetailsCard';
import { Link, useLoaderData, useParams } from 'react-router';
import BookingForm from '../Components/BookingForm';

const TourDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [tour, setTour] = useState({});

    useEffect(() => {
        const tourDetails = data.find(singleTour => singleTour.id == id);
        setTour(tourDetails);
    }, [data, id]);

    return (
        <div>
            <Background>
                <header className="w-11/12 max-w-7xl mx-auto py-3">
                    <Navbar textColor="text-white" />
                </header>

                <main className="w-11/12 max-w-7xl mx-auto py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
                    <section className="w-full">
                        <TourDetailsCard tour={tour} />
                    </section>

                    <section className="w-full flex justify-center lg:justify-end">
                        <BookingForm />
                    </section>

                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <Link
                            to="/"
                            className="btn btn-primary w-full sm:w-auto px-6"
                        >
                            Back to Home
                        </Link>
                    </div>
                </main>
            </Background>
        </div>
    );
};

export default TourDetails;