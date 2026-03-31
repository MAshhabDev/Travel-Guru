import React, { useState } from 'react';
import Category from './Category';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RightSide = ({ categories, selectedId, setSelectedId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (currentIndex + visibleCards < categories.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleItems = categories.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  return (
    <div>
      <div className="flex gap-6 overflow-hidden">
        {visibleItems.map((category) => (
          <Category
            key={category.id}
            category={category}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handlePrev}
          className="btn btn-circle btn-sm bg-white text-black border-none"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="btn btn-circle btn-sm bg-white text-black border-none"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RightSide;