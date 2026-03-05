import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CocktailsPage from "./pages/CocktailsPage";
import CocktailDetailPage from "./pages/CocktailDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigation />
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