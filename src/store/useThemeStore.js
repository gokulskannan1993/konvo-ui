import { create } from "zustand";


export const useThemeStore = create((set) => ({
    theme: "coffee",    // default theme
    setTheme: (theme) => set({ theme }), // function to update the theme
})) 
