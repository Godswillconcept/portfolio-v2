export default function MarqueeTicker() {
  const items = [
    "Full-Stack Engineering",
    "Flutter Mobile Apps",
    "React & Modern Web",
    "Node.js & Express APIs",
    "SQL Database Architectures",
    "Figma-to-Code Precision",
    "Cross-Platform iOS & Android",
    "Secure JWT Workflows",
  ];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {/* Double list for continuous seamless infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <div className="marquee-item" key={idx}>
            <span className="marquee-star">✦</span>
            <span className="marquee-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
