"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function Page() {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState();
  const handleBuy = () => {
    const phone = "2348036210152";
    const message = encodeURIComponent(`Hello, I want to order`);
    

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };
  return (
    <div className=" bg-secondary w-full h-screen p-4 font-bold flex flex-col items-center justify-center">
      <h1>Exchange Page</h1>
      <div className="grid grid-cols-2 w-3/4 border-2 bg-amber-100 h-[70%]">
        <div className="grid grid-rows-3">
          <h1>Buy Coin</h1>
          <h1>swap coin</h1>
          <h1>Sell Coin</h1>
        </div>
        <div>
                  <form  className="space-y-5">
          <div>
            <label htmlFor="currency" className="block text-lg font-medium">
              Currency
            </label>
            <input
              type="string"
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-lg font-medium">
              Amount
            </label>
            <input
              type="number"
              id="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          </form>
          <button
            onClick={handleBuy}
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            Buy on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
