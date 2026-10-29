import { useEffect, useState } from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../../content/profile";

export default function SiteFooter() {
  const [watTime, setWatTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setWatTime(timeStr);
      } catch {
        setWatTime("12:00 PM");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="editorial-footer">
      <div className="footer-top-row">
        <div className="footer-brand-box">
          <div className="footer-wordmark">
            <span className="badge">OA</span>
            <strong>{profile.name}</strong>
          </div>
          <p className="footer-tagline">
            Full-Stack Product &amp; Mobile Developer &bull; Ibadan, Nigeria
          </p>
        </div>

        {/* Live Local Time Widget */}
        <div className="footer-time-card">
          <div className="time-header">
            <span className="live-clock-dot" />
            <span>LOCAL TIME (WAT / UTC+1)</span>
          </div>
          <div className="time-display">{watTime || "09:30 AM"}</div>
          <span className="time-sub">Ibadan, Nigeria &bull; Available for sync</span>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="X (Twitter)"
          >
            <FiTwitter />
          </a>
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div className="footer-copy-text">
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        </div>

        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <FiArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
