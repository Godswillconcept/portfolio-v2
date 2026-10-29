import { useState } from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiMapPin,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import { experience, education, certifications } from "../../content/profile";

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-header-row">
        <div className="section-heading">
          <p className="section-eyebrow">
            <span className="eyebrow-accent">04 /</span> Experience &amp; Journey
          </p>
          <h2 id="experience-title" className="section-title">
            Built through <span className="title-serif">real-world impact.</span>
          </h2>
          <p className="section-description">
            Arranged chronologically by year preferences: from solo production e-commerce architectures to lead cross-platform Flutter engineering and academic foundations.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="filter-pill-group exp-filter-group" role="tablist" aria-label="Filter experience view">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "all"}
            className={`filter-btn exp-tab-btn ${activeTab === "all" ? "is-active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Milestones
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "work"}
            className={`filter-btn exp-tab-btn ${activeTab === "work" ? "is-active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            <FiBriefcase /> Work Experience
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "edu"}
            className={`filter-btn exp-tab-btn ${activeTab === "edu" ? "is-active" : ""}`}
            onClick={() => setActiveTab("edu")}
          >
            <FiAward /> Education &amp; Certs
          </button>
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-spine" aria-hidden="true" />

        <div className="timeline-items-wrapper">
          {/* Work Experience Items (Chronological: 2024 -> 2022) */}
          {(activeTab === "all" || activeTab === "work") &&
            experience.map((item, index) => (
              <div className="timeline-card-node" key={`exp-${index}`}>
                <div className="timeline-node-pin" aria-hidden="true">
                  <span className="node-glow" />
                  <span className="node-dot" />
                </div>

                <div className="timeline-card-content">
                  <div className="timeline-card-header">
                    <div className="timeline-date-chip">
                      <FiCalendar aria-hidden="true" />
                      <span>{item.date}</span>
                    </div>
                    <div className="timeline-loc-chip">
                      <FiMapPin aria-hidden="true" />
                      <span>{item.location}</span>
                    </div>
                    <span className="timeline-tag-badge">{item.badgeType}</span>
                  </div>

                  <div className="timeline-role-row">
                    <h3 className="timeline-role-title">{item.role}</h3>
                    <span className="company-badge">
                      <FiBriefcase aria-hidden="true" />
                      <strong>{item.company}</strong>
                    </span>
                  </div>

                  <p className="timeline-detail">{item.detail}</p>

                  <div className="timeline-highlights">
                    {item.highlights.map((h, hIdx) => (
                      <span className="highlight-pill" key={hIdx}>
                        <FiCheckCircle /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          {/* Education Milestone (2021 — 2025) */}
          {(activeTab === "all" || activeTab === "edu") &&
            education.map((edu, eIdx) => (
              <div className="timeline-card-node edu-node" key={`edu-${eIdx}`}>
                <div className="timeline-node-pin" aria-hidden="true">
                  <span className="node-glow" />
                  <span className="node-dot edu-dot" />
                </div>

                <div className="timeline-card-content edu-content">
                  <div className="timeline-card-header">
                    <div className="timeline-date-chip edu-chip">
                      <FiCalendar aria-hidden="true" />
                      <span>{edu.date}</span>
                    </div>
                    <div className="timeline-loc-chip">
                      <FiMapPin aria-hidden="true" />
                      <span>{edu.location}</span>
                    </div>
                    <span className="timeline-tag-badge">Higher Education</span>
                  </div>

                  <div className="timeline-role-row">
                    <h3 className="timeline-role-title">{edu.degree}</h3>
                    <span className="company-badge">
                      <FiBookOpen aria-hidden="true" />
                      <strong>{edu.institution}</strong>
                    </span>
                  </div>

                  <p className="timeline-detail">{edu.detail}</p>
                </div>
              </div>
            ))}

          {/* Certifications Card (Chronological: 2022 -> 2021) */}
          {(activeTab === "all" || activeTab === "edu") && (
            <div className="timeline-card-node certs-node">
              <div className="timeline-node-pin" aria-hidden="true">
                <span className="node-glow" />
                <span className="node-dot certs-dot" />
              </div>

              <div className="timeline-card-content certs-content">
                <div className="timeline-card-header">
                  <div className="timeline-date-chip">
                    <FiAward aria-hidden="true" />
                    <span>2021 — 2022</span>
                  </div>
                  <span className="timeline-tag-badge">Professional Certifications</span>
                </div>

                <div className="timeline-role-row">
                  <h3 className="timeline-role-title">Technical Certifications &amp; Accreditations</h3>
                  <span className="company-badge">Alusoft Technologies</span>
                </div>

                <div className="certs-grid">
                  {certifications.map((cert, cIdx) => (
                    <div className="cert-tile" key={cIdx}>
                      <span className="cert-year">{cert.year}</span>
                      <div className="cert-info">
                        <strong>{cert.title}</strong>
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
