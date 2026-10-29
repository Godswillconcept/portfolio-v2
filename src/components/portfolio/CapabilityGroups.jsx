import { useState } from "react";
import { FiCheckCircle, FiCode, FiCpu, FiDatabase, FiSmartphone } from "react-icons/fi";
import { techStack, capabilities } from "../../content/profile";

export default function CapabilityGroups() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Design", "Tooling"];

  const filteredStack = techStack.filter((tech) => {
    if (activeCategory === "All") return true;
    return tech.category === activeCategory;
  });

  return (
    <section className="section tech-section" id="stack" aria-labelledby="stack-title">
      <div className="section-heading">
        <p className="section-eyebrow">
          <span className="eyebrow-accent">02 /</span> Technical Ecosystem
        </p>
        <h2 id="stack-title" className="section-title">
          Mastered tools &amp; <span className="title-serif">core competencies.</span>
        </h2>
        <p className="section-description">
          A dependable toolkit forged through real production builds — combining modern reactive frontends, resilient backend APIs, and native-grade mobile apps.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="tech-filter-row" role="tablist" aria-label="Filter tech stack">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            className={`tech-tab-btn ${activeCategory === cat ? "is-active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Cards Grid */}
      <div className="tech-cards-bento">
        {filteredStack.map((tech) => (
          <div className="tech-item-card" key={tech.name}>
            <div className="tech-icon-box">
              <img
                src={tech.icon}
                alt={tech.name}
                className="tech-brand-icon"
                width="38"
                height="38"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="tech-card-info">
              <span className="tech-card-name">{tech.name}</span>
              <span className="tech-card-category">{tech.category}</span>
            </div>
            <span className="tech-card-badge">{tech.level}</span>
          </div>
        ))}
      </div>

      {/* Architectural Pillars Bento */}
      <div className="capability-pillars-grid">
        <div className="pillar-card">
          <div className="pillar-header">
            <span className="pillar-icon-wrap"><FiCode /></span>
            <h3>Frontend Architecture</h3>
          </div>
          <p>Component-driven systems with React &amp; Tailwind CSS. Built with clean state management, modular design tokens, and fluid responsiveness.</p>
          <ul className="pillar-checklist">
            {capabilities.Frontend.map((item) => (
              <li key={item}><FiCheckCircle /> {item}</li>
            ))}
          </ul>
        </div>

        <div className="pillar-card">
          <div className="pillar-header">
            <span className="pillar-icon-wrap"><FiCpu /></span>
            <h3>Backend &amp; APIs</h3>
          </div>
          <p>Dependable Node.js, Express, and Laravel architectures. High-concurrency endpoints, JWT authentication security, and optimized SQL schemas.</p>
          <ul className="pillar-checklist">
            {capabilities.Backend.map((item) => (
              <li key={item}><FiCheckCircle /> {item}</li>
            ))}
          </ul>
        </div>

        <div className="pillar-card">
          <div className="pillar-header">
            <span className="pillar-icon-wrap"><FiSmartphone /></span>
            <h3>Cross-Platform Mobile</h3>
          </div>
          <p>Single-codebase Flutter engineering for Android &amp; iOS. Focused on 60fps animations, native sensor integrations, and offline-first persistence.</p>
          <ul className="pillar-checklist">
            {capabilities.Mobile.map((item) => (
              <li key={item}><FiCheckCircle /> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
