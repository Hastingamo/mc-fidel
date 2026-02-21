"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Headerss() {
  // const routers = useRouter()
  // const navigates = () => {
  //   routers.push("/Product");
  // }
  return (
    <>
      <div className="hidden text-white md:flex md:gap-10 md:flex-row md:p-4 bg-[#06142E]">
        <Link href="/"><h1>Dams</h1></Link  >
   
            <Link  href="/Product"> <h1>Crypto page</h1> </Link>
       <Link href="/Login"> <h1>Login</h1> </Link>
       <Link href="/Signup"> <h1>Sign Up</h1> </Link>
       <Link href="/News"> <h1>News</h1> </Link>
       <Link href="/Register"><h1>register</h1></Link>
       <Link href="Wallet"><h1>wallet</h1></Link>
      </div>
      <div className="grid p-4 grid-cols-4 md:hidden">
        <h1>Dams</h1>
        <Link href="/Login"><h1>login</h1></Link>

      </div>
    </>
  );
}

export default Headerss;
