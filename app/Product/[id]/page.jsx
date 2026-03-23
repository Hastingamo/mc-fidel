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
  const params = useParams;
const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  

  useEffect(() => {
      if (!id) return;

    const fecthData = async () => {
      try {
        const response = await fetch(
          `https://pro-api.coingecko.com/api/v3/coins/${id}`,
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
  // const tradingViewSymbol = `BINANCE:${data.symbol.toUpperCase()}USDT`;

  return (
    <div className="w-full h-screen xl:overflow-hidden">
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">{data.name} </h1>
          </div>
          <div className="w-full flex flex-row">
  
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
