import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ title }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
