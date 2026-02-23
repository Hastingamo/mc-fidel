"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function Page() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const FecthNewsData = async () => {
      try {
        const response = await fetch(
          "https://finnhub.io/api/v1/news?category=crypto&token=c3c9h5r48v6k27001580",
        );
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    FecthNewsData();
  }, []);

  //   useEffect(() => {
  //       if (!news || !Array.isArray(news)) {
  //     setFilteredNews([]);
  //     return;
  //   }

  //   const term = searchTerm?.toLowerCase() || "";
  //     const flitered = news.filter((item) => {
  //       return (
  //         item.headline.toLowerCase().includes(term) ||
  //         item.summary.toLowerCase().includes(term)
  //       );
  //     });
  //     setFilteredNews(flitered);

  //   }, [searchTerm, news]);

  //       {searchTerm && filteredNews.length === 0 && (
  //   <p className="text-center text-red-500 mt-6">
  //     News not found
  //   </p>
  // )}
  return (
    <div className="bg-[#bfb4b0] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {" "}
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
        <p>loading....</p>
      ) : (
        <motion.div>
          <div className="grid grid-cols-3">
            {/* {
                        news.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#C9B59C] m-4 p-4 rounded-lg shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                >
                                    <h1 className="text-xl font-bold">{item.headline}</h1>
                                </motion.div>
                        ))}  */}
            {!news?.length ? (
              <p className="text-center mt-10">No news available</p>
            ) : (
              news.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h1>{item.headline}</h1>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Page;
