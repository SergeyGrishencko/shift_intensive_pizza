import React, { useState } from 'react';
import './App.css';

import pizzaLogo from './assets/logo-images/pizza_logo.png';
import profileLogo from './assets/logo-images/profile.png';
import timeLogo from './assets/logo-images/Time.png';
import cartLogo from './assets/logo-images/Cart.png';
import moonLogo from './assets/logo-images/Moon.png';

import pepperoniPizza from './assets/pizza-images/pepperoni.png';
import cheezePizza from './assets/pizza-images/cheeze.png';
import doubleChickenPizza from './assets/pizza-images/double-chicken.png';

const PizzaModal = ({ pizza, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={pizza.image} className="pizza-image" alt={pizza.name} />
        <div className="pizza-details">
          <h2>{pizza.name}</h2>
          <p>{pizza.size}</p>
          <p>{pizza.description}</p>
          <div class="size-selector">
            <div class="size-option active">Маленькая</div>
            <div class="size-option">Средняя</div>
            <div class="size-option">Большая</div>
          </div>
          <p class="supplements">Добавить по вкусу</p>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

const PizzaBlock = ({ pizza }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="pizza-block">
      <img src={pizza.image} className="pizza-image" alt={pizza.name} />
      <p className="name-pizza"><b>{pizza.name}</b></p>
      <p className="description-pizza">{pizza.description}</p>
      <p className="cost-pizza"><b>{pizza.price}</b></p>
      <div className="rounded-box" onClick={openModal}>Выбрать</div>
      
      {isModalOpen && <PizzaModal pizza={pizza} onClose={closeModal} />}
    </div>
  );
};

const App = () => {
  const pizzas = [
    {
      id: 1,
      name: "Пепперони",
      size: "30 см, традиционное тесто",
      description: "Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус",
      price: "от 299 ₽",
      image: pepperoniPizza 
    },
    {
      id: 2,
      name: "Сырная",
      size: "30 см, традиционное тесто",
      description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
      price: "от 289 ₽",
      image: cheezePizza
    },
    {
      id: 3,
      name: "Двойной цыпленок",
      size: "30 см, традиционное тесто",  
      description: "Цыпленок, моцарелла, фирменный соус альфредо",
      price: "от 389 ₽",
      image: doubleChickenPizza
    }
  ];

  return (
      <div>
      <header>
        <div className="head-info">
          <div className="logo-text">
            <p className="name-company">
              ШИФТ<br />PIZZA
            </p>
          </div>
          <img 
            src={pizzaLogo} 
            className="logo-pizza" 
            style={{ float: 'right' }} 
            alt="Логотип пиццы" 
          />
          <div className="profile">
            <img src={profileLogo} className="profile-logo" alt="Профиль" />
            <p className="profile-text">Профиль</p>
            
            <img src={timeLogo} className="time-logo" alt="Заказы" />
            <p className="profile-text">Заказы</p>
            
            <img src={cartLogo} className="cart-logo" alt="Корзина" />
            <p className="profile-text">Корзина</p>
            
            <img src={moonLogo} className="moon-img" alt="Ночной режим" />
          </div>
        </div>
      </header>
      <main>
        <hr className="horizontal-line" />
        <div className="pizzas">
          {pizzas.map(pizza => (
            <PizzaBlock key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;