import React from 'react';

const CarImage = ({ car }: any) => {
  return (
    <div>
      {car.images.map((image: string, index: number) => (
        <img key={index} src={image} alt="Car Image" />
      ))}
    </div>
  );
};

export default CarImage;