const items = [
  "ITIL",
  "SLA",
  "Governança de TI",
  "Gestão de Incidentes",
  "Gestão de Mudanças",
  "Gestão de Serviços",
  "Scrum",
  "Kanban",
  "Agile",
  "DevOps",
  "Melhoria Contínua",
];

export default function Governance() {
  return (
    <section className="section governance-section">
      <div className="section-label">08 / GOVERNANÇA & METODOLOGIAS</div>

      <div className="governance-content">
        <div>
          <p className="section-kicker">DELIVERY & GOVERNANCE</p>

          <h2>
            Tecnologia com
            <span> processo.</span>
          </h2>
        </div>

        <div className="governance-text">
          <p>
            Experiência com práticas de governança, gestão de serviços,
            metodologias ágeis, DevOps e melhoria contínua.
          </p>

          <div className="governance-tags">
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
