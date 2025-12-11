// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { Menu, X, User, LogOut } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check for token only on the client side (after mount)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Bayut<span className="text-zinc-700">.clone</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-zinc-700">Buy</Link>
            <Link href="#" className="text-gray-600 hover:text-zinc-700">Rent</Link>
            <Link href="#" className="text-gray-600 hover:text-zinc-700">Sell</Link>
            <Link href="#" className="text-gray-600 hover:text-zinc-700">Blog</Link>
            
            {/* CONDITIONAL RENDERING START */}
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 font-medium border border-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <Link 
                href="/login" 
                className="flex items-center gap-2 text-zinc-700 font-medium border border-zinc-700 px-4 py-2 rounded hover:bg-zinc-700 hover:text-white transition"
              >
                <User size={18} />
                Login
              </Link>
            )}
            {/* CONDITIONAL RENDERING END */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
          <Link href="#" className="block text-gray-700 font-medium">Buy</Link>
          <Link href="#" className="block text-gray-700 font-medium">Rent</Link>
          <Link href="#" className="block text-gray-700 font-medium">Sell</Link>
          
          {/* Mobile Conditional Button */}
          {isLoggedIn ? (
             <button 
               onClick={handleLogout} 
               className="block w-full text-center bg-red-600 text-white py-2 rounded"
             >
               Logout
             </button>
          ) : (
            <Link href="/login" className="block w-full text-center bg-zinc-700 text-white py-2 rounded">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}