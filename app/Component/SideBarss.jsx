"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Home,
  GlassWater,
  User,
  Heart,
  NewspaperIcon,
  CoinsIcon,
  Menu,
  X,
} from "lucide-react";

const SideBarss = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Product", path: "/Product", icon: <CoinsIcon size={20} /> },
    { name: "Exchange", path: "/Exchanges", icon: <GlassWater size={20} /> },
    { name: "Profile", path: "/Profile", icon: <User size={20} /> },
    { name: "News", path: "/News", icon: <NewspaperIcon size={20} /> },
    { name: "Community", path: "/Community", icon: <Heart size={20} /> },
    { name: "Register", path: "/SignUp", icon:<GlassWater size={20}/>}
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 bg-gray-900 p-2 rounded-lg text-white shadow-lg"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-64 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Image
              src="/Image/bossvnnlogo.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl">bossVnn</span>
          </div>

          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        {/* Menu */}
        <div className="flex flex-col mt-6 space-y-2 px-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-4 text-gray-400 text-sm">
          Crypto Dashboard
        </div>
      </div>
    </>
  );
};

export default SideBarss;
