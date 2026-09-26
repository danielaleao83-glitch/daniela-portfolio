export default function Education() {
  return (
    <section id="formacao" className="section education-section">
      <div className="section-label">09 / FORMAÇÃO ACADÊMICA</div>

      <div className="education-list">
        <article className="education-item">
          <span className="education-year">2011</span>

          <div>
            <p>PÓS-GRADUAÇÃO</p>
            <h2>Análise de Sistemas</h2>
            <span>UFRA</span>
          </div>

          <div className="education-detail">
            Requisitos · Modelagem · Engenharia de Software · Arquitetura ·
            Dados · Desenvolvimento · Processos · Projetos
          </div>
        </article>

        <article className="education-item">
          <span className="education-year">2010</span>

          <div>
            <p>TECNOLOGIA</p>
            <h2>Redes de Computadores</h2>
            <span>ESAMAZ</span>
          </div>

          <div className="education-detail">
            TCP/IP · Endereçamento · Sub-redes · Roteamento · Switching ·
            LAN/WAN · DNS/DHCP · Segurança · Servidores · Virtualização
          </div>
        </article>
      </div>
    </section>
  );
}
