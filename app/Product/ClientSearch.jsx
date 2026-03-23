'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '../Component/Loadings.jsx';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const items = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientSearch({ initialData }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialData || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData || []);

  useEffect(() => {
    setLoading(false);
    setFilteredData(initialData || []);
    setData(initialData || []);
  }, [initialData]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="ml-10 pt-5 text-2xl font-bold">Crypto Market</h1>
        <input
          type="text"
          placeholder="Search by name or symbol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-5 p-2 border-2 w-3/4 ml-5 xl:w-1/2 xl:ml-[20rem] rounded-lg text-black bg-white"
        />
      </div>

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
        <motion.div variants={container} initial="hidden" animate="visible" className="grid gap-4 p-4">
          {filteredData.map((item, index) => (
            <motion.div
              variants={items}
              whileHover={{ scale: 1.02 }}
              key={item.id}
              className="lg:text-[18px]"
            >
              <Link
                href={`/Product/${item.id}`}
                className="m-4 p-6 border-2 bg-gradient-to-br from-[#1B3358] to-[#06142E] xl:ml-[2rem] rounded-2xl xl:rounded-[10px] xl:pt-4 xl:pb-4 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 items-center"
              >
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-full" />
                  <p>#{item.market_cap_rank} {item.name} ({item.symbol.toUpperCase()})</p>
                </div>
                <p>💰 Price: ${item.current_price.toLocaleString()}</p>
                <p>📈 Market Cap: ${item.market_cap.toLocaleString()}</p>
                <p className={`font-semibold ${(item.price_change_percentage_24h ?? 0) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  24h Change: {typeof item.price_change_percentage_24h === 'number' ? `${item.price_change_percentage_24h.toFixed(2)}%` : 'N/A'}
                </p>
                <p>🔄 Volume: ${item.total_volume.toLocaleString()}</p>
                <div className="flex justify-end">
                   <span className="bg-blue-600 px-4 py-1 rounded-full text-sm">Details</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
