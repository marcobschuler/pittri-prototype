import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-pittri.svg';
import './style.scss';

function Header() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  function navToggle() {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

    // Icon Toggler
    icon === 'nav__toggler' ? setIcon('nav__toggler toggle') : setIcon('nav__toggler');
  }

  const navbarItems = [
    {
      id: 1,
      name: 'Section 1',
      path: '/',
    },
    {
      id: 2,
      name: 'Section 2',
      path: '/events',
    },
    {
      id: 3,
      name: 'Section 3',
      path: '/gallery',
    },
    {
      id: 4,
      name: 'Section 4',
      path: '/about',
    }
  ];

  return (
    <>
      <header className='header'>
        <div className='header__banner'>
          <img src={Logo} alt='Logo pittri' />
        </div>
      </header>
      
      <nav className='nav'>
        <input className='nav__search' type='text' placeholder='Procurar' />
        <ul className={active}>
          {navbarItems.map(({ id, name, path }) => (
            <li className='nav__item' key={id}>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav__link nav__link--selected' : 'nav__link')}
                to={path}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
