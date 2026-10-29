import { useState, useEffect } from "react";
import SiteHeader from "./components/portfolio/SiteHeader";
import HeroSection from "./components/portfolio/HeroSection";
import MarqueeTicker from "./components/portfolio/MarqueeTicker";
import CaseStudyGrid from "./components/portfolio/CaseStudyGrid";
import CapabilityGroups from "./components/portfolio/CapabilityGroups";
import ServiceGrid from "./components/portfolio/ServiceGrid";
import ExperienceTimeline from "./components/portfolio/ExperienceTimeline";
import TestimonialSection from "./components/portfolio/TestimonialSection";
import ContactSection from "./components/portfolio/ContactSection";
import SiteFooter from "./components/portfolio/SiteFooter";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="portfolio-app" data-theme={theme}>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <HeroSection />
        <MarqueeTicker />
        <CaseStudyGrid />
        <CapabilityGroups />
        <ServiceGrid />
        <ExperienceTimeline />
        <TestimonialSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
