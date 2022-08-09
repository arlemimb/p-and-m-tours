import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/images/pmt-logo.svg';
/* import ft1 from '../../images/footer/img-1.jpg'
import ft2 from '../../images/footer/img-2.jpg' */
import Logo from '../../assets/images/pmt-logo-2.png';
import './footer.css';

/* const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
*/

const Footer = () => {
  const current = new Date();
  const date = current.getFullYear();

  return (
    <>
      <footer className="wpo-site-footer">
        <div className="wpo-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid">
                <div className="logo widget-title">
                  <img src={Logo} alt="logo" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 custom-grid" />
            </div>
          </div>
        </div>

        <div className="wpo-lower-footer">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 col-md-6 col-12">
                <div className="term">
                  {/* <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Privicy Policy
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Terms & Condition
                      </Link> 
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Cookies
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-12">
                <p className="copyright">
                  &copy;
                  {date}
                  &#43; Arlemi Ltd. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
