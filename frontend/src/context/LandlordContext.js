// LandlordContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LandlordContext = createContext();

export function useLandlord() {
  return useContext(LandlordContext);
}

export function LandlordProvider({ children }) {
  const [landlord, setLandlord] = useState(null);
  const [propertyData, setPropertyData] = useState({
    location: '',
    environment: '',
    security: '',
    name: '',
    images: '',
  });
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/landlords/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
  
        // Set the landlord ID in session storage
        sessionStorage.setItem('landlord_id', data.id);
  
        setLandlord(data);
  
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back, ' + data.username + '!',
        });
  
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
  
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });
  
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
  
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'An error occurred. Please try again later.',
      });
  
      throw new Error('Authentication failed');
    }
  };
  

  const addProperty = async (landlord, propertyData) => {
    try {
      // Check if the landlord object exists and has the 'id' property
      if (!landlord || !landlord.id) {
        console.error('Error adding property: Landlord information is not available.');
        return;
      }
  
      // Include landlord's information in the property data
      const propertyDataWithLandlord = {
        ...propertyData,
        landlordId: landlord.id, // Assuming landlord has an id property
      };
  
      // Update headers to include 'Landlord-Id'
      const headers = {
        'Content-Type': 'application/json',
        'Landlord-Id': landlord.id, // Assuming landlord has an id property
      };
  
      // Make the fetch request with updated headers
      const response = await fetch('http://127.0.0.1:3000/properties', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(propertyDataWithLandlord),
      });
  
      if (response.ok) {
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Property Added!',
          text: 'Your property has been successfully added.',
        });
  
        // Redirect to the dashboard upon successful addition
        navigate('/dashboard');
      } else {
        // Handle the error response...
        console.error('Error adding property:', response.statusText);
  
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Error Adding Property',
          text: 'An error occurred while adding the property. Please try again later.',
        });
      }
    } catch (error) {
      // Handle other errors...
      console.error('Error adding property:', error.message);
  
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Error Adding Property',
        text: 'An error occurred while adding the property. Please try again later.',
      });
    }
  };
  

  const signUp = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/landlords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Sign-up successful:', data);

        setLandlord({ email: formData.email, username: data.username });

        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful!',
          text: 'Welcome, ' + data.username + '!',
        });

        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Sign-up failed:', errorData);

        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: 'Failed to sign up. Please try again.',
        });

        throw new Error('Sign-up failed');
      }
    } catch (error) {
      console.error('Sign-up failed:', error.message);

      Swal.fire({
        icon: 'error',
        title: 'Sign Up Failed',
        text: 'An error occurred. Please try again later.',
      });

      throw new Error('Sign-up failed');
    }
  };

  const logout = async () => {
    setLandlord(null);
  };
  
  const updatePropertyData = (newData) => {
    setPropertyData((prevData) => ({ ...prevData, ...newData }));
  };
  return (
    <LandlordContext.Provider value={{ landlord, login, logout, signUp, addProperty, updatePropertyData }}>
      {children}
    </LandlordContext.Provider>
  );
}
