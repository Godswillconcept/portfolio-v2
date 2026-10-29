import { useState, useEffect, useCallback, useRef } from "react";
import { FiCheckCircle, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../../content/profile";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((index + total) % total);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, [goNext, isPaused]);

  // Pause on hover
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
        {/* Slide track */}
        <div className="testimonials-slide-viewport">
          {testimonials.map((item, index) => {
            const offset = index - activeIndex;
            // Only render prev, active, and next for perf
            const isActive = offset === 0;
            const isPrev = offset === -1 || (activeIndex === 0 && index === total - 1);
            const isNext = offset === 1 || (activeIndex === total - 1 && index === 0);

            let stateClass = "ts-hidden";
            if (isActive) stateClass = "ts-active";
            else if (isPrev) stateClass = "ts-prev";
            else if (isNext) stateClass = "ts-next";

            return (
              <article
                key={item.id}
                className={`testimonial-card testimonial-slide ${stateClass}`}
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

        {/* Navigation controls */}
        <div className="testimonials-controls">
          {/* Prev button */}
          <button
            className="testimonials-nav-btn"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>

          {/* Dot indicators */}
          <div className="testimonials-dots" role="tablist" aria-label="Select testimonial">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`testimonials-dot ${i === activeIndex ? "ts-dot-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            className="testimonials-nav-btn"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Progress bar */}
        <div
          className={`testimonials-progress-bar ${isPaused ? "ts-progress-paused" : ""}`}
          key={`${activeIndex}-${isPaused}`}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
