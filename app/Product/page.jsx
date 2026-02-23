"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
    // if (!data) {
    //   setFilteredData([]);
    //   return(
    //     <div className="flex items-center justify-center h-screen">
    //       <p className="text-2xl font-bold text-red-500">No data available</p>
    //     </div>
    //   )
  }, [searchTerm, data]);
  return (
    <div className="bg-secondary w-full h-full text-foreground font-bold transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2">
      <h1 className="ml-10 pt-5">Crypto page</h1>
      <input
        type="text"
        placeholder="Search by name or symbol"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className=" mt-5 p-2 border-2 w-3/4 ml-5 xl:w-1/2 xl:ml-[20rem] rounded-lg bg-background text-foreground border-primary"
      />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-1 ">
            {filteredData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 5 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="lg:text-[18px]"
              >
                <Link
                  href={`/Product/${item.id}`}
                  className="m-4 p-6 border-2 bg-primary border-secondary xl:ml-[2rem] rounded-2xl xl:rounded-[10px] xl:pt-4 xl:pb-4 grid md:grid-cols-2 lg:p-0 lg:grid-cols-4 xl:grid-cols-6 hover:shadow-lg transition-all"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <p>
                    #{index + 1} {item.name} ({item.symbol.toUpperCase()} ||{" "}
                    {item.category})
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
                    1min Change:{" "}
                    {typeof item.price_change_percentage_24h === "number"
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
