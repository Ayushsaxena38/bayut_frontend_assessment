"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // REPLACE with your actual backend URL
      const response = await axios.post("http://localhost:3000/api/users/login", formData);
      
      // Assuming backend returns a token
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        router.push("/"); // Redirect to home
      }
    } catch (err: any) {
      console.error(err);
      setError("Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Bayut</h1>
          
          {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input 
                type="email"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-bayut focus:border-transparent outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <input 
                type="password"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-bayut focus:border-transparent outline-none"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            
            <button 
  disabled={loading}
  // Changed "bg-bayut" -> "bg-zinc-700"
  // Changed "hover:bg-bayut-dark" -> "hover:bg-zinc-800"
  className="w-full bg-zinc-700 text-white py-2 rounded font-bold hover:bg-zinc-800 transition disabled:opacity-50"
>
  {loading ? "Logging in..." : "Log In"}
</button>
          </form>
          
          <div className="mt-4 text-center text-sm text-gray-600">
            New to Bayut? <Link href="/register" className="text-bayut font-semibold">Create Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}