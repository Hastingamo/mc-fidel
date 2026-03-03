"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

function Headerss() {
  const { theme, setTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  const mounthed = () => {
    setMounted(true);
  }

  useEffect(() => {
    mounthed();
        setMounted(true);

  }, []);

  return (
    <>
      <div className="hidden text-white md:flex md:gap-10 md:flex-row md:p-4 bg-[#06142E]">
        <Link href="/"><h1>Dams</h1></Link>
        <Link href="/Product"><h1>Crypto page</h1></Link>
        <Link href="/Login"><h1>Login</h1></Link>
        <Link href="/Signup"><h1>Sign Up</h1></Link>
        <Link href="/News"><h1>News</h1></Link>
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

      <div className="grid p-4 grid-cols-4 md:hidden">
        <h1>Dams</h1>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto p-2 rounded-lg bg-secondary hover:opacity-80 transition-all"
          aria-label="Toggle theme"
        >
          {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
        <Link href="/Login"><h1>login</h1></Link>
      </div>
    </>
  );
}

export default Headerss;