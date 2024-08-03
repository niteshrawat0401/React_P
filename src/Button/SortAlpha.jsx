import React, { useState } from 'react';

const SortAlpha = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Charlie' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
  ]);

  const sortAZ = (a, b) => {
    console.log("fdfddf",a.name.toLowerCase())
    console.log("qwertyu",b.name.toLowerCase())
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  };

  const sortZA = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
    return 0;
  };

  const handleSortAZ = () => {
    const sortedData = [...data].sort(sortAZ);
    setData(sortedData);
  };

  const handleSortZA = () => {
    const sortedData = [...data].sort(sortZA);
    setData(sortedData);
  };

  return (
    <div>
      <button onClick={handleSortAZ}>Sort A to Z</button>
      <button onClick={handleSortZA}>Sort Z to A</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortAlpha;
