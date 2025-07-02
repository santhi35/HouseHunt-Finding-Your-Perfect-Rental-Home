import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLandlord } from '../context/LandlordContext'; // Update the import path

function Landlordup() {
  const { signUp } = useLandlord(); // Use the signUp function from the LandlordContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Include logic to handle sign up with the form data
      const formData = {
        username,
        password,
        email,
        bio,
        phone_number,
        image,
      };

      // Call the signUp function from LandlordContext
      await signUp(formData);

      // After successful sign-up, navigate to Landlordin.js
      navigate('/landlordin');
    } catch (error) {
      // Handle the error if needed
      console.error('Sign-up error:', error.message);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
              <Link to="/landlordin" className="tab">
                Login
              </Link>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <Link to="/landlordup" className="tab">
                Sign Up
              </Link>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="bio" className="label">
                      Bio
                    </label>
                    <input
                      id="bio"
                      type="text"
                      className="input"
                      placeholder="Enter your bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone_number" className="label">
                      Phone Number
                    </label>
                    <input
                      id="phone_number"
                      type="text"
                      className="input"
                      placeholder="Enter your phone number"
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="image" className="label">
                      Image URL
                    </label>
                    <input
                      id="image"
                      type="text"
                      className="input"
                      placeholder="Enter your image URL"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" checked />
                    <label htmlFor="check">
                      <span className="icon"></span> Keep me Signed in
                    </label>
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      value="Sign Up"
                      onClick={handleSignUp}
                    />
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    <label htmlFor="tab-1">Already Member?</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landlordup;
