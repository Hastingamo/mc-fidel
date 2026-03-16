"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Loader from "../Component/Loadings";


function Page() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const apikey = "d3s1cj1r01qldtrbhibgd3s1cj1r01qldtrbhic0";

const container = {
  hidden : { opacity: 0 },
  visible : { opacity: 1, transition: { staggerChildren: 0.3, } }
}
const items = {
  hidden : { opacity: 0, y: 20 },
  visible : { opacity: 1, y: 0, }
}

  useEffect(() => {
        const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/news?category=crypto&token=${apikey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const newsData = await response.json();
        setNews(newsData);
        setFilteredNews(newsData); // initialize filtered
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const filtered = news.filter(
      (item) =>
        item?.headline?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredNews(filtered);
  }, [searchTerm, news]);

  return (
    <div className="bg-[#2c5364] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="ml-10 pt-5">News page</h1>
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
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <motion.div>
          {searchTerm && filteredNews.length === 0 ? (
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
            // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredNews.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-[] m-4 p-4 rounded-lg gap-4 shadow-lg grid grid-cols-2"
                  variants={items}
                  //   transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <Image
                      src={item.image}
                      alt={item.headline}
                      width={400}
                      height={200}
                      unoptimized
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-600">{item.headline}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Read more
                    </a>
                  </div>
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
