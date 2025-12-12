"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import api from "../utils/api";

export default function RegisterPage() {
  // State for multi-step flow
  const [step, setStep] = useState(1); // 1 = Check Email, 2 = Final Details
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Step 1: Check if Email is Available
  const handleCheckEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {

      await api.post("/check-email", { email: formData.email });
      
      // If successful, move to next step
      setStep(2);
    } catch (err: any) {
      // Handle "Email already exists" or server errors
      setError(err.response?.data?.message || "Email is already taken or invalid.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Final Registration
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // REPLACE with your actual create user API
      await api.post("/create", formData);
      alert("Account created successfully! Please login.");
      window.location.href = "/login";
    } catch (err: any) {
      setError("Error creating account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          {/* Header Area */}
          <div className="mb-6 relative">
            {step === 2 && (
              <button 
                onClick={() => setStep(1)} 
                className="absolute left-0 top-1 text-gray-500 hover:text-zinc-700"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h1 className="text-2xl font-bold text-center text-gray-800">
              {step === 1 ? "Get Started" : "Finish Signing Up"}
            </h1>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-4">
              {error}
            </div>
          )}
          
          
          {step === 1 && (
            <form onSubmit={handleCheckEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-zinc-700 focus:border-transparent outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <button 
                disabled={loading}
                className="w-full bg-zinc-700 text-white py-2 rounded font-bold hover:bg-zinc-800 transition disabled:opacity-50"
              >
                {loading ? "Checking..." : "Continue"}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleRegister} className="space-y-4">
              
              <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-600 mb-2 flex justify-between items-center">
                <span>{formData.email}</span>
                <span className="text-green-600 text-xs font-bold">✓ Verified</span>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text"
                  required
                  autoFocus
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-zinc-700 focus:border-transparent outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Create Password</label>
                <input 
                  type="password"
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-zinc-700 focus:border-transparent outline-none"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
              
              <button 
                disabled={loading}
                className="w-full bg-zinc-700 text-white py-2 rounded font-bold hover:bg-zinc-800 transition disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>
          )}
          
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-zinc-700 font-semibold hover:underline">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}