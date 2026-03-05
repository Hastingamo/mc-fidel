"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useSidebar } from "./SidebarContext";

function Headerss() {
  const { theme, setTheme } = useTheme();
  const { isOpen, toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);
  // const routers = useRouter()
  // const navigates = () => {
  //   routers.push("/Product");
  // }
  return (
    <>
      <div className="hidden md:flex md:gap-10 md:flex-row md:items-center md:p-4 bg-primary text-foreground border-b border-secondary sticky top-0 z-50">
        <button onClick={toggleSidebar} className="p-2 hover:bg-secondary rounded-lg transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link href="/"><h1>Dams</h1></Link  >
   
            <Link  href="/Product"> <h1>Crypto page</h1> </Link>
       <Link href="/Login"> <h1>Login</h1> </Link>
       <Link href="/Signup"> <h1>Sign Up</h1> </Link>
       <Link href="/News"> <h1>News</h1> </Link>
       <Link href="/Register"><h1>register</h1></Link>
       <Link href="/Exchange"><h1>Exchange rate page</h1></Link>

       <button
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         className="ml-auto p-2 rounded-lg bg-secondary hover:opacity-80 transition-all"
         aria-label="Toggle theme"
       >
         {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
       </button>
      </div>
      <div className="flex justify-between items-center p-4 md:hidden bg-primary text-foreground border-b border-secondary sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1>Dams</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/Login"><h1>login</h1></Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-secondary"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-primary border-r border-secondary transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40 shadow-xl`}>
        <div className="p-6 flex flex-col gap-6 mt-16">
          <Link href="/Product" onClick={toggleSidebar} className="hover:text-blue-500 transition-colors">Crypto page</Link>
          <Link href="/News" onClick={toggleSidebar} className="hover:text-blue-500 transition-colors">News</Link>
          <Link href="/Exchange" onClick={toggleSidebar} className="hover:text-blue-500 transition-colors">Exchange rate</Link>
          <div className="border-t border-secondary pt-6 flex flex-col gap-4">
            <Link href="/Login" onClick={toggleSidebar}>Login</Link>
            <Link href="/Signup" onClick={toggleSidebar}>Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headerss;
