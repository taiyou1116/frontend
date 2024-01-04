import { create } from "zustand";
import { UserState } from "../types/UserState";

export const useStore = create<UserState>((set, get) => ({
    userName: "名無し",
    userImage: "",

    setUserName: (userName: string) => {
        set({userName: userName})
    },
    setUserImage: (userImage: string) => {
        set({ userImage: userImage })
    }
}))