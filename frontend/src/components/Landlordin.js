import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLandlord } from '../context/LandlordContext'; // Updated import

function Landlordin() {
  const { login } = useLandlord(); // Use the useLandlord hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      // Handle successful login, redirection, etc.
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure, display error message, etc.
    }
  };

  return (
    <div>
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
                        Email
                      </label>
                      <input
                        id="user"
                        type="email"
                        className="input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                      <input id="check" type="checkbox" className="check" checked />
                      <label htmlFor="check">
                        <span className="icon"></span> Keep me Signed in
                      </label>
                    </div>
                    <div className="group">
                      <input
                        type="submit"
                        className="button"
                        value="Sign In"
                        onClick={handleLogin}
                      />
                    </div>
                    <div className="hr"></div>
                    <div className="foot">
                      <a href="#">Forgot Password?</a>
                    </div>
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

export default Landlordin;
