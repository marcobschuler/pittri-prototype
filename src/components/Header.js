import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

function Header() {
  const [navActive, setNavActive] = useState('nav__menu');
  const [navToggler, setNavToggler] = useState('nav__toggler');

  function navToggle() {
    // navMenu class
    navActive === 'nav__menu' ? setNavActive('nav__menu nav__active') : setNavActive('nav__menu');

    // navToggler class
    navToggler === 'nav__toggler'
      ? setNavToggler('nav__toggler toggle')
      : setNavToggler('nav__toggler');
  }

  const navbarItems = [
    {
      id: 1,
      name: 'HOME',
      path: '/',
    },
    {
      id: 2,
      name: 'EVENTOS',
      path: '/eventos',
    },
    {
      id: 3,
      name: 'GALERIA',
      path: '/galeria',
    },
    {
      id: 4,
      name: 'SOBRE',
      path: '/sobre',
    },
    {
      id: 5,
      name: 'FEEDBACK',
      path: '/feedback',
    },
  ];

  return (
    <>
      <nav className='nav'>
        <div className='empty' />
        <img className='nav__logo' src={Logo} alt='Logo pittri' />
        <ul className={navActive}>
          {navbarItems.map(({ id, name, path }) => (
            <li className='nav__item' key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav__link nav__link--selected' : 'nav__link'
                }
                to={path}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div onClick={navToggle} className={navToggler}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </nav>
    </>
  );
}

export default Header;
