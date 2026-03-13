"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Page() {
  const [currency, setCurrency] = useState("");
  const [fromThisCurrency, setFromThisCurrency] = useState("");
  const [toThisCurrency, setToThisCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("sell");

  const phone = "2348036210152";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError("Failed to fetch coin data");
      }
    };

    fetchCoins();
  }, []);

  const validateCurrency = () => {
    const supportedCoins = coins.map((coin) => coin.symbol.toUpperCase());

    if (!supportedCoins.includes(currency.toUpperCase())) {
      setError("Sorry, we do not support that currency.");
      return false;
    }

    setError("");
    return true;
  };

  const openWhatsApp = (text) => {
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleBuy = () => {
    if (!validateCurrency()) return;

    openWhatsApp(`Hello, I want to buy ${amount} ${currency}`);
  };

  const handleSell = () => {
    if (!validateCurrency()) return;

    openWhatsApp(`Hello, I want to sell ${amount} ${currency}`);
  };

  const handleSwap = () => {
    if (!validateCurrency()) return;

    openWhatsApp(`Hello, I want to exchange ${amount} ${currency}`);
  };

  const Form = ({ buttonText, action }) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        action();
      }}
      className="space-y-5"
    >
      {error && <p className="text-red-500 text-lg">{error}</p>}

      <div>
        <label className="block text-lg font-medium">Currency</label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full border rounded-lg p-2 mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-2 mt-1"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
      >
        {buttonText}
      </button>
    </form>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "buy":
        return <Form buttonText="Buy on WhatsApp" action={handleBuy} />;

      case "swap":
        return (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-5"
            >
              {error && <p className="text-red-500 text-lg">{error}</p>}

              <div>
                <label className="block text-lg font-medium">
                  {" "}
                  from this Currency
                </label>
                <input
                  type="text"
                  value={fromThisCurrency}
                  onChange={(e) => setFromThisCurrency(e.target.value)}
                  className="w-full border rounded-lg p-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium">
                  to this currency
                </label>
                <input
                  type="text"
                  value={toThisCurrency}
                  onChange={(e) => setToThisCurrency(e.target.value)}
                  className="w-full border rounded-lg p-2 mt-1"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
              >
               SWAP
              </button>
            </form>
          </>
        );

      default:
        return <Form buttonText="Sell on WhatsApp" action={handleSell} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-[#0F2D27] to-[#2c5364]  w-full min-h-screen p-4 font-bold"
    >
      <h1 className="text-3xl mb-6">Exchange Page</h1>

      <div className="w-full md:w-3/4 mx-auto border bg-[#1B3358] shadow-lg shadow min-h-[70%] grid md:grid-cols-2">
        <div className="flex md:flex-col justify-around md:justify-start gap-4 p-5">
          <button
            onClick={() => setActiveTab("sell")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "sell" ? "bg-gray-300" : "bg-white"
            }`}
          >
            Sell
          </button>

          <button
            onClick={() => setActiveTab("buy")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "buy" ? "bg-gray-300" : "bg-white"
            }`}
          >
            Buy
          </button>

          <button
            onClick={() => setActiveTab("swap")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "swap" ? "bg-gray-300" : "bg-white"
            }`}
          >
            Exchange
          </button>
        </div>

        <div className="p-5">{renderTabContent()}</div>
      </div>
    </motion.div>
  );
}

export default Page;
