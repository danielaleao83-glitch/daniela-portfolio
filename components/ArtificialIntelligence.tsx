const items = [
  "IA Generativa",
  "ChatGPT",
  "GitHub Copilot",
  "Engenharia de Prompt",
  "IA aplicada ao desenvolvimento",
  "Automação",
];

export default function ArtificialIntelligence() {
  return (
    <section className="section ai-section">
      <div className="ai-grid" />

      <div className="section-label">07 / INTELIGÊNCIA ARTIFICIAL</div>

      <div className="ai-content">
        <div>
          <p className="section-kicker">INTELLIGENCE LAYER</p>

          <h2>
            Inteligência aplicada
            <span> ao desenvolvimento.</span>
          </h2>
        </div>

        <div className="ai-orb">
          <div className="ai-core">AI</div>
          <div className="ai-ring ai-ring-one" />
          <div className="ai-ring ai-ring-two" />
        </div>
      </div>

      <div className="ai-tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
