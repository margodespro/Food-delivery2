// Импорт необходимых библиотек и компонентов.
import React, { useContext, useState } from 'react'; // Импортируем React, useContext и useState из библиотеки React.
import './Cart.css'; // Импортируем стили для компонента Cart.
import { StoreContext } from '../../context/StoreContext'; // Импортируем контекст StoreContext для использования состояния и функций контекста.
import { useNavigate } from 'react-router-dom'; // Импортируем хук useNavigate из библиотеки react-router-dom для навигации.

const Cart = () => {
	// Извлекаем состояние и функции из контекста StoreContext.
	const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
	// Используем useNavigate для перенаправления пользователя.
	const navigate = useNavigate();

	// Используем useState для управления состоянием промокода.
	const [promoCode, setPromoCode] = useState('');

	// Если данные еще не доступны, отображаем сообщение о загрузке.
	if (!food_list || !cartItems) {
		return <div>Loading...</div>;
	}

	// Инициализируем переменные для хранения количества товаров и общей суммы корзины.
	let itemCount = 0;
	let cartTotal = 0;

	// Перебираем список продуктов и считаем количество и общую сумму товаров в корзине.
	food_list.forEach((item) => {
		if (cartItems[item._id] > 0) {
			itemCount += cartItems[item._id];
			cartTotal += item.price * cartItems[item._id];
		}
	});

	// Обработчик для применения промокода.
	const handleApplyPromoCode = () => {
		// Здесь можно добавить логику для отправки промокода на сервер и обработки ответа.
		console.log('Promo code submitted:', promoCode);
	};

	// Обработчик для перехода к оформлению заказа.
	const handleProceedToCheckout = () => {
		navigate('/order'); // Перенаправляем пользователя на страницу оформления заказа.
		console.log('Proceed to checkout');
	};

	return (
		<div className='cart'>
			<div className="cart-items">
				<div className="cart-items-title">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<hr />
				{/* Перебираем список продуктов и отображаем только те, которые есть в корзине */}
				{food_list.map((item) => {
					if (cartItems[item._id] > 0) {
						return (
							<div className='cart-items-item' key={item._id}>
								<img src={item.image} alt={item.name} />
								<p>{item.name}</p>
								<p>${item.price}</p>
								<p>{cartItems[item._id]}</p>
								<p>${item.price * cartItems[item._id]}</p>
								<button onClick={() => removeFromCart(item._id)}>Remove</button>
							</div>
						);
					}
					return null;
				})}
			</div>

			<div className="cart-bottom">
				<div className="cart-total">
					<h2>Cart Total</h2>
					<div>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>{itemCount}</p> {/* Отображаем количество товаров */}
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Free</p>
							<p>$2</p> {/* Стоимость доставки */}
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>${cartTotal.toFixed(2)}</b> {/* Общая сумма корзины */}
						</div>
					</div>
					<button onClick={handleProceedToCheckout}>Proceed To Checkout</button> {/* Кнопка перехода к оформлению заказа */}
				</div>
				<div className="cart-promocode">
					<p>If you have a promo code, enter it here</p>
					<div className="cart-promocode-input">
						<input
							type="text"
							placeholder="Promo code"
							value={promoCode}
							onChange={(e) => setPromoCode(e.target.value)} // Обновляем состояние промокода при изменении ввода
						/>
						<button onClick={handleApplyPromoCode}>Submit</button> {/* Кнопка отправки промокода */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart; // Экспортируем компонент Cart по умолчанию.

// Импорт библиотек и компонентов:
// Импортируем необходимые библиотеки (React, useContext, useState, useNavigate) и компоненты (StoreContext, Cart.css).

// Использование контекста и состояния:
// Используем контекст StoreContext для получения данных о корзине, списка продуктов и функции удаления из корзины.
// Используем useState для управления состоянием промокода.

// Обработка состояния загрузки:
// Если данные food_list или cartItems еще не доступны, отображаем сообщение "Loading...".

// Инициализация переменных для подсчета:
// Инициализируем переменные itemCount и cartTotal для хранения количества товаров и общей суммы корзины соответственно.

// Подсчет товаров и общей суммы:
// Перебираем список продуктов и считаем количество и общую сумму товаров в корзине.

// Обработчики событий:
// handleApplyPromoCode: Функция для обработки промокода. В данном случае просто выводит промокод в консоль.
// handleProceedToCheckout: Функция для перехода к оформлению заказа. Перенаправляет пользователя на страницу /order.

// JSX-разметка компонента:
// Разметка корзины с отображением товаров, их количества, цены и общей суммы.
// Разметка для ввода промокода и кнопка для его отправки.
// Кнопка для перехода к оформлению заказа.

// Экспорт компонента:
// Компонент Cart экспортируется по умолчанию, чтобы его можно было использовать в других частях приложения.