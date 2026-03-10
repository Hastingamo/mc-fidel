"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Utensils,
  GlassWater,
  User,
  ShoppingCart,
  Heart,
  ClipboardList,
  Menu,
  X
} from "lucide-react";

const SideBarss = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/", icon: <Home className="w-6 h-6" /> },
    { name: "Food", path: "/food", icon: <Utensils className="w-6 h-6" /> },
    { name: "cockTail", path: "/cocktails", icon: <GlassWater className="w-6 h-6" /> },
    { name: "Profile", path: "/Dashboard", icon: <User className="w-6 h-6" /> },
    { name: "cart", path: "/AddToChart", icon: <ShoppingCart className="w-6 h-6" /> },
    { name: "Safe for later", path: "/SafeTOLater", icon: <Heart className="w-6 h-6" /> },
    { name: "Order", path: "/Order", icon: <ClipboardList className="w-6 h-6" /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 bg-[#e4c2bd] transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex justify-between p-4">
        {/* Toggle Button (Hamburger Menu) */}
        <button
          className="text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <nav className="flex flex-col space-y-4 px-4 mt-8 gap-4">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              duration: 0.1,
            }}
          >
            <div
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={() => router.push(item.path)}
            >
              <div className="text-black group-hover:text-blue-600 transition-colors">
                {item.icon}
              </div>

              <h1
                className={`text-black text-lg group-hover:text-blue-600 transition-colors ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {item.name}
              </h1>
            </div>
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default SideBarss;
