/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const Stock = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    axios
      .get("/financials.json")
      .then((response) => setStockData(response.data))
      .catch((error) => console.error("Error fetching the stock data:", error));
    console.log(stockData);
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
    news,
  } = stockData;

  return (
    <div className="flex flex-col w-[30%] h-full pr-10 border-primary border-large rounded-md bg-slate-500 bg-opacity-0">
      <div className="flex w full items-center"></div>
      <div className="flex w-full mt-6">
        <div className="flex flex-col w-full">
          <div className="">
            <span>Stock:</span>
            <h2>Key Ratios</h2>
          </div>
        </div>
        <div><span>{ticker}</span></div>
      </div>

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
          <li key={bank}>
            {bank}: {rating}
          </li>
        ))}
      </ul>
      <h2>News</h2>
      <ul>
        {Object.entries(news).map(([article, details]) => (
          <li key={article}>
            <h3>{article}</h3>
            <p>Summary: {details.summary}</p>
            <p>
              Sentiment: {details.sentiment.value} (Score:{" "}
              {details.sentiment.score})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
