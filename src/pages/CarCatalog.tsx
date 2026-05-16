import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import axios from 'axios';
function CarCatalog() {
  const { cars, setCars } = useStore();
  const [carType, setCarType] = useState('');
  const [datesAvailable, setDatesAvailable] = useState('');
  const [location, setLocation] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8000/cars').then((response) => {
      setCars(response.data);
    });
  }, []);
  const handleFilter = () => {
    axios.get(`http://localhost:8000/cars?carType=${carType}&datesAvailable=${datesAvailable}&location=${location}`).then((response) => {
      setCars(response.data);
    });
  };
  return (
    <div>
      <h1>Car Catalog</h1>
      <form>
        <label>Car Type:</label>
        <select value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="">All</option>
          <option value="Sedan">Sedan</option>
          <option value="Truck">Truck</option>
          <option value="SUV">SUV</option>
        </select>
        <br />
        <label>Dates Available:</label>
        <input type="text" value={datesAvailable} onChange={(e) => setDatesAvailable(e.target.value)} />
        <br />
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        <br />
        <button type="button" onClick={handleFilter}>Filter</button>
      </form>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{car.name} - {car.type} - {car.datesAvailable} - {car.location}</li>
        ))}
      </ul>
    </div>
  );
}
export default CarCatalog;