"use client";

import React, { useState } from "react";
import SideBarss from "./SideBarss";

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <SideBarss isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`transition-all duration-300 ${
          isOpen ? "pl-64" : "pl-20"
        } md:pl-0`}
      >
        {children}
      </div>
    </div>
  );
}
