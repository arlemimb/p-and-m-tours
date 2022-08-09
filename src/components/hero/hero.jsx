/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hero.css';

/* class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    }; */

/* const settings = () => {
      dots: true,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true
    } */

/* const settings = () => {}; */

//  {...settings()}

import image1 from '../../assets/images/slider/slide-1.png';
import image2 from '../../assets/images/slider/slide-2.jpg';
import image3 from '../../assets/images/slider/slide-3.jpg';

const heroClass = 'hero-style-2';

/* const Hero = (props) => {
  const content = props; */

const Hero = () => {
  /* Hero.propTypes = {
    heroClass: PropTypes.string.isRequired,
    heroImg1: PropTypes.string.isRequired,
    heroImg2: PropTypes.string.isRequired,
    heroImg3: PropTypes.string.isRequired,
  }; */

  const settings = {
    dots: true,
    arrows: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  return (
    <>
      <section className={`hero ${heroClass}`}>
        <div className="hero-slider">
          <Slider {...settings}>
            <div className="slide">
              <div
                className="slide-inner"
                style={{
                  backgroundImage: `url(${image1})`,
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                      <div className="slide-title">
                        <h2>Walk... See... Learn!</h2>
                      </div>
                      <div className="slide-subtitle">
                        <p>
                          Unique walking tours at a price money cannot
                          buy!!
                        </p>
                      </div>
                      {/* <div className="btns">
                        <Link to="/room" className="theme-btn">
                          Book A Room
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="slide-inner"
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                      <div className="slide-title">
                        <h2>Experience the Food</h2>
                      </div>
                      <div className="slide-subtitle">
                        <p>
                          A land where the exotic is truly edible with
                          flavours you have never tasted before!!
                        </p>
                      </div>
                      {/* <div className="btns">
                        <Link to="/room" className="theme-btn">
                          Book A Room
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="slide-inner"
                style={{
                  backgroundImage: `url(${image3})`,
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                      <div className="slide-title">
                        <h2>Marvel at the History</h2>
                      </div>
                      <div className="slide-subtitle">
                        <p>Expect the unexpected!</p>
                      </div>
                      {/* <div className="btns">
                        <Link to="/room" className="theme-btn">
                          Book A Room
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Hero;
