// Импорт необходимых библиотек и файлов.
import React, { useState } from 'react'; // Импорт React и хука useState для управления состоянием компонента.
import "./LoginPopup.css"; // Импорт файла стилей для компонента LoginPopup.
import { assets } from '../../assets/assets'; // Импорт объекта assets из файла assets.js для использования изображений.

// Определение функционального компонента LoginPopup с принимаемым пропсом setShowLogin.
const LoginPopup = ({ setShowLogin }) => {
	// Использование useState для хранения текущего состояния (Login или Sign Up).
	const [currState, setCurrState] = useState('Login');

	// Возвращаем JSX, который будет отрисован в браузере.
	return (
		// Контейнер для всплывающего окна логина с классом login-popup.
		<div className='login-popup'>
			{/* Форма для ввода данных пользователя с классом login-popup-container. */}
			<form className="login-popup-container">
				{/* Заголовок всплывающего окна с названием текущего состояния (Login или Sign Up). */}
				<div className="login-popup-title">
					{/* Заголовок, который меняется в зависимости от текущего состояния. */}
					<h2>{currState}</h2>
					{/* Иконка крестика для закрытия всплывающего окна, при клике вызывается setShowLogin(false). */}
					<img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
				</div>
				{/* Контейнер для ввода данных пользователя. */}
				<div className="login-popup-inputs">
					{/* Условное отображение поля ввода имени, только для состояния Sign Up. */}
					{currState === 'Login' ? <></> : <input type="text" placeholder='Your name' required />}
					{/* Поле ввода email пользователя. */}
					<input type="email" placeholder='Your email' required />
					{/* Поле ввода пароля пользователя. */}
					<input type="password" placeholder='Your password' required />
				</div>
				{/* Кнопка для отправки формы, текст меняется в зависимости от текущего состояния. */}
				<button>{currState === 'Sign Up' ? "Create account" : "Login"}</button>
				{/* Условие согласия пользователя с условиями использования. */}
				<div className='login-popup-condition'>
					<input type="checkbox" required />
					{/* Текст с условиями использования. */}
					<p>By continuing, I agree to the terms of use and privacy policy</p>
				</div>
				{/* Условные ссылки для переключения между состояниями Login и Sign Up. */}
				{currState === 'Login'
					// Ссылка для перехода к состоянию Sign Up.
					? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
					// Ссылка для перехода к состоянию Login.
					: <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
				}
			</form>
		</div>
	)
}

// Экспорт компонента LoginPopup для его использования в других частях приложения.
export default LoginPopup;

// Импорт библиотек и файлов:

// Импортируем React и useState для создания функционального компонента и управления состоянием.
// Импортируем стили из файла LoginPopup.css.
// Импортируем изображения из объекта assets, чтобы использовать их в компоненте.
// Определение функционального компонента LoginPopup:

// Создаем функциональный компонент LoginPopup, который принимает пропс setShowLogin.
// Использование состояния с помощью useState:

// Используем хук useState для хранения текущего состояния всплывающего окна (Login или Sign Up).
// JSX разметка:

// Создаем всплывающее окно с классом login-popup.
// Форма содержит заголовок, поля ввода данных пользователя, кнопку, условие согласия и условные ссылки для переключения между состояниями.
// Динамическое изменение контента:

// Заголовок всплывающего окна и текст кнопки изменяются в зависимости от текущего состояния.
// Для переключения между состояниями используются условные ссылки, при клике на них меняется текущее состояние.
// Обработчики событий:

// При клике на иконку крестика вызывается функция setShowLogin(false), чтобы закрыть всплывающее окно.
// При клике на ссылки изменяется текущее состояние, что приводит к изменению контента всплывающего окна.