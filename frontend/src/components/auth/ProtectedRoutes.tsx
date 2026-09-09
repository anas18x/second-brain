import { useAuthStore } from "@/store/auth.store";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


export function ProtectedRoute(){
    const user = useAuthStore((state) => state.user)
    const isInitializing = useAuthStore((state) => state.isInitializing)
    const initializeAuth = useAuthStore((state) => state.initializeAuth)

    useEffect(()=>{
        initializeAuth()
    },[initializeAuth])

    if(isInitializing) return <div>Loading...</div>
    
    if(!user) return <Navigate to="/login" replace/>

    return <Outlet/>
}