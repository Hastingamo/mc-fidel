"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Page() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
    const apikey = "d3s1cj1r01qldtrbhibgd3s1cj1r01qldtrbhic0";


  useEffect(() => {
    // const fetchNewsData = async () => {
    //   try {
    //     const response = await fetch(
    // fetch(`https://finnhub.io/api/v1/news?category=crypto&token=${apikey}`)
    //     );
    //     const data = await response.json();
    //     setNews(data);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

      const newss = () => {
    fetch(`https://finnhub.io/api/v1/news?category=crypto&token=${apikey}`)
      .then((response) => response.json())
      .then((newsData) => {
        setNews(newsData);
        setLoading(false);
        console.log(newsData);
      });
  };
    newss();
  }, []);

//   useEffect(() => {
//     if (!Array.isArray(news)) {
//       setFilteredNews([]);
//       return;
//     }
//     const term = searchTerm?.toLowerCase() || "";
//     const filtered = news.filter((item) => {
//       return (
//         item.headline?.toLowerCase().includes(term) ||
//         item.summary?.toLowerCase().includes(term)
//       );
//     });
//     setFilteredNews(filtered);
//   }, [searchTerm, news]);

  return (
    <div className="bg-[#bfb4b0] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="ml-10 pt-5">Crypto page</h1>
        <input
          type="text"
          placeholder="Search by name or symbol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-5 p-2 border-2 w-3/4 ml-5 xl:w-1/2 xl:ml-[20rem] rounded-lg text-black"
        />
      </div>

      {error && (
        <p className="text-center text-red-500 mt-6">
          Failed to load news. Please try again.
        </p>
      )}

      {loading ? (
        <p className="text-center mt-6">Loading....</p>
      ) : (
        <motion.div>
          {searchTerm && filteredNews.length === 0 ? (
            <p className="text-center text-red-500 mt-6">News not found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#C9B59C] m-4 p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                <Image
                  src={item.image}
                  alt={item.headline}
                  width={400}
                  height={200}
                  unoptimized
                  className="rounded-lg object-cover w-full h-48"
                />
                <p className="text-sm text-gray-600">{item.headline}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Read more
                </a>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default Page;