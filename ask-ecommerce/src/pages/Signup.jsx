import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Implement the signup logic and API request here
      navigate("./Login.jsx")
    } catch (error) {
        setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-44 flex justify-center flex-col text-center">
      {errorMessage && (
        <div className="text-red-500 mb-4">{errorMessage}</div>
      )}
        <h2 className='text-center text-3xl font-sans'>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-5 ">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control  border-2 p-4 w-96"
              value={formData.username}
              placeholder='Username'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control  border-2 p-4 w-96"
              value={formData.email}
              placeholder='Email'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control  border-2 p-4 w-96"
              value={formData.password}
              placeholder='Password'
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary button-color mb-3">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
