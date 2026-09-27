export default function Governance() {
  const governance = [
    ["01", "ITIL", "Gestão de serviços e melhoria contínua"],
    ["02", "SLA", "Disponibilidade, atendimento e indicadores"],
    ["03", "AGILE", "Scrum · Kanban · entrega incremental"],
    ["04", "DEVOPS", "Integração entre desenvolvimento e operações"],
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[.06] bg-[#071018] px-[6vw] py-28 text-[#f4f7fa]">
      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            08 / GOVERNANÇA & METODOLOGIAS
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-[9px] font-bold tracking-[.22em] text-[#45c7b8]">
              DELIVERY & GOVERNANCE
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-bold leading-none tracking-[-.065em]">
              Tecnologia com
              <span className="block font-normal text-[#8297a9]">
                processo.
              </span>
            </h2>

            <p className="mt-7 max-w-[580px] text-[14px] leading-8 text-[#879aaa]">
              Experiência com práticas de governança, gestão de serviços,
              metodologias ágeis, DevOps e melhoria contínua.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {governance.map(([number, title, description]) => (
              <article
                key={number}
                className="group rounded-2xl border border-white/[.08] bg-white/[.025] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#45c7b8]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-[#45c7b8]">
                    {number}
                  </span>
                  <span className="h-px w-12 bg-[#45c7b8]/30 transition-all group-hover:w-20" />
                </div>

                <h3 className="mt-8 text-xl font-bold">{title}</h3>

                <p className="mt-3 text-[10px] leading-6 text-[#788d9d]">
                  {description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {title === "ITIL" &&
                    ["Incident", "Change", "Service"].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/[.07] px-3 py-1.5 text-[7px] font-bold text-[#63798a]"
                      >
                        {x}
                      </span>
                    ))}

                  {title === "SLA" &&
                    ["Availability", "Response", "Metrics"].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/[.07] px-3 py-1.5 text-[7px] font-bold text-[#63798a]"
                      >
                        {x}
                      </span>
                    ))}

                  {title === "AGILE" &&
                    ["Scrum", "Kanban", "Incremental"].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/[.07] px-3 py-1.5 text-[7px] font-bold text-[#63798a]"
                      >
                        {x}
                      </span>
                    ))}

                  {title === "DEVOPS" &&
                    ["Build", "Deploy", "Observe"].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/[.07] px-3 py-1.5 text-[7px] font-bold text-[#63798a]"
                      >
                        {x}
                      </span>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
