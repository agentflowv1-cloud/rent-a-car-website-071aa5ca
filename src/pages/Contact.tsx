import React, { useState } from 'react';
import axios from 'axios';
import './styles/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-fastapi-backend.com/contact', {
        name,
        email,
        phone,
        carModel,
        message
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Phone:</label>
        <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label>Car Model:</label>
        <input type='text' value={carModel} onChange={(e) => setCarModel(e.target.value)} />
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;