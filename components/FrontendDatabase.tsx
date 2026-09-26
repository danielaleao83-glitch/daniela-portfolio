const frontend = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Blade",
  "Tailwind CSS",
  "Bootstrap",
  "Inertia.js",
  "Vite",
];

const databases = [
  "PostgreSQL",
  "MySQL",
  "MariaDB",
  "Firebird",
  "SQLite",
];

export default function FrontendDatabase() {
  return (
    <section className="section split-section">
      <div className="split-panel blue-panel">
        <div className="section-label">03 / FRONTEND</div>

        <p className="section-kicker">INTERFACE & EXPERIÊNCIA</p>

        <h2>
          Interfaces
          <span> modernas.</span>
        </h2>

        <div className="pill-list">
          {frontend.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="split-panel cyan-panel">
        <div className="section-label">DATABASE</div>

        <p className="section-kicker">DADOS & PERSISTÊNCIA</p>

        <h2>
          Dados
          <span> estruturados.</span>
        </h2>

        <div className="pill-list">
          {databases.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <p className="panel-description">
          Modelagem relacional, normalização, relacionamentos, migrations e
          persistência.
        </p>
      </div>
    </section>
  );
}
