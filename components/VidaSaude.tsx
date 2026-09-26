export default function VidaSaude() {
  const technologies = [
    "Laravel",
    "PHP",
    "PostgreSQL",
    "Blade",
    "Vite",
    "REST API",
  ];

  return (
    <section
      id="projetos"
      className="relative overflow-hidden border-t border-white/[.06] bg-[#071018] px-[6vw] py-28 text-[#f4f7fa]"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-[#45c7b8]/[.035] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/50" />
          <span className="text-[10px] font-bold tracking-[.24em] text-[#71879a]">
            06 / PROJETO EM DESTAQUE
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#45c7b8]/20 bg-[#45c7b8]/[.04] px-4 py-2 text-[9px] font-bold tracking-[.16em] text-[#8ebbb5]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#45c7b8]" />
              SISTEMA ONLINE
              <span className="h-3 w-px bg-white/10" />
              HEALTHCARE PLATFORM
            </div>

            <p className="mb-4 text-[10px] font-bold tracking-[.24em] text-[#607487]">
              ENGINEERING PROJECT / 001
            </p>

            <h2 className="text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-none tracking-[-.07em]">
              Vida<span className="text-[#45c7b8]">|</span>Saúde
            </h2>

            <h3 className="mt-6 max-w-[620px] text-2xl font-medium text-[#c8d3dc]">
              Prontuário Eletrônico & Gestão Assistencial
            </h3>

            <p className="mt-7 max-w-[670px] text-[15px] leading-8 text-[#899aa9]">
              Plataforma demonstrativa desenvolvida com Laravel para gestão
              assistencial, atendimento e organização de informações clínicas,
              conectando aplicação web, banco de dados e infraestrutura cloud.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 bg-white/[.025] px-3 py-2 text-[9px] font-bold tracking-[.1em] text-[#91a5b5] transition hover:border-[#45c7b8]/30 hover:text-[#b9dbd6]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 grid max-w-[650px] grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["ARCHITECTURE", "MVC · REST"],
                ["DATABASE", "PostgreSQL"],
                ["FRONTEND", "Blade · Vite"],
                ["DEPLOYMENT", "Render Cloud"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/[.08] bg-white/[.025] p-4"
                >
                  <small className="block text-[8px] font-bold tracking-[.14em] text-[#596e80]">
                    {label}
                  </small>
                  <strong className="mt-2 block text-[11px] text-[#dce4ea]">
                    {value}
                  </strong>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://vidasaudedemo.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#edf3f6] px-6 text-[10px] font-black tracking-[.13em] text-[#071018] transition hover:-translate-y-1 hover:bg-white"
              >
                ABRIR SISTEMA
                <span className="transition group-hover:translate-x-1">↗</span>
              </a>

              <a
                href="https://github.com/danielaleao83-glitch/vidasaudedemo"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 items-center gap-3 rounded-lg border border-[#45c7b8]/25 bg-[#45c7b8]/[.05] px-6 text-[10px] font-black tracking-[.13em] text-[#d7ebe8] transition hover:-translate-y-1 hover:border-[#45c7b8]/60 hover:bg-[#45c7b8]/[.1]"
              >
                VER CÓDIGO-FONTE
                <span className="text-[#45c7b8] transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[45px] bg-[#45c7b8]/[.025] blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#09131c]/90 shadow-[0_40px_100px_rgba(0,0,0,.4)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(69,199,184,.1),transparent_35%)]" />

              <div className="relative flex items-center justify-between border-b border-white/[.07] px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>

                <div className="text-[8px] font-bold tracking-[.18em] text-[#71889a]">
                  VIDA|SAÚDE / SYSTEM
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold tracking-[.14em] text-[#73bdb2]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#45c7b8]" />
                  ONLINE
                </div>
              </div>

              <div className="relative grid min-h-[530px] grid-cols-[62px_1fr]">
                <aside className="flex flex-col items-center gap-5 border-r border-white/[.06] bg-black/[.12] py-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[#45c7b8]/25 bg-[#45c7b8]/[.08] text-xs font-black text-[#65d9cb]">
                    V
                  </div>

                  <span className="h-8 w-8 rounded-lg bg-[#45c7b8]/10 ring-1 ring-[#45c7b8]/20" />
                  <span className="h-8 w-8 rounded-lg bg-white/[.03]" />
                  <span className="h-8 w-8 rounded-lg bg-white/[.03]" />
                  <span className="h-8 w-8 rounded-lg bg-white/[.03]" />
                  <span className="h-8 w-8 rounded-lg bg-white/[.03]" />
                </aside>

                <main className="p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <small className="block text-[8px] font-bold tracking-[.17em] text-[#5f7486]">
                        HEALTHCARE MANAGEMENT
                      </small>
                      <strong className="mt-2 block text-xl text-[#edf3f6]">
                        Dashboard assistencial
                      </strong>
                    </div>

                    <span className="rounded-md border border-[#45c7b8]/15 bg-[#45c7b8]/[.05] px-3 py-2 text-[8px] font-bold tracking-[.14em] text-[#6fc2b7]">
                      LIVE
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      ["PACIENTES", "1.248", "+12.4%"],
                      ["ATENDIMENTOS", "084", "HOJE"],
                      ["STATUS", "ONLINE", "99.9%"],
                    ].map(([label, value, meta]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/[.07] bg-white/[.025] p-4"
                      >
                        <small className="block text-[7px] font-bold tracking-[.14em] text-[#5d7285]">
                          {label}
                        </small>

                        <strong className="mt-3 block text-lg text-[#e6edf2]">
                          {value}
                        </strong>

                        <span className="mt-1 block text-[7px] font-bold tracking-[.1em] text-[#45c7b8]">
                          {meta}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-[1.3fr_.7fr]">
                    <div className="rounded-xl border border-white/[.07] bg-white/[.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold tracking-[.13em] text-[#708698]">
                          ATENDIMENTOS
                        </span>
                        <span className="text-[7px] text-[#516678]">24H</span>
                      </div>

                      <div className="mt-6 flex h-28 items-end gap-2">
                        {[35, 58, 42, 74, 52, 87, 63, 92, 68, 81, 48, 76].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="group relative flex-1"
                            >
                              <div
                                className="absolute bottom-0 w-full rounded-t-sm bg-[#45c7b8]/20 transition-all duration-300 group-hover:bg-[#45c7b8]/50"
                                style={{ height: `${height}%` }}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[.07] bg-white/[.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold tracking-[.13em] text-[#708698]">
                          SYSTEM
                        </span>
                        <span className="text-[7px] text-[#45c7b8]">
                          HEALTH
                        </span>
                      </div>

                      <div className="mt-5 space-y-4 font-mono text-[8px]">
                        {[
                          ["application", "ONLINE"],
                          ["database", "CONNECTED"],
                          ["deployment", "ACTIVE"],
                          ["api", "READY"],
                        ].map(([name, status], index) => (
                          <div
                            key={name}
                            className="flex items-center justify-between"
                          >
                            <span className="text-[#6e8191]">
                              <b className="mr-2 text-[#45c7b8]">
                                0{index + 1}
                              </b>
                              {name}
                            </span>
                            <span className="text-[#75bcb3]">{status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Laravel", "PostgreSQL", "REST API", "Cloud"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/[.06] px-2.5 py-1.5 text-[7px] font-bold tracking-[.1em] text-[#677c8d]"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </main>
              </div>
            </div>

            <div className="absolute -right-5 top-10 hidden rounded-xl border border-[#45c7b8]/20 bg-[#0b171f]/95 p-4 shadow-2xl backdrop-blur-xl xl:block">
              <small className="block text-[7px] font-bold tracking-[.16em] text-[#577082]">
                STACK
              </small>
              <strong className="mt-1 block text-sm text-[#dfe9ee]">
                PHP 8.x
              </strong>
              <span className="mt-1 block text-[8px] text-[#718697]">
                Laravel Framework
              </span>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#0b171f]/95 p-4 shadow-2xl backdrop-blur-xl xl:block">
              <small className="block text-[7px] font-bold tracking-[.16em] text-[#577082]">
                REPOSITORY
              </small>
              <strong className="mt-1 block text-sm text-[#dfe9ee]">
                GITHUB
              </strong>
              <span className="mt-1 block text-[8px] text-[#718697]">
                Source available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
