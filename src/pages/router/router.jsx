import React from 'react';
import { Routes, Route } from 'react-router';

import Homepage from '../home-page/home-page';
import AboutPage from '../about-page/about-page';
import ErrorPage from '../error-page/error-page';

const AllRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
