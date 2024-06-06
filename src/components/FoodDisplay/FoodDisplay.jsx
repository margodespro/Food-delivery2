// Импортируем необходимые библиотеки и файлы.
import React, { useContext } from 'react'; // Импортируем React и useContext для использования контекста.
import './FoodDisplay.css'; // Импортируем файл стилей для компонента FoodDisplay.
import { StoreContext } from '../../context/StoreContext'; // Импортируем StoreContext для доступа к глобальному состоянию.
import FoodItem from '../FoodItem/FoodItem'; // Импортируем компонент FoodItem, который будет использоваться для отображения каждого элемента еды.

// Определяем функциональный компонент FoodDisplay, который принимает props: category.
const FoodDisplay = ({ category }) => {
	// Используем useContext для получения списка еды из StoreContext.
	const { food_list } = useContext(StoreContext);
	// Возвращаем JSX, который будет отрисован в браузере.
	return (
		// Основной контейнер для компонента с классом food-display и идентификатором food-display.
		<div className='food-display' id='food-display'>
			{/* Заголовок для секции с блюдами */}
			<h2>Top dishes for you</h2>
			{/* Контейнер для списка блюд */}
			<div className="food-display-list">
				{/* Проходим по массиву food_list и для каждого элемента проверяем категорию */}
				{food_list.map((item) => {
					// Проверяем, соответствует ли категория текущему элементу или если категория 'All'
					if (category === 'All' || category === item.category) {
						return (
							// Используем компонент FoodItem для отображения информации о каждом элементе еды.
							<FoodItem
								key={item._id} // Уникальный ключ для каждого элемента
								id={item._id} // Идентификатор элемента
								name={item.name} // Имя блюда
								description={item.description} // Описание блюда
								price={item.price} // Цена блюда
								image={item.image} // Изображение блюда
							/>
						);
					}
					// Если категория не соответствует, возвращаем null (ничего не отображаем).
					return null;
				})}
			</div>
		</div>
	);
};

// Экспортируем компонент FoodDisplay по умолчанию, чтобы его можно было импортировать и использовать в других частях приложения.
export default FoodDisplay;


// Импорт библиотек и файлов:
// import React, { useContext } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';
// React и useContext для использования контекста.
// FoodDisplay.css содержит стили для компонента.
// StoreContext для доступа к глобальному состоянию.
// FoodItem для отображения информации о каждом элементе еды.

// Функциональный компонент FoodDisplay:
// const FoodDisplay = ({ category }) => {
// Это функциональный компонент, который принимает один пропс: category.

// Использование useContext для получения данных из контекста:
// const { food_list } = useContext(StoreContext);
// useContext используется для получения food_list из StoreContext
