    "use client"
    import { create } from "zustand";

    interface SidebarState {
        isOpen: boolean;
        toggleSidebar: () => void;
    }

    export const useSideBarHook = create<SidebarState>((set) => ({
        isOpen: true,
        toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
    }));