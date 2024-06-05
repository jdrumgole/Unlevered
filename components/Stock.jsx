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
    <div className="flex flex-col w-[30%] h-full mb-10  pr-10 border-purple-500 border-medium rounded-sm bg-slate-500 bg-opacity-0">
      <div className="flex w-full mx-3  mr-6 mt-6">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">Stock/Price:</span> 
            <div className="text-sm  font-medium flex items-center rounded uppercase bg-opacity-25">
              <span className="text-3xl">{ticker}</span>
            </div>
        </div>
        <div><span className="pr-0 font-large text-5xl ">194.64</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-6">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">Market Cap:</span> 
        </div>
        <div><span>{marketCap}</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">Shares Outstanding:</span> 
        </div>
        <div><span>{sharesOutstanding}</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">EPS:</span> 
        </div>
        <div><span>{eps}</span></div>
      </div>

      <div className="flex w-full mx-3  mr-6 mt-6">
        <div className="flex flex-col w-full">
            <span className="text-lg capitalize">Key Ratios:</span> 
        </div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">Current Ratio:</span> 
        </div>
        <div><span>{currentRatio}</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">Debt To Equity Ratio:</span> 
        </div>
        <div><span>{debtToEquityRatio}</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">P/E Ratio:</span> 
        </div>
        <div><span>{peRatio}</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">P/S Ratio:</span> 
        </div>
        <div><span>{psRatio}</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">P/B Ratio:</span> 
        </div>
        <div><span>{pbRatio}</span></div>
      </div>

      <div className="flex w full items-center"></div>
      <div className="flex w-full mx-2 mt-1">
        <div className="flex flex-col w-full">
            <span className="text-sm capitalize text-gray-500">PEG Ratio:</span> 
        </div>
        <div><span>{pegRatio}</span></div>
      </div>

      <div className="flex w-full mx-3  mr-6 mt-6">
        <div className="flex flex-col w-full">
            <span className="text-lg capitalize">Analyst Estimates:</span> 
        </div>
      </div>

  
      
       
     


      
    
      
    </div>
  );
};

export default Stock;
