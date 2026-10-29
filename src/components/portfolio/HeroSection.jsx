import { FiArrowDown, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../../content/profile";
import reactIcon from "../../assets/react.webp";
import flutterIcon from "../../assets/flutter.webp";
import nodeIcon from "../../assets/nodejs.webp";

export default function HeroSection() {
  return (
    <section className="hero-bento" id="top" aria-labelledby="hero-title">
      {/* Background glow effects */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-ambient-orb" aria-hidden="true" />

      <div className="hero-grid">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-main-card">
          <div className="hero-tag-row">
            <span className="location-chip">
              <FiMapPin aria-hidden="true" /> {profile.location}
            </span>
            <span className="availability-chip">
              <span className="pulse-indicator" /> {profile.availability}
            </span>
          </div>

          <h1 id="hero-title" className="hero-headline">
            Building dependable <span className="headline-italic">digital products</span> from concept to code.
          </h1>

          <p className="hero-lead">
            {profile.intro}
          </p>

          <div className="hero-cta-group">
            <a className="btn btn-primary" href="#work">
              <span>Explore Selected Work</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a
              className="btn btn-secondary"
              href={profile.cv}
              download="Olatunji_Abass_CV.pdf"
            >
              <FiDownload aria-hidden="true" />
              <span>Download CV</span>
            </a>

            <a
              className="btn btn-whatsapp"
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Bento Metrics Bar */}
          <div className="hero-metrics-bento">
            {profile.metrics.map((m, idx) => (
              <div className="metric-tile" key={idx}>
                <span className="metric-val">{m.value}</span>
                <span className="metric-title">{m.label}</span>
                <span className="metric-sub">{m.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Portrait & Floating Ecosystem */}
        <div className="hero-visual-card">
          <div className="portrait-container">
            {/* Ambient Radial Spotlight */}
            <div className="portrait-glow" aria-hidden="true" />

            <div className="portrait-image-wrapper">
              <img
                src={profile.portrait}
                alt={profile.name}
                className="portrait-img"
                width="480"
                height="560"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            {/* Floating Tech Chips */}
            <div className="floating-badge badge-top-right">
              <img src={flutterIcon} alt="Flutter" className="badge-icon" width="26" height="26" decoding="async" />
              <div className="badge-info">
                <strong>Flutter</strong>
                <span>Mobile Apps</span>
              </div>
            </div>

            <div className="floating-badge badge-mid-left">
              <img src={reactIcon} alt="React" className="badge-icon" width="26" height="26" decoding="async" />
              <div className="badge-info">
                <strong>React</strong>
                <span>Modern Web</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-right">
              <img src={nodeIcon} alt="Node.js" className="badge-icon" width="26" height="26" decoding="async" />
              <div className="badge-info">
                <strong>Node.js</strong>
                <span>APIs & Workflows</span>
              </div>
            </div>

            {/* Visual Stamp Card */}
            <div className="portrait-stamp">
              <span className="stamp-sub">FULL-STACK & MOBILE</span>
              <span className="stamp-highlight">EST. 2021</span>
            </div>
          </div>

          <a href="#work" className="hero-scroll-pill" aria-label="Scroll to work">
            <FiArrowDown aria-hidden="true" />
            <span>Scroll to see projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
