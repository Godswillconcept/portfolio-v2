import { useState, useEffect, useCallback, useRef } from "react";
import { FiCheckCircle, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../../content/profile";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused]       = useState(false);
  const intervalRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index) => {
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  /* Auto-advance every 5 s, pause on hover */
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, [goNext, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section
      className="section testimonial-wrapper"
      id="testimonial"
      aria-labelledby="testimonial-title"
    >
      {/* Section heading */}
      <div className="section-heading">
        <p className="section-eyebrow">
          <span className="eyebrow-accent">06 /</span> Client Ratings &amp; Trust
        </p>
        <h2 id="testimonial-title" className="section-title">
          Endorsed by founders &amp; <span className="title-serif">engineering leads.</span>
        </h2>
        <div className="testimonial-summary-badge">
          <div className="star-rating-row" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="star-icon filled" aria-hidden="true" />
            ))}
            <span className="rating-label">5.0 / 5.0 Rating</span>
          </div>
          <span className="summary-sep">&bull;</span>
          <span className="verified-badge">
            <FiCheckCircle aria-hidden="true" /> 100% On-Time Delivery Across Production Releases
          </span>
        </div>
      </div>

      {/* Slider */}
      <div
        className="testimonials-slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-roledescription="carousel"
        aria-label="Client testimonials"
      >
        {/*
          CSS Grid stacking: every slide sits in the same grid cell (1/1).
          All slides are in normal document flow → the grid row height is
          automatically driven by the TALLEST card. No JS measurement needed.
        */}
        <div className="testimonials-slide-viewport">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={item.id}
                className={`testimonial-card testimonial-slide${isActive ? " ts-active" : ""}`}
                aria-hidden={!isActive}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${index + 1} of ${total}`}
              >
                <div className="testimonial-card-glow" aria-hidden="true" />

                <div className="testimonial-card-header">
                  <div className="star-rating-row">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar key={i} className="star-icon filled" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="testimonial-tag">{item.tag}</span>
                </div>

                <div className="testimonial-quote-box">
                  <span className="testimonial-quote-glyph" aria-hidden="true">&ldquo;</span>
                  <p className="testimonial-text">{item.quote}</p>
                </div>

                <div className="testimonial-author-row">
                  <div className="author-avatar-badge">{item.avatar}</div>
                  <div className="author-info">
                    <strong className="author-name">{item.name}</strong>
                    <span className="author-role">
                      {item.role} &bull; {item.company}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Controls: prev | dots | next */}
        <div className="testimonials-controls">
          <button
            className="testimonials-nav-btn"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>

          <div className="testimonials-dots" role="tablist" aria-label="Select testimonial">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`testimonials-dot${i === activeIndex ? " ts-dot-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            className="testimonials-nav-btn"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Progress bar — key resets animation on each slide change */}
        <div
          className={`testimonials-progress-bar${isPaused ? " ts-progress-paused" : ""}`}
          key={`${activeIndex}-${isPaused}`}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
