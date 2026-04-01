import React, { useEffect, useState } from 'react';
import LeftSide from '../Components/LeftSide';
import RightSide from '../Components/RightSide';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('/Travel.json')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setSelectedId(data[0]?.id);
      });
  }, []);

  const selectedCategory = categories.find(
    (item) => item.id === selectedId
  );

  console.log("selectedId:", selectedId);
  console.log("selectedCategory:", selectedCategory);

  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <LeftSide category={selectedCategory} />

        <RightSide
          categories={categories}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
    </div>
  );
};

export default Home;