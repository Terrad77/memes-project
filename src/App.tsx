import { Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import MemeTablePage from "./pages/MemeTablePage";
import MemeListPage from "./pages/MemeListPage";
import { HeroUIProvider } from "@heroui/react";
import { Meme } from "./types/memeTypes";
import defaultMemes from "./data/defaultMemes";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function App() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const savedMemes = Cookies.get("memes");
    if (savedMemes) {
      setMemes(JSON.parse(savedMemes));
    } else {
      setMemes(defaultMemes);
      Cookies.set("memes", JSON.stringify(defaultMemes), { expires: 7 });
    }
  }, []);

  const handleSave = (updatedMeme: Meme) => {
    const updated = memes.map((meme) =>
      meme.id === updatedMeme.id ? updatedMeme : meme
    );
    setMemes(updated);
    Cookies.set("memes", JSON.stringify(updated), { expires: 7 });
  };

  return (
    <HeroUIProvider>
      <div className="flex flex-col min-h-screen">
        <AppNavbar />
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto w-full">
            <Routes>
              <Route
                path="/table"
                element={<MemeTablePage memes={memes} onSave={handleSave} />}
              />
              <Route path="/list" element={<MemeListPage memes={memes} />} />
              <Route path="*" element={<Navigate to="/table" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </HeroUIProvider>
  );
}
