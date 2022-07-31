import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
// import PropTypes from 'prop-types';

// Import the pages
import About from './components/About/About';
import Cuisine from './components/Cuisine/Cuisine';

// import css
import './assets/App.css';

/* const App = ({ title }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
}; */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Cuisine" element={<Cuisine />} />
        </Routes>
        <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Cuisine">Cuisine</Link>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;
