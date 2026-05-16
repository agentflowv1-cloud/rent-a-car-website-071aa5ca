import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import CarImage from '../components/CarImage';
import CarInfo from '../components/CarInfo';

const CarDetailsPage = () => {
  const [car, setCar] = useState({});
  const { setImage } = useStore();

  useEffect(() => {
    axios.get('https://example.com/api/car-details')
      .then(response => {
        setCar(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Car Details Page</h1>
      <CarImage car={car} />
      <CarInfo car={car} />
    </div>
  );
};

export default CarDetailsPage;