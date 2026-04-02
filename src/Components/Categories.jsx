import React from 'react';

const Category = ({ category, selectedId, setSelectedId }) => {
  const { id, image, name } = category;

  return (
    <div
      onClick={() => setSelectedId(id)}
      className={`relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[320px] h-[320px] sm:h-[380px] md:h-[420px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
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

      <h2 className="absolute bottom-6 left-4 text-white text-xl sm:text-2xl font-bold uppercase">
        {name}
      </h2>
    </div>
  );
};

export default Category;