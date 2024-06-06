import React, { useContext, useState } from 'react'; // Импортируем React и хук useState.
import { Link, NavLink } from 'react-router-dom'; // Импортируем компоненты Link и NavLink для маршрутизации.
import { StoreContext } from '../../context/StoreContext'; // Импортируем контекст StoreContext.
import { assets } from '../../assets/assets'; // Импортируем объект assets из файла assets.js для использования изображений.
import './Navbar.css'; // Импортируем файл стилей для компонента Navbar.

const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName); // Устанавливаем активный пункт меню.
  };

  const isMenuActive = (menuName) => (menuName === activeMenu ? 'active' : '');

  return (
    <div className='navbar'>
      {/* Обернем логотип в компонент Link для перехода на главную страницу */}
      <Link to="/" onClick={() => handleMenuClick("home")}>
        <img src={assets.logo} alt="logo" className='logo' />
      </Link>
      <ul className='navbar-menu'>
        <Link to="/" onClick={() => handleMenuClick("home")} className={isMenuActive("home")}>Home</Link>
        <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={isMenuActive("menu")}>Menu</a>
        <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={isMenuActive("mobile-app")}>Mobile app</a>
        <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={isMenuActive("contact-us")}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search-icon' className='navbar-search-icon' />
        <div className='navbar-cart-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt='basket-icon' />
          </Link>
					<div className={getTotalCartAmount()===0?"":"dot"}></div>
          
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
				
      </div>
    </div>
  );
};

export default Navbar;
