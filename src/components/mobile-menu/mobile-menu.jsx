/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import './mobile-menu.css';

const menus = [
  {
    id: 1,
    title: 'Home',
    link: '/home',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
];

const MobileMenu = () => {
  /* const state = {
    isMenuShow: false,
    isOpen: 0,
  }; */

  /* const menuHandler = () => ({
    isMenuShow: !state.isMenuShow,
  });

  const setIsOpen = (id) => () => ({
    isOpen: id === state.isOpen ? 0 : id,
  }); */

  /*  render() { */
  // const { isMenuShow, isOpen } = state;

  const isMenuShow = 0;

  /* const ClickHandler = () => {
    window.scrollTo(10, 0);
  }; */

  return (
    <>
      <div>
        <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="showmenu">
          {' '}
          {/* onClick={menuHandler}> */}
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    </>
  );
};
/* }; */

export default MobileMenu;
