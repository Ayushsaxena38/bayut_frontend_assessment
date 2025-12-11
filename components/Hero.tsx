// src/components/Hero.tsx
"use client";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-[500px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Find your new home in UAE
        </h1>

        <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-2 md:p-4">
          <div className="flex gap-4 border-b pb-2 mb-4 px-2">
            
            <button className="text-zinc-700 font-bold border-b-2 border-zinc-700 pb-1">Buy</button>
            <button className="text-gray-500 font-medium hover:text-gray-800">Rent</button>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Enter location or building..." 

              className="flex-1 p-3 border rounded bg-gray-50 focus:outline-none focus:border-zinc-700"
            />

            <button className="bg-zinc-700 text-white px-8 py-3 rounded font-bold hover:bg-zinc-800 transition flex items-center justify-center gap-2">
              <Search size={20} />
              Find
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}