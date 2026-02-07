import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";

import AboutPage from "./Pages/AboutPage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
