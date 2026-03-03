"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Chart from "../../Component/Chart";
import Link from "next/link";

function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { Id: id } = useParams();

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`,
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fecthData();
  }, [id]);

  // const tradingViewSymbol = data?.symbol ? `BINANCE:${data.symbol.toUpperCase()}USDT` : null;
  const tradingViewSymbol = `BINANCE:${data.symbol.toUpperCase()}USDT`;

  return (
    <div className="w-full h-screen xl:overflow-hidden">
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="">
          <div className="flex items-center gap-4">
            {/* <Image src={data.image} alt="the" width={40} height={40} className="w-10 h-10" /> */}
            <h1 className="text-3xl font-bold">{data.name} </h1>
          </div>
          <div className="w-full flex flex-row">
            <div className="w-3/4 h-screen text-white font-bold">
              <Chart symbol={tradingViewSymbol} />
            </div>
            {/* <div className="bg-[#f0f1f2] w-1/4 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">Market Stats</h2>
              <div className="space-y-2">
                <p>
                  <strong>Current Price:</strong>{" "}
                  {data ? `$${data.market_data.current_price.usd.toLocaleString()}` : "Price unavailable"}
                </p>{" "}
                <p>
                  <strong>Market Cap:</strong> $
                  {data.market_data.market_cap.usd.toLocaleString()}
                </p>
                <p>
                  <strong>24h High:</strong> $
                  {data.market_data.high_24h.usd.toLocaleString()}
                </p>
                <p>
                  <strong>24h Low:</strong> $
                  {data.market_data.low_24h.usd.toLocaleString()}
                </p>
                <p>
                  <strong>Price Change (24h):</strong>
                  <span
                    className={
                      data.market_data.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {data.market_data.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href={`/Product/${id}/Notess`}
                  className="block text-center bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                >
                  Create Note
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;

// "use client";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import Chart from "../../Component/Chart";
// import Link from "next/link";

// function Page() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(""); // initially null
//   const [error, setError] = useState(null);
//   const { Id: id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.coingecko.com/api/v3/coins/${id}`
//         );
//         if (!response.ok) throw new Error("Coin not found");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id]); 


//   const tradingViewSymbol = data?.symbol
//     ? `BINANCE:${data.symbol.toUpperCase()}USDT`
//     : "";

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <h1 className="text-red-500">{error}</h1>;

//   return (
//     <div className="w-full h-screen xl:overflow-hidden">
//       <div className="flex items-center gap-4">
//         {data?.image?.thumb && (
//           <Image
//             src={data.image.thumb}
//             alt={data.name}
//             width={40}
//             height={40}
//             className="w-10 h-10"
//           />
//         )}
//         <h1 className="text-3xl font-bold">{data.name}</h1>
//       </div>

//       <div className="w-full flex flex-row mt-4">
//         <div className="w-3/4 h-screen text-white font-bold">
//           {tradingViewSymbol ? (
//             <Chart symbol={tradingViewSymbol} />
//           ) : (
//             <p>Symbol unavailable</p>
//           )}
//         </div>

//         {/* Uncomment and fix stats if you want */}
//         {/* <div className="bg-[#f0f1f2] w-1/4 p-6 rounded-2xl shadow-lg">
//           ...market stats...
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Page;