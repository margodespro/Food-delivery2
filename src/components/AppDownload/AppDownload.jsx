// Импортируем React библиотеку. Это необходимо для использования JSX и функциональных компонентов.
import React from 'react';

// Импортируем файл стилей для компонента AppDownload. Это позволяет нам стилизовать данный компонент.
import "./AppDownload.css";

// Импортируем объект assets из файла assets.js, который находится в директории assets.
// Предположительно, этот объект содержит пути к изображениям, которые мы будем использовать.
import { assets } from '../../assets/assets';

// Определяем функциональный компонент AppDownload.
function AppDownload() {
	// Возвращаем JSX, который будет отрисован в браузере.
	return (
		// Основной контейнер для компонента с классом app-download и идентификатором app-download.
		<div className='app-download' id='app-download'>
			{/* Абзац с призывом к скачиванию приложения Tomato. */}
			<p>For Better Experience Download <br />Tomato App</p>

			{/* Контейнер для изображений с иконками магазинов приложений. */}
			<div className="app-download-platforms">
				{/* Изображение Play Store, путь к которому берется из объекта assets. */}
				<img src={assets.play_store} alt="" />
				{/* Изображение App Store, путь к которому берется из объекта assets. */}
				<img src={assets.app_store} alt="" />
			</div>
		</div>
	);
}

// Экспортируем компонент AppDownload по умолчанию, чтобы его можно было импортировать и использовать в других частях приложения.
export default AppDownload;


// Импорт библиотек и файлов:
// import React from 'react';
// import "./AppDownload.css";
// import { assets } from '../../assets/assets';
// React нужен для использования JSX и создания компонентов.
// AppDownload.css содержит стили для компонента.
// assets из файла assets.js содержит пути к изображениям (иконкам магазинов приложений).

// Функциональный компонент AppDownload:
// function AppDownload() {
// Это функциональный компонент, который возвращает JSX для отображения.