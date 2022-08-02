import React from 'react';

import image1 from '../../assets/images/2017-05-10-10-05-10a-2-1280x712.png';
import image2 from '../../assets/images/2017-05-18-17-42-21-2000x1333.jpg';
import image3 from '../../assets/images/2017-05-14-11-53-8-2000x1333.jpg';

const slide1 = {
  backgroundImage: image1,
};

const slide2 = {
  backgroundImage: image2,
};

const slide3 = {
  backgroundImage: image3,
};

const HeroSlider = () => {
  return (
    <>
      <aside id="fh5co-hero" className="js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={slide1}>
              <div className="overlay-gradient" />
              <div className="container">
                <div className="col-md-12 col-md-offset-0 text-center slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <p>
                        <span>Walk... See... Learn!</span>
                      </p>
                      <h2>
                        Unique walking tours at a price money cannot
                        buy!!
                      </h2>
                      {/* <p>
                        <a
                          href="#"
                          className="btn btn-primary btn-lg"
                        >
                          Book Now
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={slide2}>
              <div className="overlay-gradient" />
              <div className="container">
                <div className="col-md-12 col-md-offset-0 text-center slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <p>
                        <span>Experience the Food</span>
                      </p>
                      <h2>
                        A land where the exotic is truly edible with
                        flavours you have never tasted before!!
                      </h2>
                      {/* <p>
                        <a
                          href="#"
                          className="btn btn-primary btn-lg"
                        >
                          Book Now
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={slide3}>
              <div className="overlay-gradient" />
              <div className="container">
                <div className="col-md-12 col-md-offset-0 text-center slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <p>
                        <span>Marvel at the History</span>
                      </p>
                      <h2>Expect the unexpected</h2>
                      {/* <p>
                        <a
                          href="#"
                          className="btn btn-primary btn-lg"
                        >
                          Book Now
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default HeroSlider;
