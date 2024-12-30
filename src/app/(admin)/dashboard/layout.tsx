"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import Header from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar si el sidebar está abierto o cerrado (por defecto, abierto para computadores).
  const [isClient, setIsClient] = useState(false); // Detecta si el componente ya está en el cliente.

  useEffect(() => {
    setIsClient(true); // Marca que ya está en el cliente.
    setIsOpen(window.innerWidth >= 1280); // Evalúa el ancho de la ventana, si es mayor o igual a 1280px, el sidebar estará abierto.
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (!isClient) {
    // Mientras no esté en el cliente, no renderizamos nada.
    return null;
  }

  return (
    <div className="w-full h-full flex flex-row text-black bg-white">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`h-full min-h-screen w-full flex md:p-8 flex-col bg-white transition-all duration-300 ease-in-out relative ${
          isOpen ? "xl:ml-[320px]" : "ml-0"
        }`}
      >
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main className="p-4 mt-16">{children}</main>
      </div>
    </div>
  );
}
