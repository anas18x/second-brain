import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"

import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashBoardPage from "./pages/DashboardPage"
import BrainDetailPage from "./pages/BrainDetailPage"
import PublicBrainPage from "./pages/PublicBrain"
import {ProtectedRoute} from "@/components/auth/ProtectedRoutes"
import PageBackground from "@/components/shared/PageBackground"

function App() {

  return (
    <BrowserRouter>
    <PageBackground>
     <Toaster position="top-center" />
      <Routes>
        
         {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/share/:shareSlug" element={<PublicBrainPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/brain/:id" element={<BrainDetailPage />} />
        </Route>
         

        <Route path="*" element={ <div className="flex min-h-screen items-center justify-center"> <h1 className="text-xl font-semibold">
                Page not found </h1> </div> 
        }/>

      </Routes>
    </PageBackground>
    </BrowserRouter>
  )
}

export default App