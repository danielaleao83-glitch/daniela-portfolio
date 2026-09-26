const cloud = [
  "AWS",
  "AWS CLI",
  "Azure",
  "Docker",
  "Git",
  "GitHub Actions",
  "Azure DevOps",
  "CI/CD",
  "IAM",
  "EC2",
  "S3",
  "VPC",
  "RDS",
  "CloudWatch",
  "Render",
  "Nginx",
  "PHP-FPM",
  "HTTPS",
];

export default function CloudDevOps() {
  return (
    <section id="cloud" className="section cloud-section">
      <div className="cloud-glow" />

      <div className="section-label">04 / CLOUD & DEVOPS</div>

      <div className="cloud-heading">
        <div>
          <p className="section-kicker">CLOUD INFRASTRUCTURE</p>
          <h2>
            Da aplicação
            <span> ao deploy.</span>
          </h2>
        </div>

        <p>
          Conhecimentos em cloud, automação, integração contínua, infraestrutura
          e implantação de aplicações.
        </p>
      </div>

      <div className="cloud-architecture">
        <div className="cloud-node">
          <span>01</span>
          <strong>CODE</strong>
          <small>Git · GitHub</small>
        </div>

        <div className="cloud-line" />

        <div className="cloud-node">
          <span>02</span>
          <strong>CI/CD</strong>
          <small>Automation</small>
        </div>

        <div className="cloud-line" />

        <div className="cloud-node">
          <span>03</span>
          <strong>CLOUD</strong>
          <small>AWS · Azure</small>
        </div>

        <div className="cloud-line" />

        <div className="cloud-node">
          <span>04</span>
          <strong>DEPLOY</strong>
          <small>HTTPS · Nginx</small>
        </div>
      </div>

      <div className="cloud-tags">
        {cloud.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
