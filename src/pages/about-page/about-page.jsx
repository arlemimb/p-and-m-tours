import React, { Fragment } from 'react';
import Navbar from '../../components/nav-bar/nav-bar';
import PageTitle from '../../components/page-title/page-title';
import About from '../../components/about/about';
import Footer from '../../components/footer/footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const AboutPage = () => {
  return (
    <>
      <>
        <Navbar />
        <PageTitle pageTitle="About Us" pagesub="About" />
        <About />
        <Footer />
        <Scrollbar />
      </>
    </>
  );
};
export default AboutPage;
