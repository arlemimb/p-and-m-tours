import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/images/pmt-logo.svg';
import Logo from '../../assets/images/pmt-logo.png';
// import MobileMenu from '../mobile-menu/mobile-menu';
import './header.css';

const logoAlt = 'P & M Tours Logo';

const Header = () => {
  /* const SubmitHandler = (e) => {
    e.preventDefault();
  }; */

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // <div className={`header-style-3 ${props.hClass}`}>

  // const Header = () => {
  return (
    <>
      <div className="middle-header">
        <div className="header-style-2">
          <div className="container-fluid">
            <div className="header-content">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                  <div className="logo">
                    <Link onClick={ClickHandler} to="/" title="">
                      <img src={Logo} alt={logoAlt} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-8 d-lg-block d-none ms-auto">
                  {/* <nav>
                    <ul>
                      <li>
                        <Link to="/about" title="">
                          About
                        </Link>
                      </li>
                    </ul>
                  </nav> */}
                </div>
                <div className="col-xl-3 get-q">
                  {/* search todo */}
                </div>
                <div className="col-xl-1 col-lg-1 col-md-6 col-sm-6 col-6">
                  {/* <nav>
                    <ul>
                      <li>
                        <Link to="/about" title="">
                          About
                        </Link>
                      </li>
                    </ul>
                  </nav> */}
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                  {/* <MobileMenu /> */}
                </div>
              </div>

              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
