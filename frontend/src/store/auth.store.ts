import {create} from "zustand"
import { getCurrentUser } from "@/services/auth/auth.api"


type User = {
    id : string,
    email: string,
    username? : string,
    shareSlug? : string,
    isBrainPublic : boolean,
    canChangeEmail : boolean,
}

type AuthState = {
    user : User | null,
    isInitializing : boolean,
    setUser : (user : User) => void,
    clearUser : () => void,
    initializeAuth: () => Promise<void>
}


export const useAuthStore = create<AuthState> ((set) => ({
    user: null,

    isInitializing : true,

    setUser: (user) => set({ user }),

    clearUser: () => set({ user: null }),

    initializeAuth: async () => {
        try{
            const user = await getCurrentUser()
            set({user})

        } catch {
            set({user:null})
            
        } finally {
            set({isInitializing:false})
        }
    }
}))