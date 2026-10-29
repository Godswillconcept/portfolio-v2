import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiExternalLink, FiLayers, FiSmartphone, FiMonitor } from "react-icons/fi";
import { projects } from "../../content/profile";

export default function CaseStudyGrid() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "web") return p.mockupType === "browser" || p.mockupType === "dashboard";
    if (filter === "mobile") return p.mockupType === "mobile";
    return true;
  });

  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="section-header-row">
        <div className="section-heading">
          <p className="section-eyebrow">
            <span className="eyebrow-accent">01 /</span> Case Studies
          </p>
          <h2 id="work-title" className="section-title">
            Featured products &amp; <span className="title-serif">engineered systems.</span>
          </h2>
          <p className="section-description">
            Selected applications spanning high-concurrency event platforms, commerce engines, and fluid cross-platform mobile products.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pill-group" role="tablist" aria-label="Filter projects">
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            className={`filter-btn ${filter === "all" ? "is-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            <FiLayers /> All ({projects.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === "web"}
            className={`filter-btn ${filter === "web" ? "is-active" : ""}`}
            onClick={() => setFilter("web")}
          >
            <FiMonitor /> Web &amp; APIs
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === "mobile"}
            className={`filter-btn ${filter === "mobile" ? "is-active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            <FiSmartphone /> Flutter Mobile
          </button>
        </div>
      </div>

      <div className="bento-project-grid">
        {filteredProjects.map((project) => (
          <article
            className={`bento-project-card bento-card-${project.mockupType}`}
            key={project.number}
          >
            {/* Project Simulated UI Mockup Header */}
            <div className="mockup-window" aria-hidden="true">
              <div className="mockup-header-bar">
                <div className="traffic-lights">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="mockup-address-bar">
                  <span>github.com/godswillconcept/{project.id}</span>
                </div>
                <div className="mockup-tag">
                  {project.mockupType === "mobile" ? "Flutter App" : "Production Web"}
                </div>
              </div>

              {/* Dynamic Interactive Preview Canvas */}
              <div className={`mockup-canvas canvas-${project.mockupType}`}>
                {project.mockupType === "browser" && (
                  <div className="preview-browser-content">
                    <div className="browser-nav-mock">
                      <div className="mock-logo">EventHub.ng</div>
                      <div className="mock-nav-links">
                        <span className="active">Discover</span>
                        <span>Tickets</span>
                        <span>My Passes</span>
                      </div>
                      <div className="mock-btn">Get Ticket</div>
                    </div>
                    <div className="browser-hero-mock">
                      <div className="mock-badge">LIVE EVENT TICKETING</div>
                      <h4>Lagos Tech Summit 2026</h4>
                      <p>Instant QR Verification &bull; Multi-tier Access</p>
                      <div className="mock-ticket-card">
                        <div className="ticket-left">
                          <span className="ticket-tier">VIP PASS #0482</span>
                          <span className="ticket-event">Main Stage Access</span>
                        </div>
                        <div className="ticket-qr">QR CODE</div>
                      </div>
                    </div>
                  </div>
                )}

                {project.mockupType === "dashboard" && (
                  <div className="preview-dashboard-content">
                    <div className="dash-sidebar-mock">
                      <div className="dash-icon active" />
                      <div className="dash-icon" />
                      <div className="dash-icon" />
                    </div>
                    <div className="dash-main-mock">
                      <div className="dash-header-mock">
                        <span>StoreHive Analytics</span>
                        <span className="dash-status">API: 200 OK</span>
                      </div>
                      <div className="dash-stat-row">
                        <div className="dash-card">
                          <span className="dash-label">Active Orders</span>
                          <span className="dash-num">1,248</span>
                        </div>
                        <div className="dash-card highlight">
                          <span className="dash-label">Inventory Sync</span>
                          <span className="dash-num">99.8%</span>
                        </div>
                      </div>
                      <div className="dash-chart-mock">
                        <div className="bar b1" />
                        <div className="bar b2" />
                        <div className="bar b3" />
                        <div className="bar b4" />
                        <div className="bar b5" />
                        <div className="bar b6" />
                      </div>
                    </div>
                  </div>
                )}

                {project.mockupType === "mobile" && (
                  <div className="preview-phone-mock">
                    <div className="phone-screen">
                      <div className="phone-notch">
                        <span className="speaker" />
                        <span className="camera" />
                      </div>
                      <div className="phone-app-header">
                        <div className="phone-avatar" />
                        <span>Discovaa</span>
                        <div className="phone-badge">Explore</div>
                      </div>
                      <div className="phone-featured-card">
                        <span className="phone-tag">Trending Place</span>
                        <h5>Heritage Art Gallery</h5>
                        <div className="phone-rating">★ 4.9 (120 reviews)</div>
                      </div>
                      <div className="phone-quick-actions">
                        <div className="action-pill active">All</div>
                        <div className="action-pill">Eats</div>
                        <div className="action-pill">Events</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Project Details Footer */}
            <div className="bento-card-body">
              <div className="card-meta-row">
                <span className="project-index">{project.number}</span>
                <span className="project-eyebrow">{project.eyebrow}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Tag Pills */}
              <div className="project-tag-row">
                {project.tags.map((tag) => (
                  <span className="tech-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-action-row">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-action-link primary"
                >
                  <FiGithub />
                  <span>View Code Repository</span>
                  <FiArrowUpRight />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="card-action-link secondary"
                  >
                    <FiExternalLink />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
