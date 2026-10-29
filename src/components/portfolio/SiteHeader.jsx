import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMoon, FiSun, FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { profile } from "../../content/profile";

const links = [
  ["Work", "work"],
  ["Tech Stack", "stack"],
  ["Services", "services"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function SiteHeader({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header-wrapper ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header">
          {/* Brand Wordmark */}
          <a
            className="wordmark"
            href="#top"
            onClick={close}
            aria-label="Olatunji Abass home"
          >
            <span className="wordmark-badge">OA</span>
            <span className="wordmark-name">Olatunji<span>.</span></span>
          </a>

          {/* Availability Beacon */}
          <div className="header-status-pill" title="Current Status">
            <span className="status-ping" />
            <span className="status-dot" />
            <span className="status-text">Available for new projects</span>
          </div>

          {/* Desktop Navigation */}
          <nav
            id="primary-navigation"
            className={`site-nav ${open ? "is-open" : ""}`}
            aria-label="Primary navigation"
          >
            <div className="nav-links">
              {links.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={close} className="nav-link">
                  {label}
                </a>
              ))}
            </div>

            <div className="nav-socials">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="X (Twitter) Profile"
              >
                <FiTwitter />
              </a>
            </div>

            <div className="nav-actions">
              <a
                className="nav-resume-btn"
                href={profile.cv}
                download="Olatunji_Abass_CV.pdf"
                onClick={close}
              >
                <span>CV</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>

              {/* Theme Toggle Button */}
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
              >
                {theme === "dark" ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
              </button>
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="mobile-controls">
            <button
              type="button"
              className="theme-toggle-btn mobile-theme-btn"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <button
              className="menu-button"
              type="button"
              aria-expanded={open}
              aria-controls="primary-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
