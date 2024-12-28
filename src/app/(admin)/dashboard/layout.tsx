import React from "react";
import Sidebar from '@/components/dashboard/sidebar';
import Header from '@/components/dashboard/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {



return (
    <div className="w-full h-full flex flex-row text-black">
        <Sidebar />
        <Header />
        <div className="h-full min-h-screen w-full flex md:p-8  flex-col bg-white relative xl:ml-[320px]">
            <main className="p-2 w-full h-full">{children}</main>
        </div>
    </div>
  );
}
