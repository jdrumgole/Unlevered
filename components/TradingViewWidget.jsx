/* eslint-disable prettier/prettier */
// TradingViewWidget.jsx
'use client'
import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        if (window.TradingView) {
          widgetRef.current = new window.TradingView.widget({
           
            symbol: 'NASDAQ:AAPL',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: 'tradingview_chart'
          });
        }
      };

      document.body.appendChild(script);

      // Clean up the script on component unmount
      return () => {
        document.body.removeChild(script);
        if (widgetRef.current) {
          widgetRef.current.remove();
          widgetRef.current = null;
        }
      };
    }
  }, []);

  return (
    <div className="tradingview-widget-container px-20 py-20 items-center w-[100%] pt-0 bg-green-300 bg-opacity-0" >
      <div id="tradingview_chart"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com" >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;


