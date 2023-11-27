import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Menu />
      </div>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className='header'>
      <a
        href='https://www.goodpizzagreatpizza.com/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='gpgp_logo02.png'
          alt='good-pizza-great-pizza-logo'
        />
      </a>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData.map((pizza) => <Pizza pizzaProps={pizza} />);

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <div className='pizzas'>{pizzas}</div>
    </main>
  );
}

function Pizza({ pizzaProps }) {
  return (
    <div className='pizza'>
      <img
        src={pizzaProps.photoName}
        alt={pizzaProps.name}
      />
      <div>
        <h3>{pizzaProps.name}</h3>
        <p>{pizzaProps.ingredients}</p>
        <span>Price: {pizzaProps.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      <p>{new Date().toLocaleTimeString()}. We're currently open!</p>
      <p>
        This pizza menu is based on the game with the same title,{' '}
        <b>'Good Pizza, Great Pizza'</b>
      </p>
      <p>
        available on the Apple Store, Google Playstore, Nintendo Switch, and
        Steam.
      </p>
      <p>For more info, please check out:</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
