import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { services } from "../../content/profile";

export default function ServiceGrid() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="section-eyebrow">
          <span className="eyebrow-accent">03 /</span> Services &amp; Value
        </p>
        <h2 id="services-title" className="section-title">
          From first concept to <span className="title-serif">production delivery.</span>
        </h2>
        <p className="section-description">
          Delivering clean, maintainable, and high-performance digital products engineered for long-term scalability.
        </p>
      </div>

      <div className="services-bento-grid">
        {services.map((service) => (
          <article className="service-bento-card" key={service.number}>
            <div className="service-header-box">
              <div className="service-index-row">
                <span className="service-idx-badge">{service.number}</span>
                <span className="service-line-deco" aria-hidden="true" />
              </div>
              <span className="service-tagline-pill">{service.tagline}</span>
            </div>

            <h3 className="service-name">{service.title}</h3>
            <p className="service-body">{service.detail}</p>

            <div className="service-deliverables">
              <span className="deliverables-heading">What to expect:</span>
              <ul className="deliverable-list">
                {service.deliverables.map((item, idx) => (
                  <li key={idx}>
                    <FiCheck className="check-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-card-footer">
              <a href="#contact" className="service-cta-link">
                <span>Discuss this service</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
