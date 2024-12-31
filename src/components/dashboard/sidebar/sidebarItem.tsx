"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SidebarItemProps } from "@/config/sidebarMenuItems";

export default function SidebarItem({ item, isOpenMenu, handleToggleMenu }: { item: SidebarItemProps, isOpenMenu: boolean, handleToggleMenu: (title: string) => void }) {
  // Estado para controlar qué menú está abierto actualmente
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Función para manejar la apertura y cierre del menú
  const toggleMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title)); // Si el menú está abierto, ciérralo. Si no, ábrelo.
  };

  return (
    <div key={item.title} className="mb-2">
      <button
        onClick={() => handleToggleMenu(item.title)}
        className="flex w-full items-center px-4 py-2 text-sm justify-between font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <span className="flex items-center gap-4">
          <span className="h-5 w-5">{item.icon}</span>
          {item.title}
        </span>
        {item.subItems && (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpenMenu ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      {item.subItems && isOpenMenu && (
        <div className="bg-gray-900">
          {item.subItems.map((subItem) => (
            <a
              key={subItem.path}
              href={subItem.path}
              className="flex items-center pl-12 pr-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              {subItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
