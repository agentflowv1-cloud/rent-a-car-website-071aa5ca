import React from 'react';

const CarInfo = ({ car }: any) => {
  return (
    <div>
      <h2>Car Information</h2>
      <p>Price: {car.price}</p>
      <p>Location: {car.location}</p>
    </div>
  );
};

export default CarInfo;