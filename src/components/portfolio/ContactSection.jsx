import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../../content/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("Thank you! Your message has been prepared. I'll get back to you within 24 hours.");
      e.target.reset();
    }, 800);
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-bento-grid">
        {/* Left Column: Direct Info & Instant Connect */}
        <div className="contact-info-card">
          <div className="section-eyebrow">
            <span className="eyebrow-accent">05 /</span> Start a Conversation
          </div>

          <h2 id="contact-title" className="contact-headline">
            Let&apos;s create something <span className="title-serif">remarkable.</span>
          </h2>

          <p className="contact-lead">
            Have a new product idea, an existing platform to overhaul, or a mobile app to launch? Reach out directly via WhatsApp, email, or the form.
          </p>

          <div className="contact-methods-stack">
            {/* Copy Email Button Card */}
            <div className="contact-method-card">
              <div className="method-icon-wrap"><FiMail /></div>
              <div className="method-text">
                <span className="method-label">Direct Email</span>
                <span className="method-value">{profile.socials.email}</span>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy to clipboard"
              >
                {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Direct WhatsApp Card */}
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="contact-method-card is-interactive"
            >
              <div className="method-icon-wrap icon-wa"><FaWhatsapp /></div>
              <div className="method-text">
                <span className="method-label">Instant WhatsApp Chat</span>
                <span className="method-value">{profile.socials.phone}</span>
              </div>
              <FiArrowUpRight className="method-arrow" />
            </a>

            {/* Direct Phone Card */}
            <a
              href={`tel:${profile.socials.phoneRaw}`}
              className="contact-method-card is-interactive"
            >
              <div className="method-icon-wrap"><FiPhone /></div>
              <div className="method-text">
                <span className="method-label">Voice Call</span>
                <span className="method-value">{profile.socials.phone}</span>
              </div>
              <FiArrowUpRight className="method-arrow" />
            </a>
          </div>

          <div className="availability-guarantee">
            <span className="ping-dot" />
            <span>Fast response time &bull; Available for freelance &amp; full-time contracts</span>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="contact-form-card">
          <h3 className="form-heading">Send a direct message</h3>
          <p className="form-sub">Fill out the details below and I&apos;ll review your scope promptly.</p>

          <form className="project-inquiry-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="project-category">Project Category</label>
              <select id="project-category" name="category" defaultValue="Full-Stack Web Application">
                <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                <option value="Flutter Mobile Application">Cross-Platform Flutter Mobile App</option>
                <option value="Backend / REST API Development">Backend / REST API &amp; Database</option>
                <option value="UI Revamp / Figma to Code">UI Revamp / Figma to Production Code</option>
                <option value="Other / Consulting">Other / Technical Consulting</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Project Overview</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                required
                placeholder="Tell me a bit about your timeline, goals, and technical requirements..."
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <span>Preparing...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend aria-hidden="true" />
                </>
              )}
            </button>

            {status && (
              <p className="form-success-banner" role="status">
                <FiCheck /> {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
