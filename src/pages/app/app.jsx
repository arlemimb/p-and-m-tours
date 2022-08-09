import React from 'react';
import { ToastContainer } from 'react-toastify';
import Favicon from 'react-favicon';
import AllRoutes from '../router/router';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import fIco from '../../assets/images/favicon.ico';
// import PropTypes from 'prop-types';

// import css

/* const App = ({ title }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
}; */

const App = () => {
  return (
    <div className="App" id="scrool">
      <Favicon url={fIco} />
      <AllRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
