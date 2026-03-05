"use client";
import { useSidebar } from "./SidebarContext";

export default function Wrapper({ children }) {
  const { isOpen } = useSidebar();
  return (
    <main className={`transition-all duration-300 ${isOpen ? "pl-64" : "pl-0"}`}>
      {children}
    </main>
  );
}
