"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import name from "../Component/community.json"
import Link from 'next/link';
import Image from 'next/image';
function Page() {
  return (
    <div className='flex justify-center items-center flex-col '>
      <h1>Community page</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 p-4 w-[90%]'>
      {name.map((item) => (
        <div className='border-2 p-4 gap-4 shadow-lg rounded-lg' key={item.name}>
          
          <Image className="items-center justify-center " src={item.images} width={200} height={200} alt={item.name}  />
          <div>
                      <h2>{item.name}</h2>
          <p>{item.discreption}</p>
          <div className='bg-sky-500'>
          <Link href={item.href}>Join</Link>
          </div>
          </div>

        </div>
      ))}
    </div>

    </div>
  )
}

export default Page
