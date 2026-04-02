import React from "react";

const BookingForm = () => {
    return (
        <div className="bg-white w-full max-w-xs rounded-md p-4 shadow-xl">
            <form className="space-y-3">
                <div>
                    <label className="block text-xs text-gray-500 mb-1">Origin</label>
                    <input
                        type="text"
                        placeholder="Dhaka"
                        className="w-full bg-gray-100 rounded px-3 py-3 text-sm font-semibold outline-none"
                    />
                </div>

                <div>
                    <label className="block text-xs text-gray-500 mb-1">Destination</label>
                    <input
                        type="text"
                        placeholder="Cox's Bazar"
                        className="w-full bg-gray-100 rounded px-3 py-3 text-sm font-semibold outline-none"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">From</label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full bg-gray-100 rounded px-3 py-3 text-sm font-semibold outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">To</label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full bg-gray-100 rounded px-3 py-3 text-sm font-semibold outline-none"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 rounded"
                >
                    Start Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;