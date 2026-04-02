import React, { useEffect, useState } from 'react';
import Background from '../Components/Background';
import Navbar from '../Components/Navbar';
import LeftSide from '../Components/LeftSide';
import TourDetailsCard from '../Components/TourDetailsCard';
import { Link, useLoaderData, useParams } from 'react-router';
import BookingForm from '../Components/BookingForm';


const TourDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [tour, setTour] = useState({});

    useEffect(() => {
        const tourDetails = data.find(singleTour => singleTour.id == id)
        setTour(tourDetails);
    }, [data, id])

    return (
        <div>
            <Background>
                <header className='w-10/12 mx-auto py-3'>
                    <Navbar textColor='text-white'></Navbar>
                </header>
                <main className="w-10/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <section >
                        <TourDetailsCard tour={tour}></TourDetailsCard>
                    </section>
                    <section>
                        <BookingForm></BookingForm>
                    </section>

                    <Link to={`/${tour.id}`}
                        className='btn btn-primary w-4/12'>
                        Back to Home

                    </Link>

                </main>

            </Background>
        </div>
    );


};

export default TourDetails;