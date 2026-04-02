import React, { useEffect, useState } from 'react';
import Category from './Category';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RightSide = ({ categories, selectedId, setSelectedId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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