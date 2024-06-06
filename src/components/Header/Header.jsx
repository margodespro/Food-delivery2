// Импортируем необходимые библиотеки и файлы.
import React from 'react'; // Импортируем React для создания компонента.
import './Header.css'; // Импортируем файл стилей для компонента Header.

// Определяем функциональный компонент Header.
const Header = () => {
	// Возвращаем JSX, который будет отрисован в браузере.
	return (
		// Основной контейнер для компонента с классом header.
		<div className='header'>
			{/* Внутренний контейнер для содержимого хедера */}
			<div className="header-contents">
				{/* Заголовок */}
				<h2>Gastronomic Delights</h2>
				{/* Описание */}
				<p>
					Welcome to the world of exquisite cuisine delivered right to your door!
					We offer a unique experience that combines quality, convenience,
					and variety in one food delivery service.
				</p>
				{/* Кнопка для просмотра меню */}
				<button>View Menu</button>
			</div>
		</div>
	);
};

// Экспортируем компонент Header по умолчанию, чтобы его можно было импортировать и использовать в других частях приложения.
export default Header;
