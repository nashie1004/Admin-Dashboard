import { create } from 'zustand'

type IUserThemeStore = {
  theme: "DARK" | "LIGHT",
  setTheme: () => void
}

export const userThemeStore = create<IUserThemeStore>((set) => ({
  theme: "LIGHT",
  setTheme: () => set(state => 
    ({ theme: state.theme === "LIGHT" ? "DARK" : "LIGHT" }))
}))
