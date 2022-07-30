import './style.scss';
import Logo from '../../assets/logo-pittri.svg';

function Header() {
  return (
    <header>
      <div className='header__container'>
        <img src={Logo} alt="Logo Pittri" className="header__logo" />
      </div>
    </header>
  );
}

export default Header;