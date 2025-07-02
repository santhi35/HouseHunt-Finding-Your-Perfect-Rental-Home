import React from "react";
import { Link } from "react-router-dom";
// import './navbar.css';

function Navbar() {
  return (
    // Main Navigation
    <header>
      {/* Jumbotron */}
      <div className="p-3 text-center bg-primary border-bottom">
        <div className="container">
          <div className="row">
            {/* Left elements */}
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <Link to="/home" className="ms-md-2" style={{ fontSize: '24px', color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                <span style={{ color: 'black' }}>House</span>
                <span style={{ color: 'white' }}>Hunt</span>
              </Link>
            </div>


            {/* Left elements */}

            {/* Center elements */}
            <div className="col-md-4">
              <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" />
                <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search"></i></span>
              </form>
            </div>
            {/* Center elements */}

            {/* Right elements */}
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="d-flex">
                {/* Cart */}
                <a className="text-reset me-3" href="#">
                  <span><i className="fas fa-shopping-cart"></i></span>
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>

               
                

                {/* Languages */}
                <div className="dropdown">
                  <a className="text-reset dropdown-toggle me-3 hidden-arrow" href="#" id="navbarDropdown" role="button"
                    data-mdb-toggle="dropdown" aria-expanded="false">
                    <i className="flag flag-united-kingdom m-0"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#"><i className="flag flag-Kenya"></i>English
                        <i className="fa fa-check text-success ms-2"></i></a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {/* Other language items */}
                  </ul>
                </div>

                {/* User */}
                <div className="dropdown">
                  <a className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                    id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
                      alt="" loading="lazy" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">My profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right elements */}
          </div>
        </div>
      </div>
      {/* Jumbotron */}

      <nav className="navbar navbar-expand-lg navbar-light bg-black">
  {/* Container wrapper */}
  <div className="container justify-content-center justify-content-md-between">
    {/* Left links */}
    <ul className="navbar-nav flex-row align-items-center">
      <li className="nav-item me-2 me-lg-0">
        {/* Updated link for "Home" */}
        <Link
          className="nav-link btn shadow-0 p-0 me-3"
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            transition: 'color 0.3s',
          }}
        >
          <span>Home</span>
        </Link>
      </li>
      <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
        {/* Updated link for "About" */}
        <Link
          className="nav-link"
          to="/about"
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            transition: 'color 0.3s',
          }}
        >
          About
        </Link>
      </li>


    </ul>
    {/* Left links */}
    <Link
      to="/login"
      className="btn btn-outline-primary"
      data-mdb-ripple-color="dark"
      type="button"
      style={{
        fontWeight: 'bold',
        fontSize: '18px',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        transition: 'color 0.3s',
      }}
    >
      Login
    </Link>
  </div>
  {/* Container wrapper */}
</nav>



      {/* Sidenav */}
      

      {/* Background image */}
      
    </header>
    // Main Navigation
  );
}

export default Navbar;
