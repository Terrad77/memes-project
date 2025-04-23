import { Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import MemeTablePage from "./pages/MemeTablePage";
import MemeListPage from "./pages/MemeListPage";
import { HeroUIProvider } from "@heroui/react";

export default function App() {
  return (
    <HeroUIProvider>
      <div className="flex flex-col min-h-screen">
        <AppNavbar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/table" element={<MemeTablePage />} />
              <Route path="/list" element={<MemeListPage />} />
              <Route path="*" element={<Navigate to="/table" replace />} />
            </Routes>
          </div>
        </main>

        {/* Можно добавить футер */}
      </div>
    </HeroUIProvider>
  );
}
