import React, { useState, useEffect } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import property4 from '../images/property4.avif'
import manProperty from '../images/manProperty.avif'

function Landing() {
  const [counters, setCounters] = useState({
    count1: 0,
    count2: 100,
    count3: 0,
    count4: 0
  });

  useEffect(() => {
    function counter(id, start, end, duration) {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));
      const timer = setInterval(() => {
        current += increment;
        setCounters(prevCounters => ({
          ...prevCounters,
          [id]: current
        }));
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
  }, []);

  return (
    <div>
      <section id="home" className="top-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <h1>Your Dream Home Awaits!</h1>
              <p>Discover the perfect place for you and your family. Start your house hunting journey with us.</p>
              <div className="mt-4">
                <Link to="/landlordin" className="main-btn">
                  Sign Up as a Homeowner <i className="fas fa-home ps-3"></i>
                </Link>
                
              </div>
            </div>
            <div className="col-lg-7 col-md-6 text-md-end mt-md-0 mt-4">
              <img
                src={property4}
                alt="House"
                className="img-fluid"
                style={{ width: '100%', maxWidth: '400px', height: '400px' }}
              />
            </div>

          </div>
        </div>
      </section>

      <section id="counter">
        <section class="counter-section">
          <div class="container">
            <div class="row text-center">
                  <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count1">{counters.count1}</span>+
                </h2>
                <p>Tenants </p>
              </div>
              <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count2">{counters.count2}</span>+
                </h2>
                <p>Properties</p> 
              </div>
              <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count3">{counters.count3}</span>+
                </h2>
                <p>Landlord</p>
              </div>
              <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count4">{counters.count4}</span>+
                </h2>
                <p>LOCATIONS</p>
              </div>
     
            </div>
          </div>
        </section>
      </section>

      <section id="story">
        <div className="story-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="image-column">
                  <img
                    src={manProperty}
                    alt="Home"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-column">
                  <h2>Find Your Comfort Home With Us</h2>
                  <p>Explore a variety of homes that suit your preferences. We're here to make your house hunting experience enjoyable and stress-free.</p>
                  <button className="main-btn mt-3">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
