import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data';
import './index.css';
import { lightBg, darkBg } from './bgModesPath';

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
      <button
        onClick={toggleMode}
        className='dark'
        id='mode'
      >
        🌙
      </button>
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
      <p>We're currently open!</p>
      <button className='btn'>Order</button>
    </header>
  );
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaProps={pizza}
            key={pizza.name}
          />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizzaProps }) {
  return (
    <li className='pizza'>
      <img
        src={pizzaProps.photoName}
        alt={pizzaProps.name}
      />
      <div>
        <h3>{pizzaProps.name}</h3>
        <p>{pizzaProps.ingredients}</p>
        <span>Price: {pizzaProps.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <p>
        This pizza menu is based on the game with the same title,{' '}
        <b>'Good Pizza, Great Pizza'</b>
      </p>
      <p>
        available on the Apple Store, Google Playstore, Nintendo Switch, and
        Steam.
      </p>
      <p>
        <b>For more info, please check out:</b>
      </p>
      <div className='credits-logo'>
        <a
          href='https://www.goodpizzagreatpizza.com/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='gpgp_logo02.png'
            alt='gpgp-logo'
          />
        </a>
        <a
          href='https://github.com/pj-pj-pj/pizza-menu'
          target='_blank'
          rel='noreferrer'
          className='github-link'
        >
          <img
            src='github-logo.png'
            alt='github-logo'
          />
        </a>
      </div>
    </footer>
  );
}

function toggleMode() {
  const body = document.querySelector('body');
  const button = document.querySelector('#mode');
  const container = document.querySelector('.container');
  const footer = document.querySelector('.footer');
  const githubLogo = document.querySelector('.github-link');
  if (button.classList.contains('dark')) {
    body.style.backgroundImage = `url(${darkBg})`;
    body.style.color = '#f7f2e9';

    container.style.backgroundColor = '#24153d';
    footer.style.backgroundColor = '#24153d';
    githubLogo.style.filter = 'invert(100%)';

    button.textContent = '☀️';
    button.classList.add('light');
    button.classList.remove('dark');
  } else {
    body.style.backgroundImage = `url(${lightBg})`;
    body.style.color = '#252525';

    container.style.backgroundColor = '#f7f2e9';
    footer.style.backgroundColor = '#f7f2e9';
    githubLogo.style.filter = 'invert(0)';

    button.textContent = '🌙';
    button.classList.add('dark');
    button.classList.remove('light');
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
