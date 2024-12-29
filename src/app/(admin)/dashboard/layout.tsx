"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import Header from "@/components/dashboard/header";
import { useSideBarHook } from "@/hooks/sidebar/sidebarHook";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSideBarHook();

  return (
    <div className="w-full h-full flex flex-row text-black bg-white">
      <Sidebar />
      <div
        className={`h-full min-h-screen w-full flex md:p-8  flex-col bg-white transition-all duration-300 ease-in-out relative ${
          isOpen ? "xl:ml-[320px]" : "ml-0"
        }`}
      >
        <Header />
        <main className="p-4 mt-16">{children}</main>
      </div>
    </div>
  );
}
