const infrastructure = [
  "Windows Server",
  "Active Directory",
  "Microsoft 365",
  "Exchange",
  "VMware",
  "Linux",
  "TCP/IP",
  "DNS",
  "DHCP",
  "Zabbix",
  "PowerShell",
  "Virtualização",
  "Monitoramento",
  "Backup",
  "Segurança",
  "Continuidade Operacional",
];

export default function Infrastructure() {
  return (
    <section className="section infrastructure-section">
      <div className="section-label">05 / INFRAESTRUTURA & REDES</div>

      <div className="infra-layout">
        <div>
          <p className="section-kicker">FOUNDATION</p>

          <h2>
            A base por trás
            <span> da tecnologia.</span>
          </h2>

          <p className="infra-description">
            Experiência em ambientes corporativos, redes, servidores,
            virtualização, monitoramento, segurança, backup e continuidade
            operacional.
          </p>
        </div>

        <div className="network-map">
          <div className="network-center">NETWORK</div>

          <div className="network-node node-a">SERVER</div>
          <div className="network-node node-b">LINUX</div>
          <div className="network-node node-c">WINDOWS</div>
          <div className="network-node node-d">VMWARE</div>

          <div className="network-line line-a" />
          <div className="network-line line-b" />
          <div className="network-line line-c" />
          <div className="network-line line-d" />
        </div>
      </div>

      <div className="infra-tags">
        {infrastructure.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
