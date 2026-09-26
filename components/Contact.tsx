export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-grid" />

      <div className="section-label">10 / CONTATO</div>

      <div className="contact-content">
        <p className="section-kicker">LET&apos;S CONNECT</p>

        <h2>
          Vamos construir
          <span> algo relevante?</span>
        </h2>

        <p>
          Engenharia de software, cloud, infraestrutura, automação e
          tecnologia aplicada a soluções digitais.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:daniela.leao83@gmail.com"
            className="btn-primary"
          >
            daniela.leao83@gmail.com ↗
          </a>

          <a
            href="https://github.com/danielaleao83-glitch"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <footer>
        <span>© 2026 Daniela Leão da Silva</span>
        <span>Software Engineer Full Stack</span>
      </footer>
    </section>
  );
}
