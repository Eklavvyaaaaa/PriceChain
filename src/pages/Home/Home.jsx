import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === '') {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list='coinlist'
            value={input}
            type="text"
            placeholder="Search Crypto..."
            required
          />
          <datalist id='coinlist'>
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type='submit'>Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {displayCoin.length === 0 ? (
          <div className="no-results">
            <p>No coins match your search.</p>
          </div>
        ) : (
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-row" key={index}>
              <p>{item.market_cap_rank}</p>
              <div className="coin-info">
                <img src={item.image} alt={item.name} />
                <p>{item.name} - {item.symbol.toUpperCase()}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
