"use client";

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import("../../Component/Chart"), { ssr: false });

export default function ClientChart({ symbol }) {
  return <Chart initialSymbol={symbol} />;
}
