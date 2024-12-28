"use client"
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '@/config/menuItems';
import { useState } from 'react';
import { useSideBarHook } from "@/hooks/sidebar/sidebarHook";



export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    const { isOpen } = useSideBarHook();

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className={`w-64 bg-gray-900 text-white h-screen overflow-y-auto fixed left-0 top-0 transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold flex items-center justify-center gap-2">
          Sistema de Inventario
        </h1>
      </div>
      
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <div key={item.title} className='mb-2'>
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
        ))}
      </nav>
    </div>
  );
}