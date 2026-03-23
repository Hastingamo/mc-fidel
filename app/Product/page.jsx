import React from 'react';
import ClientSearch from './ClientSearch';

// Server component (ISR-enabled page)
export default async function Page() {
  let initialData = [];
  let error = null;

  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      { 
        next: { revalidate: 60 } // ISR: static regenerate every 60 seconds
      }
    );
    if (!response.ok) throw new Error('Fetch failed');
    initialData = await response.json();
  } catch (err) {
    error = err.message;
    console.error('ISR fetch error:', err);
  }

  return (
    <div className="bg-[#1B3358] w-full h-full text-white font-bold min-h-screen">
      {error && (
        <div className="bg-red-500/20 p-4 mb-4 rounded-lg">
           <p className="text-red-500 text-center">Error loading data: {error}. Showing cached data if available.</p>
        </div>
      )}
      <ClientSearch initialData={initialData} />
    </div>
  );
}
