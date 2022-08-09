import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './scrollbar.css';

const Scrollbar = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              <AnchorLink href="#scrool">
                <i className="ti-arrow-up" />
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Scrollbar;
