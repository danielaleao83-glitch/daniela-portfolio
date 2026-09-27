export default function FrontendDatabase() {
  const frontend = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Blade",
    "Tailwind CSS",
    "Bootstrap",
    "Inertia.js",
    "React",
    "Next.js",
    "Vite",
  ];

  const databases = [
    ["PostgreSQL", "RELATIONAL"],
    ["MySQL", "RELATIONAL"],
    ["MariaDB", "RELATIONAL"],
    ["Firebird", "RELATIONAL"],
    ["SQLite", "RELATIONAL"],
  ];

  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden border-t border-white/[.06] bg-[#071018] px-[6vw] py-28 text-[#f4f7fa]"
    >
      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            03 / FRONTEND & DATABASE
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/[.08] bg-[#09131d] p-7 md:p-9">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#45c7b8]/[.05] blur-3xl" />

            <p className="relative text-[9px] font-bold tracking-[.2em] text-[#45c7b8]">
              INTERFACE & EXPERIÊNCIA
            </p>

            <h2 className="relative mt-4 text-[clamp(2.4rem,4.5vw,4.4rem)] font-bold leading-none tracking-[-.06em]">
              Interfaces
              <span className="block font-normal text-[#8195a6]">
                modernas.
              </span>
            </h2>

            <p className="relative mt-6 max-w-[650px] text-[13px] leading-7 text-[#8497a7]">
              Desenvolvimento de interfaces responsivas, componentização e
              integração entre Front-end e Back-end.
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {frontend.map((item, index) => (
                <div
                  key={item}
                  className="group rounded-xl border border-white/[.07] bg-white/[.025] p-4 transition hover:-translate-y-1 hover:border-[#45c7b8]/30"
                >
                  <span className="text-[7px] font-mono text-[#41586a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong className="mt-3 block text-[11px] text-[#d5e0e7]">
                    {item}
                  </strong>

                  <div className="mt-3 h-px w-1/3 bg-[#45c7b8]/40 transition-all group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/[.08] bg-[#09131d] p-7 md:p-9">
            <p className="text-[9px] font-bold tracking-[.2em] text-[#45c7b8]">
              DADOS & PERSISTÊNCIA
            </p>

            <h2 className="mt-4 text-[clamp(2.4rem,4.5vw,4.4rem)] font-bold leading-none tracking-[-.06em]">
              Dados
              <span className="block font-normal text-[#8195a6]">
                estruturados.
              </span>
            </h2>

            <p className="mt-6 text-[13px] leading-7 text-[#8497a7]">
              Modelagem relacional, normalização, relacionamentos, migrations
              e persistência.
            </p>

            <div className="mt-8 space-y-3">
              {databases.map(([name, type], index) => (
                <div
                  key={name}
                  className="group flex items-center justify-between rounded-xl border border-white/[.07] bg-white/[.025] px-5 py-4 transition hover:border-[#45c7b8]/30 hover:bg-[#45c7b8]/[.03]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[8px] text-[#45c7b8]">
                      0{index + 1}
                    </span>
                    <strong className="text-sm">{name}</strong>
                  </div>

                  <span className="text-[7px] font-bold tracking-[.15em] text-[#617789]">
                    {type}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-[#45c7b8]/10 bg-black/[.15] p-5">
              <div className="flex items-center gap-2 font-mono text-[8px] text-[#627a8b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#45c7b8]" />
                DATABASE / SCHEMA
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["PATIENT", "VISIT", "USER", "AUDIT", "ROLE", "API"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/[.06] bg-white/[.02] py-3 text-center text-[7px] font-bold tracking-[.13em] text-[#718595]"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
