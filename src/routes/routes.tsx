import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { AuthProvider } from "../context/AuthProvider";
import { FavoriteProvider } from "../context/Favorites/context/FavoriteContext";
import { Favorites } from "../context/Favorites/Favorites";
import { Home } from "../pages/Home";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function AppRoutes() {
  return (
//<AuthProvider>
      //<BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <ProtectedLayout>
            <h2>foi</h2>
          </ProtectedLayout> */}
          <Route path="/authenticate" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
      //</BrowserRouter>
    //</AuthProvider>
  );
}
