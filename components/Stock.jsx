/* eslint-disable prettier/prettier */
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Stock = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    axios.get('/financials.json')
      .then(response => setStockData(response.data))
      .catch(error => console.error('Error fetching the stock data:', error));
  }, []);

  if (!stockData) {
    return <div>Loading...</div>;
  }

  const { 
    ticker, 
    market_ap: marketCap, 
    shares_outstanding: sharesOutstanding, 
    pe_ratio: peRatio, 
    ps_ratio: psRatio, 
    pb_ratio: pbRatio, 
    peg_ratio: pegRatio, 
    current_ratio: currentRatio, 
    debt_to_equity_ratio: debtToEquityRatio, 
    eps, 
    analyst_estimates: analystEstimates, 
    news 
  } = stockData;

  return (
    <div>
      <h1>{ticker}</h1>
      <h2>Key Ratios</h2>
      <ul>
        <li>Market Cap: {marketCap}T</li>
        <li>Shares Outstanding: {sharesOutstanding}M</li>
        <li>P/E Ratio: {peRatio}</li>
        <li>P/S Ratio: {psRatio}</li>
        <li>P/B Ratio: {pbRatio}</li>
        <li>PEG Ratio: {pegRatio}</li>
        <li>Current Ratio: {currentRatio}</li>
        <li>Debt to Equity Ratio: {debtToEquityRatio}</li>
        <li>EPS: {eps}</li>
      </ul>
      <h2>Analyst Estimates</h2>
      <ul>
        {Object.entries(analystEstimates).map(([bank, rating]) => (
          <li key={bank}>{bank}: {rating}</li>
        ))}
      </ul>
      <h2>News</h2>
      <ul>
        {Object.entries(news).map(([article, details]) => (
          <li key={article}>
            <h3>{article}</h3>
            <p>Summary: {details.summary}</p>
            <p>Sentiment: {details.sentiment.value} (Score: {details.sentiment.score})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
