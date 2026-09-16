import { useAuthStore } from "@/store/auth.store";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader2 } from "lucide-react";


export function ProtectedRoute(){
    const user = useAuthStore((state) => state.user)
    const isInitializing = useAuthStore((state) => state.isInitializing)
    const initializeAuth = useAuthStore((state) => state.initializeAuth)

    useEffect(()=>{
        initializeAuth()
    },[initializeAuth])

    if(isInitializing){
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
        )
    }  
    
    if(!user) return <Navigate to="/login" replace/>

    return <Outlet/>
}