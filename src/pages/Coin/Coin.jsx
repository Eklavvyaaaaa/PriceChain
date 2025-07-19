import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [days, setDays] = useState(7);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`,
          {
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-svj31CAHCriUxKk6nnqYTgik',
            },
          }
        );
        const data = await res.json();
        setCoinData(data);
      } catch (err) {
        console.error('Failed to fetch coin data:', err);
      }
    };

    const fetchHistoricalData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name.toLowerCase()}&days=${days}&interval=daily`,
          {
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-svj31CAHCriUxKk6nnqYTgik',
            },
          }
        );
        const data = await res.json();
        setHistoricalData(data);
      } catch (err) {
        console.error('Failed to fetch historical data:', err);
      }
    };

    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId, days]);

  if (!coinData || !historicalData) {
    return (
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    );
  }

  return (
    <div className='coin'>
      <div className="coin-name">
        <img src={coinData.image.large} alt={coinData.name} />
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
      </div>

      <div className="coin-chart">
        <div className="chart-header">
          <h3>Price Chart (Last {days} Days)</h3>
          <div className="timeframe-buttons">
            {[7, 30, 90].map((d) => (
              <button key={d} onClick={() => setDays(d)} className={days === d ? 'active' : ''}>
                {d}D
              </button>
            ))}
          </div>
        </div>
        <LineChart historicalData={historicalData} />
      </div>

      <div className='coin-info'>
        <div className="info-box">
          <p><b>Market Rank:</b></p>
          <p>{coinData.market_cap_rank}</p>
        </div>
        <div className="info-box">
          <p><b>Current Price:</b></p>
          <p>{currency.symbol}{coinData.market_data.current_price[currency.name.toLowerCase()].toLocaleString()}</p>
        </div>
        <div className="info-box">
          <p><b>Market Cap:</b></p>
          <p>{currency.symbol}{coinData.market_data.market_cap[currency.name.toLowerCase()].toLocaleString()}</p>
        </div>
        <div className="info-box">
          <p><b>24H High:</b></p>
          <p>{currency.symbol}{coinData.market_data.high_24h[currency.name.toLowerCase()].toLocaleString()}</p>
        </div>
        <div className="info-box">
          <p><b>24H Low:</b></p>
          <p>{currency.symbol}{coinData.market_data.low_24h[currency.name.toLowerCase()].toLocaleString()}</p>
        </div>
      </div>

      <div className='coin-details'>
        <p dangerouslySetInnerHTML={{ __html: coinData.description.en.split('. ')[0] + '.' }}></p>
      </div>

      <div className="historical-section">
        <h3>Price Trend</h3>
        <ul>
          {historicalData.prices.map((price, idx) => (
            <li key={idx}>
              Day {idx + 1}: {currency.symbol}{price[1].toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Coin;
