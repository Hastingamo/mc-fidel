"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/Image/bossvnnlogo.png"
              alt="Dams Crypto Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold tracking-tight">Dams Crypto</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Your trusted source for real-time cryptocurrency data, news, and market insights. Empowering your digital asset journey.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-blue-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-blue-600 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/Product" className="hover:text-blue-500 transition-colors">Crypto Market</Link>
            </li>
            <li>
              <Link href="/Exchanges" className="hover:text-blue-500 transition-colors">Exchanges</Link>
            </li>
            <li>
              <Link href="/News" className="hover:text-blue-500 transition-colors">Latest News</Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-bold mb-6">Community</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link href="/Community" className="hover:text-blue-500 transition-colors">Community Hub</Link>
            </li>
            <li>
              <Link href="/Login" className="hover:text-blue-500 transition-colors">Member Login</Link>
            </li>
            <li>
              <Link href="/SignUp" className="hover:text-blue-500 transition-colors">Join Us</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
          <p className="text-gray-400 mb-6">Subscribe to get the latest crypto trends directly in your inbox.</p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-secondary border border-white/10 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {currentYear} Dams Crypto. All rights reserved.</p>
      </div>
    </footer>
  );
}
