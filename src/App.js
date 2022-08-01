import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import PropTypes from 'prop-types';

// Import the pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Cuisine from './components/Cuisine/Cuisine';

// import css
import './assets/App.css';

// Import the Header
import Header from './components/Header/Header';

/* const App = ({ title }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
}; */

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Cuisine" element={<Cuisine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
