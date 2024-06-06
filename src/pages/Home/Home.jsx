// Импортируем необходимые библиотеки и компоненты.
import React, { useState } from 'react'; // Импортируем React и useState из библиотеки React.
import "./Home.css"; // Импортируем стили для компонента Home.
import Header from '../../components/Header/Header'; // Импортируем компонент Header.
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'; // Импортируем компонент ExploreMenu.
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'; // Импортируем компонент FoodDisplay.
import AppDownload from '../../components/AppDownload/AppDownload'; // Импортируем компонент AppDownload.

const Home = () => {
    // Используем useState для управления состоянием выбранной категории.
    const [category, setCategory] = useState("All"); // Инициализируем состояние category значением "All".

    return (
        <div>
            <Header /> {/* Включаем компонент Header */}
						<ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} /> {/* Включаем компонент FoodDisplay, передаем текущую категорию */}
            <AppDownload /> {/* Включаем компонент AppDownload */}
        </div>
    );
}

export default Home; // Экспортируем компонент Home по умолчанию.

// Импорт библиотек и компонентов:
// Импортируем React и useState из библиотеки React для создания компонента и управления состоянием.
// Импортируем стили для компонента Home.
// Импортируем необходимые дочерние компоненты: Header, ExploreMenu, FoodDisplay и AppDownload.

// Создание компонента Home:
// Объявляем компонент Home как функциональный компонент.

// Использование состояния:
// Используем хук useState для управления состоянием category. Изначально category установлено в значение "All".
// category: Состояние, хранящее текущую выбранную категорию меню.
// setCategory: Функция для изменения состояния category.

// Возвращаемая разметка (JSX):
// Компонент Header: Включаем компонент Header для отображения заголовка страницы.
// Компонент ExploreMenu: Включаем компонент ExploreMenu и передаем ему текущую категорию (category) и функцию для изменения категории (setCategory).
// Компонент FoodDisplay: Включаем компонент FoodDisplay и передаем ему текущую категорию (category). Этот компонент отображает список продуктов в зависимости от выбранной категории.
// Компонент AppDownload: Включаем компонент AppDownload для отображения ссылки на скачивание мобильного приложения.

// Экспорт компонента:
// Экспортируем компонент Home по умолчанию, чтобы его можно было использовать в других частях приложения.
