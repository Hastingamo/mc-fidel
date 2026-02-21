"use client";
import React, { useState } from "react";
import { motion, scale } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#1B3358] w-full   text-white  font-bold">
      <h1 className="ml-10 pt-5">Crypto page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <motion.div
            initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}

               
                viewport={{once:true}}
                whileInView={{opacity: 1, y:0}}
        >
                   <div className="grid grid-cols-1 ">
            {data.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x:-30  }}
                animate={{ opacity: 1, x: 5 }}
                transition={{ duration: 3 }}
                whileHover={{ scale: 1.02 }}
                key={index}
                whileInView={{opacity: 1, y:0}}
                className="lg:text-[18px]">
                    <Link href={`/Product/${item.id}`} className="m-4 p-6 border-2 bg-gradient-to-br from-[#1B3358] to-[#06142E] xl:ml-[2rem] rounded-2xl xl:rounded-[10px] xl:pt-4 xl:pb-4 grid  md:grid-cols-2 lg:p-0 lg:grid-cols-4 xl:grid-cols-6">
                     <Image src={item.image} alt={item.name} width={50} height={50} />
                <p>
                  #{index + 1} {item.name} ({item.symbol.toUpperCase()} || {item.category})
                </p>
                <p>💰 Price: ${item.current_price.toLocaleString()}</p>
                <p>📈 Market Cap: ${item.market_cap.toLocaleString()}</p>
                <p
                  className={`font-semibold ${
                    (item.price_change_percentage_24h ?? 0) > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  1min Change: {typeof item.price_change_percentage_24h === "number"
                    ? `${item.price_change_percentage_24h.toFixed(2)}%`
                    : "N/A"}
                </p>
                                <p>🔄 Volume: ${item.total_volume.toLocaleString()}</p>
         
                    </Link>
               
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Page;
