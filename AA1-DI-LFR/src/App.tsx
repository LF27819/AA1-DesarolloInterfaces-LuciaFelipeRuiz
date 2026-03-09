import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CocktailsPage from "./pages/CocktailsPage";
import CocktailDetailPage from "./pages/CocktailDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigation theme={theme} onToggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cocktails" element={<CocktailsPage />} />
            <Route path="/cocktails/:id" element={<CocktailDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}