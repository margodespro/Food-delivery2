// Импортируем необходимые библиотеки и файлы.
import React from 'react'; // Импортируем React.
import "./Footer.css"; // Импортируем файл стилей для компонента Footer.
import { assets } from '../../assets/assets'; // Импортируем объект assets из файла assets.js для использования изображений.

// Определяем функциональный компонент Footer.
function Footer() {
	// Возвращаем JSX, который будет отрисован в браузере.
	return (
		// Основной контейнер для компонента с классом footer и идентификатором footer.
		<div className='footer' id='footer'>
			{/* Контейнер для основного контента футера */}
			<div className="footer-content">
				{/* Левая часть футера с логотипом, описанием и социальными иконками */}
				<div className="footer-content-left">
					{/* Логотип */}
					<img src={assets.logo} alt="" />
					{/* Описание */}
					<p>
						Optimize your time and indulge in the pleasure of great food.
						Order delivery today and immerse yourself in a world of true
						gastronomic delight!
					</p>
					{/* Социальные иконки */}
					<div className="footer-social-icons">
						<img src={assets.facebook_icon} alt="" />
						<img src={assets.twitter_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" />
					</div>
				</div>

				{/* Центральная часть футера с меню компании */}
				<div className="footer-content-center">
					<h2>COMPANY</h2>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>

				{/* Правая часть футера с контактной информацией */}
				<div className="footer-content-right">
					<h2>GET IN TOUCH</h2>
					<ul>
						<li>+1 (555) 123-4567</li>
						<li>tomatolover@example.com</li>
					</ul>
				</div>
			</div>

			{/* Горизонтальная линия для отделения основной части футера от нижней */}
			<hr />
			{/* Авторские права */}
			<p className="footer-copyright">
				Copyright 2024 © Tomato.com - All Right Reserved.
			</p>
		</div>
	)
}

// Экспортируем компонент Footer по умолчанию, чтобы его можно было импортировать и использовать в других частях приложения.
export default Footer;

// Импорт библиотек и файлов:
// import React from 'react';
// import "./Footer.css";
// import { assets } from '../../assets/assets';
// React для создания компонента.
// Footer.css содержит стили для компонента.
// assets содержит изображения для использования в компоненте.

// Функциональный компонент Footer:
// function Footer() {
// Это функциональный компонент, который не принимает пропсы.

