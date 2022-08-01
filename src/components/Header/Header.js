import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/images/pmt-logo.svg';

const Header = () => {
  return (
    <>
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div className="container">
            <div className="nav-header">
              {/* <a
                href="#"
                className="js-fh5co-nav-toggle fh5co-nav-toggle"
              >
                <i />
  </a> */}
              <h1 id="fh5co-logo">
                <Link to="/">LOGO</Link>
              </h1>
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="Cuisine">Cuisine</Link>
                  </li>
                  <li>
                    <Link to="About">About</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
