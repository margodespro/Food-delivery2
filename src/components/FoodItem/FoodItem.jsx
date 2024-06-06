// Импортируем необходимые библиотеки и файлы.
import React, { useContext } from 'react'; // Импортируем React и useContext для использования контекста.
import './FoodItem.css'; // Импортируем файл стилей для компонента FoodItem.
import { assets } from '../../assets/assets'; // Импортируем объект assets из файла assets.js для использования изображений.
import { StoreContext } from '../../context/StoreContext'; // Импортируем StoreContext для доступа к глобальному состоянию.

// Определяем функциональный компонент FoodItem, который принимает props: id, name, price, description, image.
const FoodItem = ({ id, name, price, description, image }) => {
	// Используем useContext для получения состояния корзины и функций для добавления и удаления элементов из корзины.
	const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

	// Возвращаем JSX, который будет отрисован в браузере.
	return (
		// Основной контейнер для компонента с классом food-item.
		<div className='food-item'>
			{/* Контейнер для изображения элемента еды и кнопок добавления/удаления из корзины */}
			<div className="food-item-img-container">
				{/* Изображение блюда */}
				<img className='food-item-image' src={image} alt={name} />

				{/* Условное отображение: если элемента нет в корзине, показываем кнопку добавления */}
				{!cartItems[id] ? (
					<img
						className='add' // Класс для стилизации кнопки добавления
						onClick={() => addToCart(id)} // Обработчик клика для добавления элемента в корзину
						src={assets.add_icon_white} // Изображение иконки добавления
						alt="Add to Cart"
					/>
				) : (
					// Если элемент есть в корзине, показываем счетчик с кнопками добавления и удаления
					<div className='food-item-counter'>
						<img
							onClick={() => removeFromCart(id)} // Обработчик клика для удаления элемента из корзины
							src={assets.remove_icon_red} // Изображение иконки удаления
							alt="Remove from Cart"
						/>
						<p>{cartItems[id]}</p> {/* Количество элементов в корзине */}
						<img
							onClick={() => addToCart(id)} // Обработчик клика для добавления элемента в корзину
							src={assets.add_icon_green} // Изображение иконки добавления
							alt="Add to Cart"
						/>
					</div>
				)}
			</div>

			{/* Контейнер для информации о блюде */}
			<div className="food-item-info">
				{/* Название блюда и (опционально) рейтинг */}
				<div className="food-item-name-rating">
					<p>{name}</p>
					<img src={assets.rating_starts} alt=''/>
					{/* Отображение рейтинга, если доступно в assets */}
					{/* <img src={assets.rating_stars} alt="Rating" /> */}
				</div>
				<p className="food-item-desc">{description}</p> {/* Описание блюда */}
				<p className="food-item-price">${price}</p> {/* Цена блюда */}
			</div>
		</div>
	);
};
// Экспортируем компонент FoodItem по умолчанию, чтобы его можно было импортировать и использовать в других частях приложения.
export default FoodItem;


// Импорт библиотек и файлов:
// import React, { useContext } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';
// React и useContext для использования контекста.
// FoodItem.css содержит стили для компонента.
// assets содержит изображения для использования в компоненте.
// StoreContext для доступа к глобальному состоянию приложения.

// Функциональный компонент FoodItem:
// const FoodItem = ({ id, name, price, description, image }) => {
// Компонент принимает несколько пропсов: id, name, price, description, image.

// Использование useContext для получения данных из контекста:
// const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
// cartItems содержит текущие элементы в корзине.
// addToCart функция для добавления элементов в корзину.
// removeFromCart функция для удаления элементов из корзины.