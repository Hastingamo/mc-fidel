import Image from "next/image";
import React from "react";
import ClientChart from "./ClientChart";

export default async function Page({ params }) {
  const { id } = await params;
  let data = null;
  let error = null;

  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      {
        next: { revalidate: 60 } // ISR: Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("Coin not found");
        }
        throw new Error("Failed to fetch coin data");
    }

    data = await response.json();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-background text-foreground">
          <h1>Loading...</h1>
        </div>
      );
  }

  const tradingViewSymbol = data.symbol
    ? `BINANCE:${data.symbol.toUpperCase()}USDT`
    : "";

  return (
    <div className="w-full min-h-screen bg-background text-foreground p-4 xl:overflow-hidden">
      <div className="flex items-center gap-4 mb-6">
        {data.image?.large && (
          <Image
            src={data.image.large}
            alt={data.name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div>
           <h1 className="text-3xl font-bold">{data.name} <span className="text-foreground/50 uppercase">({data.symbol})</span></h1>
           <p className="text-sm font-semibold bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-md inline-block mt-1">
             Rank #{data.market_cap_rank}
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 h-[600px] rounded-2xl overflow-hidden shadow-lg border border-border">
          {tradingViewSymbol ? (
            <ClientChart symbol={tradingViewSymbol} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/20">
               <p>Trading chart unavailable for this symbol</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-1 space-y-4">
           <div className="p-6 bg-secondary/20 border border-border rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-4">Market Stats</h2>
              <div className="space-y-4">
                 <div>
                    <p className="text-foreground/60 text-sm">Current Price</p>
                    <p className="text-2xl font-bold">${data.market_data?.current_price?.usd?.toLocaleString()}</p>
                 </div>
                 <div>
                    <p className="text-foreground/60 text-sm">Market Cap</p>
                    <p className="font-semibold">${data.market_data?.market_cap?.usd?.toLocaleString()}</p>
                 </div>
                 <div>
                    <p className="text-foreground/60 text-sm">24h High / Low</p>
                    <p className="font-semibold text-green-500">${data.market_data?.high_24h?.usd?.toLocaleString()}</p>
                    <p className="font-semibold text-red-500">${data.market_data?.low_24h?.usd?.toLocaleString()}</p>
                 </div>
                 <div>
                    <p className="text-foreground/60 text-sm">Price Change (24h)</p>
                    <p className={`font-bold ${(data.market_data?.price_change_percentage_24h ?? 0) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {data.market_data?.price_change_percentage_24h?.toFixed(2)}%
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
