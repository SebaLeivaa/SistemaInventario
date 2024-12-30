"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { sidebarMenuItems } from "@/config/sidebarMenuItems";
import SidebarItem from "./sidebarItem";

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  // Referencia al sidebar
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Cierra el sidebar al hacer clic fuera de él
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen &&
        window.innerWidth <= 1280 // Verifica directamente si es "móvil"
      ) {
        toggleSidebar();
      }
    },
    [isOpen, toggleSidebar]
  );

  // Maneja el redimensionamiento de la ventana
  const handleResize = useCallback(() => {
    if (window.innerWidth > 1280 && !isOpen) {
      // Asegura que el sidebar esté abierto en pantallas grandes
      toggleSidebar();
    } else if (window.innerWidth <= 1280 && isOpen) {
      // Asegura que el sidebar esté cerrado en pantallas pequeñas
      toggleSidebar();
    }
  }, [isOpen, toggleSidebar]);

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
