"use client";
import { Minimize2, Maximize2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

function Chart({ initialSymbol = "BINANCE:BTCUSDT" }) {
  const { resolvedTheme } = useTheme();
  const [currentSymbol, setCurrentSymbol] = useState(initialSymbol);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [coins, setCoins] = useState([]);
  const [error] = useState(null);

  const chartContainerRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
        );
        const data = await res.json();
        setCoins(data.slice(0, 100));
      } catch (err) {
        console.error("Error fetching coins:", err);
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    if (window.TradingView) {
      setIsScriptLoaded(true); // eslint-disable-line react-hooks/set-state-in-effect
      return;
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  useEffect(() => {
    if (!isScriptLoaded || !chartContainerRef.current) return;

    if (widgetRef.current) {
      widgetRef.current.remove();
    }

    chartContainerRef.current.innerHTML = "";

    widgetRef.current = new window.TradingView.widget({
      autosize: true,
      symbol: currentSymbol,
      container_id: chartContainerRef.current.id,
      interval: "1",
      timezone: "Etc/UTC",
      theme: resolvedTheme === "dark" ? "dark" : "light",
      style: "1",
      locale: "en",
      toolbar_bg: resolvedTheme === "dark" ? "#06142E" : "#f1f3f6",
      enable_publishing: false,
    });
  }, [isScriptLoaded, currentSymbol, resolvedTheme]);

  const toggleFullscreen = () => setIsFullScreen(!isFullScreen);

  const symbolOnly = currentSymbol.split("/")[0];
  const selectedCoin = coins.find(
    (coin) => coin.symbol.toUpperCase() === symbolOnly.toUpperCase()
  );


  return (
    <div
      className={`bg-primary border border-secondary h-screen rounded-2xl shadow-xl p-4
      ${isFullScreen ? "fixed inset-0 w-full h-screen z-50" : "relative"}`}
    >
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="text-lg text-foreground font-semibold">
            {selectedCoin ? selectedCoin.name : "Loading..."}
            {error && <span className="text-red-500">{error}</span>}
          </p>
          <h2 className="text-sm font-bold text-foreground opacity-70">({currentSymbol})</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-secondary text-foreground rounded-md hover:opacity-80 text-sm"
          >
            {isFullScreen ? (
              <>
                <Minimize2 className="w-4 h-4" /> Exit
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4" /> Fullscreen
              </>
            )}
          </button>
        </div>
      </div>


      <div className="mt-4 w-full h-[60vh] lg:h-[75vh] relative bg-white rounded-md overflow-hidden">
        <div
          ref={chartContainerRef}
          id="tradingview-chart"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}

export default Chart;
