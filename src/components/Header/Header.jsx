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
            <li>
              <a 
                href="https://www.yandex.ru" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Яндекс
              </a>
            </li>
            <li>
              <a 
                href="https://fgis.gost.ru/fundmetrology/registry/4" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Гис Аршин
              </a>
            </li>
            <li>
              <a 
                href="https://all-pribors.ru" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                All Pribors
              </a>
            </li>
            <li>
              <a 
                href="https://yandex.ru/search/?text=калькулятор+онлайн+бесплатно" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Калькулятор
              </a>
            </li>
            <li>
              <a 
                href="https://translate.yandex.ru" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Переводчик
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;