// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// function Page() {
//   const [currency, setCurrency] = useState("");
//   const [fromThisCurrency, setFromThisCurrency] = useState("");
//   const [toThisCurrency, setToThisCurrency] = useState("");
//   const [amount, setAmount] = useState("");
//   const [coins, setCoins] = useState([]);
//   const [error, setError] = useState("");
//   const [activeTab, setActiveTab] = useState("sell");

//   const phone = "2348036210152";

//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const res = await fetch("https://api.coingecko.com/api/v3/coins/list");
//         const data = await res.json();
//         setCoins(data);
//       } catch (err) {
//         setError("Failed to fetch coin data");
//       }
//     };

//     fetchCoins();
//   }, []);

//   const validateCurrency = () => {
//     const supportedCoins = coins.map((coin) => coin.symbol.toUpperCase());

//     if (!supportedCoins.includes(currency.toUpperCase())) {
//       setError("Sorry, we do not support that currency.");
//       return false;
//     }

//     setError("");
//     return true;
//   };

//   const openWhatsApp = (text) => {
//     const message = encodeURIComponent(text);
//     window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
//   };

//   const handleBuy = () => {
//     if (!validateCurrency()) return;

//     openWhatsApp(`Hello, I want to buy ${amount} ${currency}`);
//   };

//   const handleSell = () => {
//     if (!validateCurrency()) return;

//     openWhatsApp(`Hello, I want to sell ${amount} ${currency}`);
//   };

//   const handleSwap = () => {
//     if (!validateCurrency()) return;

//     openWhatsApp(`Hello, I want to exchange ${amount} ${currency}`);
//   };

//   const Form = ({ buttonText, action }) => (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         action();
//       }}
//       className="space-y-5"
//     >
//       {error && <p className="text-red-500 text-lg">{error}</p>}

//       <div>
//         <label className="block text-lg font-medium">Currency</label>
//         <input
//           type="text"
//           value={currency}
//           onChange={(e) => setCurrency(e.target.value)}
//           className="w-full border rounded-lg p-2 mt-1"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-lg font-medium">Amount</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full border rounded-lg p-2 mt-1"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
//       >
//         {buttonText}
//       </button>
//     </form>
//   );

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "buy":
//         return <Form buttonText="Buy on WhatsApp" action={handleBuy} />;

//       case "swap":
//         return (
//           <>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//               }}
//               className="space-y-5"
//             >
//               {error && <p className="text-red-500 text-lg">{error}</p>}

//               <div>
//                 <label className="block text-lg font-medium">
//                   {" "}
//                   from this Currency
//                 </label>
//                 <input
//                   type="text"
//                   value={fromThisCurrency}
//                   onChange={(e) => setFromThisCurrency(e.target.value)}
//                   className="w-full border rounded-lg p-2 mt-1"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-lg font-medium">
//                   to this currency
//                 </label>
//                 <input
//                   type="text"
//                   value={toThisCurrency}
//                   onChange={(e) => setToThisCurrency(e.target.value)}
//                   className="w-full border rounded-lg p-2 mt-1"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
//               >
//                SWAP
//               </button>
//             </form>
//           </>
//         );

//       default:
//         return <Form buttonText="Sell on WhatsApp" action={handleSell} />;
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50, scale: 0.9 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gradient-to-b from-[#0F2D27] to-[#2c5364]  w-full min-h-screen p-4 font-bold"
//     >
//       <h1 className="text-3xl mb-6">Exchange Page</h1>

//       <div className="w-full md:w-3/4 mx-auto border bg-[#1B3358] shadow-lg shadow min-h-[70%] grid md:grid-cols-2">
//         <div className="flex md:flex-col justify-around md:justify-start gap-4 p-5">
//           <button
//             onClick={() => setActiveTab("sell")}
//             className={`px-4 py-2 rounded-lg ${
//               activeTab === "sell" ? "bg-gray-300" : "bg-white"
//             }`}
//           >
//             Sell
//           </button>

//           <button
//             onClick={() => setActiveTab("buy")}
//             className={`px-4 py-2 rounded-lg ${
//               activeTab === "buy" ? "bg-gray-300" : "bg-white"
//             }`}
//           >
//             Buy
//           </button>

//           <button
//             onClick={() => setActiveTab("swap")}
//             className={`px-4 py-2 rounded-lg ${
//               activeTab === "swap" ? "bg-gray-300" : "bg-white"
//             }`}
//           >
//             Exchange
//           </button>
//         </div>

//         <div className="p-5">{renderTabContent()}</div>
//       </div>
//     </motion.div>
//   );
// }

// export default Page;
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRightLeft, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Coins,
  Loader2
} from "lucide-react";

function Page() {
  const [currency, setCurrency] = useState("");
  const [fromThisCurrency, setFromThisCurrency] = useState("");
  const [toThisCurrency, setToThisCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("sell");
  const [loading, setLoading] = useState(true);

  const phone = "2348036210152";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        
        setLoading(true);
     const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
        );
        const data = await response.json();
        setCoins(data);
      } catch {
        setError("Failed to fetch coin data");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const validateCurrency = (symbol) => {
    if (!symbol) {
      setError("Please enter a currency.");
      return false;
    }
    const supportedCoins = coins.map((coin) => coin.symbol.toUpperCase());

    if (!supportedCoins.includes(symbol.toUpperCase())) {
      setError(`Sorry, we do not support ${symbol}.`);
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
    if (!validateCurrency(currency)) return;

    openWhatsApp(`Hello, I want to buy ${amount} ${currency}`);
  };

  const handleSell = () => {
    if (!validateCurrency(currency)) return;

    openWhatsApp(`Hello, I want to sell ${amount} ${currency}`);
  };

  const handleSwap = () => {
    if (!validateCurrency(fromThisCurrency)) return;
    if (!validateCurrency(toThisCurrency)) return;

    openWhatsApp(`Hello, I want to exchange ${amount} ${fromThisCurrency} for ${toThisCurrency}`);
  };

  const Form = ({ buttonText, action }) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        action();
      }}
      className="space-y-5"
    >
      {error && <p className="text-red-500 font-semibold bg-red-100 dark:bg-red-900/30 p-3 rounded-lg border border-red-200 dark:border-red-800">{error}</p>}

      <div>
        <label className="flex items-center gap-2 text-lg font-medium mb-1">
          <Coins size={18} className="text-primary" />
          Currency
        </label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full border border-border bg-background rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder="e.g. BTC"
          list="coins-list"
          required
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-lg font-medium mb-1">
          <Search size={18} className="text-primary" />
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-border bg-background rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder="0.00"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white font-bold px-6 py-4 rounded-xl w-full shadow-lg"
      >
        {buttonText}
      </button>

    </form>
  );

  const CoinsDataList = () => (
    <datalist id="coins-list">
      {coins.slice(0, 10).map((coin) => (
        <option key={coin.id} value={coin.symbol.toUpperCase()}>
          {coin.name}
        </option>
      ))}
    </datalist>
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
                handleSwap();
              }}
              className="space-y-5"
            >
              {error && <p className="text-red-500 font-semibold bg-red-100 dark:bg-red-900/30 p-3 rounded-lg border border-red-200 dark:border-red-800">{error}</p>}

              <div>
                <label className="flex items-center gap-2 text-lg font-medium mb-1">
                  <TrendingDown size={18} className="text-primary" />
                  From Currency
                </label>
                <input
                  type="text"
                  value={fromThisCurrency}
                  onChange={(e) => setFromThisCurrency(e.target.value)}
                  className="w-full border border-border bg-background rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. USDT"
                  list="coins-list"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-lg font-medium mb-1">
                  <TrendingUp size={18} className="text-primary" />
                  To Currency
                </label>
                <input
                  type="text"
                  value={toThisCurrency}
                  onChange={(e) => setToThisCurrency(e.target.value)}
                  className="w-full border border-border bg-background rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="e.g. BTC"
                  list="coins-list"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-lg font-medium mb-1">
                  <Search size={18} className="text-primary" />
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-border bg-background rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="0.00"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-bold px-6 py-4 rounded-xl w-full shadow-lg"
              >
               SWAP ASSETS
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
      className="bg-background text-foreground w-full min-h-screen p-4 font-bold"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl mb-6 md:mb-8 flex items-center gap-3">
          <ArrowRightLeft className="text-primary" />
          Exchange Assets
        </h1>

        <div className="w-full md:w-3/4 mx-auto border border-border bg-secondary/20 rounded-2xl overflow-hidden shadow-2xl min-h-[500px] grid md:grid-cols-[1fr_2fr]">
          <div className="flex flex-wrap md:flex-col justify-around md:justify-start gap-4 p-4 md:p-6 bg-secondary/40 border-b md:border-b-0 md:border-r border-border">
            <button
              onClick={() => setActiveTab("sell")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
                activeTab === "sell" 
                  ? "bg-primary text-white shadow-lg"
                  : "bg-background text-foreground"
              }`}
            >
              <TrendingDown size={20} />
              <span>Sell</span>
            </button>

            <button
              onClick={() => setActiveTab("buy")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
                activeTab === "buy" 
                  ? "bg-primary text-white shadow-lg"
                  : "bg-background text-foreground"
              }`}
            >
              <TrendingUp size={20} />
              <span>Buy</span>
            </button>

            <button
              onClick={() => setActiveTab("swap")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
                activeTab === "swap" 
                  ? "bg-primary text-white shadow-lg"
                  : "bg-background text-foreground"
              }`}
            >
              <ArrowRightLeft size={20} />
              <span>Exchange</span>
            </button>
          </div>

          <div className="p-5 md:p-8 relative">
            {loading && (
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-10 rounded-r-2xl">
                <Loader2 className="animate-spin text-primary" size={40} />
              </div>
            )}
            <CoinsDataList />
            {renderTabContent()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
