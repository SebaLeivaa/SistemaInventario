"use client";
import React from "react";
import { Bell, User, Menu } from "lucide-react";
import { useSideBarHook } from "@/hooks/sidebar/sidebarHook";

export default function Header() {
  const { isOpen, toggleSidebar } = useSideBarHook();
  return (
    <header
      className={`h-16 bg-white border-b fixed top-0 z-10 px-4 transition-all duration-300 ${
        isOpen ? "left-64" : "left-0"
      } right-0`}
    >
      <div className="h-full px-4 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="top-4 left-4 z-20 p-2 bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-md"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-4 ml-12">
          <input
            type="search"
            placeholder="Search..."
            className="w-96 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 rounded-lg px-3 py-2">
            <User className="h-6 w-6" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}
