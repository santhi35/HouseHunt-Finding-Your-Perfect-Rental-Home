import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const headerBlueStyle = {
    background: 'linear-gradient(135deg, #fe2929, #ffb3c5)',
    paddingBottom: '50px',
    fontFamily: "'Source Sans Pro', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px', // Adjust the paddingTop to control the space from the top
  };

  const imageStyle = {
    maxWidth: '100%', // Adjust the maxWidth as needed
    height: 'auto',
  };

  return (
    <div>
      <div className="header-blue" style={headerBlueStyle}>

        <div className="container hero ">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
              <h1>Hunt Your Dream Home with HouseHunt</h1>
              <p>
                Welcome to HouseHunt, where your dream home awaits! We invite you to explore our curated selection of properties that cater to your unique needs and preferences. Whether you're looking for a cozy apartment, a spacious house, or a stylish condo, HouseHunt has the perfect options for you.

                Our team of real estate experts is dedicated to helping you find the ideal home that suits your lifestyle. Discover a seamless and enjoyable house-hunting experience with HouseHunt.

                Start your journey today and make your dream home a reality!
                <br />
              </p>
              <button className="btn btn-light btn-lg action-button" type="button">
                <Link to="/listing">
                  Explore Properties <i className="fa fa-long-arrow-right ml-2"></i>
                </Link>
              </button>
            </div>
            <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div className="iphone-mockup">
                <img
                  className="device"
                  src="https://i.imgur.com/bkCeTu7.png"
                  alt="Device"
                  style={imageStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
