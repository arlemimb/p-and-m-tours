/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
import dsn1 from '../../assets/images/destination/img-6.jpg';
import dsn2 from '../../assets/images/destination/img-7.jpg';
import dsn3 from '../../assets/images/destination/img-8.jpg';
import dsn4 from '../../assets/images/destination/img-9.jpg';
import dsn5 from '../../assets/images/destination/img-10.jpg';
import dsn6 from '../../assets/images/destination/img-11.jpg';
import dsn7 from '../../assets/images/destination/img-12.jpg';

import './destination.css';

// class Destination2 extends Component {

const Destination = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const destination = [
    {
      DImg: dsn1,
      Title: "Xi'an, China",
      price: '$750',
      Date: '11 Jun 2021 - 22 Jun 2021',
      per: 'Per Day',
      link: '/visit',
    },
    {
      DImg: dsn2,
      Title: 'Guangzhou, China',
      price: '$835',
      Date: '11 Jun 2021 - 22 Jun 2021',
      per: 'Per Day',
      link: '/visit',
    },
    {
      DImg: dsn3,
      Title: 'Shaanxi, China',
      price: '$870',
      Date: '11 Jun 2021 - 22 Jun 2021',
      per: 'Per Day',
      link: '/visit',
    },
    {
      DImg: dsn4,
      Title: 'Kunming, China',
      price: '$653',
      Date: '11 Jun 2021 - 22 Jun 2021',
      per: 'Per Day',
      link: '/visit',
    },
    {
      DImg: dsn5,
      Title: 'Shanghai, China',
      price: '$750',
      Date: '11 Jun 2021 - 22 Jun 2021',
      per: 'Per Day',
      link: '/visit',
    },
    {
      DImg: dsn6,
      Title: 'Dali, China',
      price: '$750',
      Date: '11 Jun 2021 - 22 Jun 2021',
      per: 'Per Day',
      link: '/visit',
    },
    {
      DImg: dsn7,
      Title: 'Lijiang, China',
      price: '$750',
      Date: '11 Jun 2021 - 22 Jun 2021',
      per: 'Per Day',
      link: '/visit',
    },
  ];

  /* const ClickHandler = () => {
    window.scrollTo(10, 0);
  }; */

  // const bothObjects = {...settings,...destination};

  return (
    <>
      <div className="destination-service section-padding">
        <div className="container">
          <div className="col-12">
            <div className="wpo-section-title text-center">
              <span>Populer Destinations</span>
              <h2>Choose Your Vacation</h2>
            </div>
          </div>
          <div className="destination-carousel">
            <Slider {...sliderSettings}>
              {destination.map((dest) => (
                <div className="item" key={dest}>
                  <div className="destination-item">
                    <div className="destination-img">
                      <img src={dest.DImg} alt={dest.Title} />
                    </div>
                    <div className="destination-content">
                      <div className="content-left">
                        <h5>
                          {dest.Title}
                          {/* <Link onClick={ClickHandler} to={dest.link}>
                            {dest.Title}
                          </Link> */}
                        </h5>
                        <small>{dest.Date}</small>
                      </div>
                      <div className="content-right">
                        <h5>{dest.price}</h5>
                        <span>{dest.per}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
