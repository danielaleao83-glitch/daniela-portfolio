export default function Education() {
  const education = [
    {
      year: "2011",
      level: "PÓS-GRADUAÇÃO",
      title: "Análise de Sistemas",
      institution: "UFRA",
      description:
        "Requisitos · Modelagem · Engenharia de Software · Arquitetura · Dados · Desenvolvimento · Processos · Projetos",
    },
    {
      year: "2010",
      level: "TECNOLOGIA",
      title: "Redes de Computadores",
      institution: "ESAMAZ",
      description:
        "TCP/IP · Endereçamento · Sub-redes · Roteamento · Switching · LAN/WAN · DNS/DHCP · Segurança · Servidores · Virtualização",
    },
  ];

  return (
    <section
      id="formacao"
      className="relative overflow-hidden border-t border-white/[.06] bg-[#061019] px-[6vw] py-28 text-[#f4f7fa]"
    >
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            09 / FORMAÇÃO ACADÊMICA
          </span>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#45c7b8]/50 via-white/[.08] to-transparent md:left-1/2" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <article
                key={item.year}
                className={`relative grid gap-8 md:grid-cols-2 ${
                  index === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="hidden md:block" />

                <div className="relative rounded-3xl border border-white/[.08] bg-white/[.025] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#45c7b8]/30">
                  <span className="absolute left-[-33px] top-8 flex h-6 w-6 items-center justify-center rounded-full border border-[#45c7b8]/30 bg-[#071018] md:left-[-13px]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#45c7b8]" />
                  </span>

                  <div className="flex items-center justify-between">
                    <strong className="text-3xl tracking-[-.04em]">
                      {item.year}
                    </strong>
                    <span className="text-[8px] font-bold tracking-[.18em] text-[#63798a]">
                      {item.level}
                    </span>
                  </div>

                  <h2 className="mt-7 text-2xl font-bold">{item.title}</h2>

                  <p className="mt-2 text-sm font-semibold text-[#45c7b8]">
                    {item.institution}
                  </p>

                  <p className="mt-6 text-[11px] leading-7 text-[#8194a4]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
