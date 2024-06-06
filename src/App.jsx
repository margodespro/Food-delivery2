// Импортируем необходимые библиотеки и компоненты.
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'; // Импортируем компонент Navbar.
import { Route, Routes } from 'react-router-dom'; // Импортируем компоненты для маршрутизации.
import Home from './pages/Home/Home'; // Импортируем страницу Home.
import Cart from './pages/Cart/Cart'; // Импортируем страницу Cart.
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'; // Импортируем страницу PlaceOrder.
import Footer from './components/Footer/Footer'; // Импортируем компонент Footer.
import LoginPopup from './components/LoginPopup/LoginPopup'; // Импортируем компонент LoginPopup.

const App = () => {
	// Используем хук useState для управления состоянием показа всплывающего окна входа в систему.
	const [showLogin, setShowLogin] = useState(false);

	return (
		<>
			{/* Условно рендерим компонент LoginPopup, если showLogin установлено в true. */}
			{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

			<div className='app'>
				{/* Рендерим компонент Navbar и передаем setShowLogin как пропс. */}
				<Navbar setShowLogin={setShowLogin} />
				<Routes>
					{/* Определяем маршруты для приложения */}
					<Route path='/' element={<Home />} /> {/* Главная страница */}
					<Route path='/cart' element={<Cart />} /> {/* Страница корзины */}
					<Route path='/order' element={<PlaceOrder />} /> {/* Страница оформления заказа */}
				</Routes>
			</div>
			{/* Рендерим компонент Footer */}
			<Footer />
		</>
	);
};

export default App; // Экспортируем компонент App по умолчанию.


// Импорт библиотек и компонентов:
// Импортируем React и хук useState из библиотеки React.
// Импортируем компонент Navbar из файла Navbar.
// Импортируем компоненты Route и Routes из react-router-dom для управления маршрутами.
// Импортируем страницы Home, Cart, PlaceOrder и компонент Footer из соответствующих файлов.
// Импортируем компонент LoginPopup из файла LoginPopup.

// Использование хука useState:
// Создаем состояние showLogin с начальным значением false. Это состояние будет использоваться для управления показом всплывающего окна входа в систему.

// Возвращаемая разметка (JSX):
// Условно рендерим компонент LoginPopup, если showLogin установлено в true. Передаем setShowLogin как пропс в LoginPopup.
// Создаем основной контейнер приложения (<div className='app'>).
// Внутри контейнера рендерим компонент Navbar и передаем функцию setShowLogin как пропс, чтобы Navbar мог управлять состоянием показа всплывающего окна входа.
// Определяем маршруты с помощью компонента Routes. Каждый маршрут связывает путь URL с соответствующим компонентом страницы:
// '/' рендерит компонент Home.
// '/cart' рендерит компонент Cart.
// '/order' рендерит компонент PlaceOrder.
// В конце рендерим компонент Footer вне контейнера приложения, чтобы он отображался на всех страницах.

// Экспорт компонента:
// Экспортируем компонент App по умолчанию, чтобы его можно было использовать в других частях приложения.