const items = [
  ["PHP 8.x", "Backend"],
  ["Laravel", "Framework"],
  ["Python", "Programming"],
  ["MVC", "Architecture"],
  ["SOLID", "Principles"],
  ["Clean Code", "Quality"],
  ["Design Patterns", "Architecture"],
  ["APIs REST", "Integration"],
  ["Eloquent ORM", "Persistence"],
  ["Composer", "Dependency"],
  ["Artisan", "CLI"],
  ["Middleware", "Backend"],
  ["Services", "Architecture"],
  ["DTOs", "Architecture"],
  ["Authentication", "Security"],
  ["Authorization", "Security"],
];

export default function SoftwareEngineering() {
  return (
    <section id="tecnologias" className="section technology-section">
      <div className="section-label">02 / SOFTWARE ENGINEERING</div>

      <div className="section-intro">
        <div>
          <p className="section-kicker">BACKEND & ARQUITETURA</p>
          <h2>
            Engenharia para
            <span> aplicações robustas.</span>
          </h2>
        </div>

        <p>
          Desenvolvimento orientado a arquitetura, qualidade de código,
          integração de sistemas, APIs e boas práticas de engenharia.
        </p>
      </div>

      <div className="technology-grid">
        {items.map(([name, category]) => (
          <div className="technology-card" key={name}>
            <span className="tech-icon">◆</span>
            <div>
              <strong>{name}</strong>
              <small>{category}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
