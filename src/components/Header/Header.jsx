import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Логотип" className="logo-image" />
          <span className="company-name">ООО "НЦМ им. Т.Н. Праховой"</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#link1">Ссылка 1</a></li>
            <li><a href="#link2">Ссылка 2</a></li>
            <li><a href="#link3">Ссылка 3</a></li>
            <li><a href="#link4">Ссылка 4</a></li>
            <li><a href="#link5">Ссылка 5</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;