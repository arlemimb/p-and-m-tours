// import React, { Fragment } from 'react';
import React from 'react';
import Navbar from '../../components/nav-bar/nav-bar';
import Hero from '../../components/hero/hero';
import Destination from '../../components/destination/destination';
import Footer from '../../components/footer/footer';
/* import SearchSection from '../../components/SearchSection'
import About from '../../components/about'
import RoomSection from '../../components/RoomSection'
import VideoSection from '../../components/videoSection'
import Testimonial from '../../components/Testimonial'
import BlogSection from '../../components/BlogSection'

import Scrollbar from '../../components/scrollbar'
import vdimg from '../../images/banner.png' */

/* import hero1 from '../../assets/images/slider/slide-1.jpg';
import hero2 from '../../assets/images/slider/slide-2.jpg';
import hero3 from '../../assets/images/slider/slide-3.jpg'; */

const HomePage = () => {
  /* const heroContent = [
    {
      heroClass: 'hero-style-1',
      heroImg1: hero1,
      heroImg2: hero2,
      heroImg3: hero3,
    },
  ];
 */

  return (
    <>
      <Navbar />
      {/* <Hero content={heroContent} /> */}
      <Hero />
      <Destination />

      <Footer />
      {/*
      <SearchSection />
      <About />
      <Destination />
      <RoomSection />
      <VideoSection vdImg={vdimg} />
      <Testimonial />
      <BlogSection />
      
      <Scrollbar />
  */}
    </>
  );
};
export default HomePage;
