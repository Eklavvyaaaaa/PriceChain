import React, { useContext } from 'react';
import './Navbar.css';
import arrow_icon from '../../assets/arrow_icon.png';
import logo from '../../assets/Logo.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { setCurrency } = useContext(CoinContext); // ✅ Fixed typo

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      }
      case 'inr': {
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      }
      default:{
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
        break;
    }
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
      <img src={logo} alt="Logo" className='logo' />
      </Link>
      <ul>
        <Link to={'/'}><li><a href="#">Home</a></li></Link>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
