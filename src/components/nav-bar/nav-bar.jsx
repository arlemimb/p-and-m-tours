/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../header/header';
import './nav-bar.css';

/* export default function Navbar() {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";

}
 */

const className = 'fixed-navbar';

function Navbar() {
  return (
    <>
      <div className={className}>
        <Header />
      </div>
    </>
  );
}

export default Navbar;
