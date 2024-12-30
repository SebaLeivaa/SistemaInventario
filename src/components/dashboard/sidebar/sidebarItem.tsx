"use client";
import React, { use, useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { SidebarItemProps } from "@/config/sidebarMenuItems";

export default function SidebarItem({ item }: { item: SidebarItemProps }) {
  // Estado para controlar si los submenús están abiertos o cerrados
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  // Función para abrir o cerrar los submenús
  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div key={item.title} className="mb-2">
      <button
        onClick={() => toggleMenu(item.title)}
        className="flex w-full items-center px-4 py-2 text-sm justify-between font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <span className="flex items-center gap-4">
          <span className="h-5 w-5">{item.icon}</span>
          {item.title}
        </span>
        {item.subItems && (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              openMenus[item.title] ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      {item.subItems && openMenus[item.title] && (
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
