"use client";
import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSideBarHook = create<SidebarState>((set) => ({
  isOpen: window.innerWidth >= 1280,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
