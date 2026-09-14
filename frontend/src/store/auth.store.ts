import {create} from "zustand"
import { getCurrentUser } from "@/services/auth/auth.api"


type User = {
    id : string,
    username : string,
    shareSlug : string,
    isBrainPublic : boolean
}

type AuthState = {
    user : User | null,
    isInitializing : boolean,
    setUser : (user : User) => void,
    clearUser : () => void,
    setBrainPublic : (isBrainPublic : boolean) => void,
    initializeAuth: () => Promise<void>
}


export const useAuthStore = create<AuthState> ((set) => ({
    user: null,

    isInitializing : true,

    setUser: (user) => set({ user }),

    clearUser: () => set({ user: null }),

    setBrainPublic: (isBrainPublic) => {
        set((state) => ({
            user : state.user ? {...state.user, isBrainPublic : isBrainPublic} : null
        }))
    },

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