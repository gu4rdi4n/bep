import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [amount, setAmount] = useState(10);
  const [usdtAmount, setUsdtAmount] = useState(10);

  const tokenInfo = {
    name: "Tether",
    symbol: "USDT",
    address: "0x318777C87CD5e1F7561B3B573127817b83A1Ced4",
    decimals: 6,
    logo: "/icons/0x318777C87CD5e1F7561B3B573127817b83A1Ced4.png"
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-md p-6 max-w-md w-full border border-gray-700">
        <div className="flex items-center mb-4">
          <Image src={tokenInfo.logo} width={32} height={32} alt="logo" />
          <h1 className="ml-3 text-xl font-bold">{tokenInfo.name} / USD</h1>
        </div>

        <label className="block text-sm mb-1">Amount (USD)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            setAmount(val);
            setUsdtAmount(val);
          }}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <div className="text-center my-4 text-yellow-400">1 USD = 1 USDT</div>

        <label className="block text-sm mb-1">Receive (USDT)</label>
        <input
          type="number"
          value={usdtAmount}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            setUsdtAmount(val);
            setAmount(val);
          }}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <button className="w-full mt-4 p-2 bg-yellow-500 hover:bg-yellow-400 rounded">
          Simulate Swap
        </button>
      </div>
    </main>
  );
}
