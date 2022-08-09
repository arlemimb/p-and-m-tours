import React, { Fragment } from 'react';
import Navbar from '../../components/nav-bar/nav-bar';
import PageTitle from '../../components/page-title/page-title';
import Footer from '../../components/footer/footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Destination from '../../components/destination/destination';

const DestinationPage = () => {
  return (
    <>
      <Navbar />
      <PageTitle pageTitle="Destination" pagesub="Destination" />
      <Destination />
      <Footer />
      <Scrollbar />
    </>
  );
};
export default DestinationPage;
