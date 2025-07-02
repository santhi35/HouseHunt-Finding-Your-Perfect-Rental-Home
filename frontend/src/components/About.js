import React from 'react';
import vision from '../images/vision.jpg';
import whyus from '../images/whyus.jpg';
import rentaal from '../images/rentaal.avif';

function About() {
  return (
    <div>
      <div
        style={{
          background: `url(${rentaal})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '400px',
        }}
        className="jumbotron bg-cover text-white"
      >
        <div className="container py-5 text-center">
          <h1 className="display-4 font-weight-bold text-white">HouseHunt</h1>
          <p className="font-italic mb-0 text-dark" style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Explore the essence of your dream home with our expertise.
          </p>
          <p className="font-italic text-dark" style={{ fontSize: '20px', fontWeight: 'bold' }}>
            We're dedicated to offering unique solutions that align with your essence and aspirations.
          </p>
          <a href="#" role="button" className="btn btn-primary px-5">
            Explore Homes
          </a>
        </div>
      </div>

      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className="fs-5 mb-2 text-secondary text-uppercase">About</h3>s
              <h2 className="display-5 mb-4">
                At HouseHunt, we prioritize pushing boundaries, embracing the unknown, and fostering a culture of continuous
                learning.
              </h2>
              <button type="button" className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">
                Connect Now
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0">
            <div className="col-12 col-lg-6">
              <div className="card bg-light p-3 m-0">
                <div className="row gy-3 gy-md-0 align-items-md-center">
                  <div className="col-md-5">
                    <img
                      src={whyus}
                      className="img-fluid rounded-start"
                      alt="Why Choose Us? Image"
                      style={{ objectFit: 'cover', height: '100%' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-0">
                      <h2 className="card-title h4 mb-3">Why Choose Us?</h2>
                      <p className="card-text lead">
                        With years of experience and deep industry knowledge, we have a proven track record of success and
                        are pushing ourselves to stay ahead of the curve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card bg-light p-3 m-0">
                <div className="row gy-3 gy-md-0 align-items-md-center">
                  <div className="col-md-5">
                    <img
                      src={vision}
                      className="img-fluid rounded-start"
                      alt="Visionary Team Image"
                      style={{ objectFit: 'cover', height: '100%' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-0">
                      <h2 className="card-title h4 mb-3">Visionary Team</h2>
                      <p className="card-text lead">
                        With a team of visionary engineers, developers, and creative minds, we embark on a journey to
                        transform complex challenges into ingenious technological solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
