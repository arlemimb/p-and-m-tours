import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import PropTypes from 'prop-types';

// import css
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/luxe/css/superfish.css';
import './assets/luxe/css/bootstrap-datepicker.min.css';
import './assets/luxe/css/cs-select.css';
import './assets/luxe/css/cs-skin-border.css';
import './assets/luxe/css/themify-icons.css';
import './assets/luxe/css/flexslider.css';
import './assets/App.css';

// Import the pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Cuisine from './components/Cuisine/Cuisine';

// Import the Header
import Header from './components/Header/Header';

/* const App = ({ title }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
}; */

function App() {
  return (
    <div className="App" id="fh5co-wrapper">
      <div id="fh5co-page">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="About" element={<About />} />
            <Route exact path="Cuisine" element={<Cuisine />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
