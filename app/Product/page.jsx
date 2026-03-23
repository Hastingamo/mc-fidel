
"use client";
import React, { useState } from "react";
import { motion, scale } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "framer-motion/client";
import Loader from "../Component/Loadings";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const items = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
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
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100",
      {
        next: { revalidate: 3600 } // ISR: Revalidate coin list every hour
      }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch coin data");
    }
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
    <div className="bg-[#1B3358] w-full  h-full text-white  font-bold">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="ml-10 pt-5">Crypto page</h1>
        <input
          type="text"
          placeholder="Search by name or symbol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" mt-5 p-2 border-2 w-3/4 ml-5 xl:w-1/2 xl:ml-[20rem] rounded-lg text-black"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
              <Loader/>
        </div>
    
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {searchTerm && filteredData.length === 0 ? (
            <div className="h-screen flex justify-center items-center flex-col ">
              <Image
              src="/Image/downloads.jfif"
                alt="coin not found"
                width={200}
                height={200}
              />
              <p className="text-center text-red-500 mt-6">coin not found</p>
            </div>
          ) : (
            <motion.div variants={container} initial="hidden" animate="visible">
              {filteredData.map((item, index) => (
                <motion.div
                  variants={items}
                  whileHover={{ scale: 1.02 }}
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="lg:text-[18px]"
                >
                  <Link
                    href={`/Product/${item.id}`}
                    className="m-4 p-6 border-2 bg-gradient-to-br from-[#1B3358] to-[#06142E] xl:ml-[2rem] rounded-2xl xl:rounded-[10px] xl:pt-4 xl:pb-4 grid  md:grid-cols-2 lg:p-0 lg:grid-cols-4 xl:grid-cols-6"
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
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default Page;
