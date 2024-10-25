import { create } from "zustand";

const usePasswordStore = create((set) =>({
    password: " ",
    setPassword : (p)=>set({password: p}),
    removePassword: () => set({password: " "})
}))


export default usePasswordStore;