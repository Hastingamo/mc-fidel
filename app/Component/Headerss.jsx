"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

function Headerss() {
  const { theme, setTheme } = useTheme();
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
      <div className="hidden md:flex md:gap-10 md:flex-row md:items-center md:p-4 bg-primary text-foreground border-b border-secondary">
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
      <div className="flex justify-between items-center p-4 md:hidden bg-primary text-foreground border-b border-secondary">
        <h1>Dams</h1>
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
    </>
  );
}

export default Headerss;
