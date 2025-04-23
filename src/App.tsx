import { Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import MemeTablePage from "./pages/MemeTablePage";
import MemeListPage from "./pages/MemeListPage";
import { HeroUIProvider } from "@heroui/react";

export default function App() {
  return (
    <HeroUIProvider>
      <div className="max-w-5xl mx-auto p-4">
        <AppNavbar />
        <Routes>
          <Route path="/table" element={<MemeTablePage />} />
          <Route path="/list" element={<MemeListPage />} />
          <Route path="*" element={<Navigate to="/table" />} />
        </Routes>
      </div>
    </HeroUIProvider>
  );
}
