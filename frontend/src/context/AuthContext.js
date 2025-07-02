import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      // Implement the login logic using your backend API
      // Send a request to http://127.0.0.1:3000/login with email and password
      // Assume your API returns a user object if login is successful

      // Replace the fetch with your actual login logic
      const response = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);

        // Show a success SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
          confirmButtonColor: '#28a745',
        }).then(() => {
          // Redirect to the home page after the SweetAlert is closed
          navigate('/home');
        });
      } else {
        // Handle unsuccessful login
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
          confirmButtonColor: '#dc3545',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle other errors if necessary
    }
  };

  const signup = async (username, password, email) => {
    try {
      // Implement the signup logic using your backend API
      // Send a request to http://127.0.0.1:3000/users with username, password, and email
      // Assume your API returns the newly created user object if signup is successful

      // Replace the fetch with your actual signup logic
      const response = await fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        const newUser = await response.json();
        setUser(newUser);

        // Show a success SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful',
          text: 'You have successfully registered!',
          confirmButtonColor: '#28a745',
        }).then(() => {
          // Redirect to the login page after the SweetAlert is closed
          navigate('/login');
        });
      } else {
        // Handle unsuccessful signup
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed',
          text: 'Registration failed. Please try again.',
          confirmButtonColor: '#dc3545',
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      // Handle other errors if necessary
    }
  };

  const logout = () => {
    // Implement the logout logic if needed
    // Clear user data and update the user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
