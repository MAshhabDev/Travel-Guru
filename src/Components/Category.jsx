import React from 'react';

const Category = ({ category, selectedId, setSelectedId }) => {
  const { id, image, name } = category;

  return (
    <div
      onClick={() => {
        console.log("clicked id:", id);
        setSelectedId(id);
      }}
      className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
        selectedId === id
          ? 'border-4 border-yellow-400 scale-105'
          : 'opacity-90'
      }`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <h2 className="absolute bottom-6 left-4 text-white text-lg sm:text-xl md:text-2xl font-bold uppercase">
        {name}
      </h2>
    </div>
  );
};

export default Category;