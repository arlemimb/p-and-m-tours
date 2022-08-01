import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
  );
};

export default Header;
