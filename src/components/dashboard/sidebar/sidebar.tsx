"use client";
import React, { use, useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { sidebarMenuItems } from "@/config/sidebarMenuItems";
import { useSideBarHook } from "@/hooks/sidebar/sidebarHook";
import SidebarItem from "./sidebarItem";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const { isOpen, toggleSidebar } = useSideBarHook();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 1280 : false
  );
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen &&
        isMobile
      ) {
        toggleSidebar();
      }
    },
    [isMobile, isOpen, toggleSidebar]
  );

  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth <= 1280;
    if (isMobile !== newIsMobile) {
      setIsMobile(newIsMobile);
      if (newIsMobile && isOpen) {
        toggleSidebar();
      }
    }
  }, [isMobile, toggleSidebar]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <aside
      className={`w-64 bg-gray-900 text-white h-screen overflow-y-auto fixed left-0 top-0 z-10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={sidebarRef}
    >
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold flex items-center justify-center gap-2">
          Sistema de Inventario
        </h1>
      </div>
      <nav className="mt-5 px-2">
        {sidebarMenuItems.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </nav>
    </aside>
  );
}
