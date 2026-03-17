"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { getSupabaseBrowserClient } from "@/app/lib/browserClient";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    const supabase = getSupabaseBrowserClient();

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            user_name: userName,
            gender: gender,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
      } else {
        setMessage("Check your email for the confirmation link!");
        // Clear form
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUserName("");
        setGender("");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-signup min-h-screen flex items-center justify-center p-4">
      <motion.div
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        className="w-full max-w-md bg-background/80 backdrop-blur-md border border-foreground/10 rounded-2xl shadow-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Create Account</h2>
          <p className="text-foreground/60 mt-2">Join bossVnn Crypto today</p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-foreground/80 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="johndoe"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-background border border-foreground/20 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-foreground/20 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground/80 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-foreground/20 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-foreground/80 mb-1"
              >
                Confirm
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-background border border-foreground/20 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-foreground/80 mb-1">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-background border border-foreground/20 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          {message && <p className="text-green-500 text-sm font-medium">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Page;
