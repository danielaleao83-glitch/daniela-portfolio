export default function Profile() {
  const pillars = [
    ["01", "SOFTWARE", "Engenharia Full Stack", "PHP · Laravel · Python · React"],
    ["02", "INFRA", "Infraestrutura & Redes", "Windows · Linux · VMware · TCP/IP"],
    ["03", "CLOUD", "Cloud & DevOps", "AWS · Azure · Docker · CI/CD"],
    ["04", "HEALTH", "Saúde Digital", "Sistemas · Integração · Operação"],
  ];

  return (
    <section
      id="perfil"
      className="relative overflow-hidden border-t border-white/[.06] bg-[#071018] px-[6vw] py-28 text-[#f4f7fa]"
    >
      <div className="pointer-events-none absolute left-[-180px] top-24 h-[480px] w-[480px] rounded-full bg-[#45c7b8]/[.04] blur-[140px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#427eb3]/[.035] blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "82px 82px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            01 / PERFIL PROFISSIONAL
          </span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[.24em] text-[#45c7b8]">
              EXPERIÊNCIA MULTIDISCIPLINAR
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.3rem)] font-bold leading-[.95] tracking-[-.065em]">
              Software,
              <span className="block font-normal text-[#8296a7]">
                infraestrutura e tecnologia.
              </span>
            </h2>

            <p className="mt-8 max-w-[690px] text-[15px] leading-8 text-[#8b9eae]">
              Profissional de Tecnologia da Informação com 18+ anos de
              experiência em Infraestrutura, Redes, Governança, Cloud
              Computing, Suporte Especializado e Engenharia de Software.
            </p>

            <div className="mt-8 rounded-2xl border border-white/[.08] bg-white/[.025] p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold tracking-[.2em] text-[#617688]">
                  PROFILE / CORE
                </span>

                <span className="flex items-center gap-2 text-[8px] font-bold tracking-[.16em] text-[#6fc0b5]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#45c7b8]" />
                  ACTIVE
                </span>
              </div>

              <p className="mt-5 text-[13px] leading-7 text-[#a2b0bc]">
                Atuação em Engenharia de Software Full Stack com PHP, Laravel,
                Python, JavaScript, HTML5, CSS3, Blade, Tailwind CSS e Vite,
                bancos relacionais, arquitetura MVC, APIs REST, autenticação,
                validação, migrations e Git.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(([number, title, description, stack], index) => (
              <article
                key={number}
                className="group relative overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.025] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:rotate-[.2deg] hover:border-[#45c7b8]/30 hover:bg-white/[.04] hover:shadow-[0_25px_70px_rgba(0,0,0,.28)]"
              >
                <div className="absolute right-5 top-5 text-[8px] font-bold tracking-[.2em] text-[#344b5b]">
                  {number}
                </div>

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#45c7b8]/[.06] blur-2xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#45c7b8]/20 bg-[#45c7b8]/[.06] text-xs font-black text-[#62d4c4]">
                    {index === 0 ? "</>" : index === 1 ? "01" : index === 2 ? "☁" : "♡"}
                  </div>

                  <p className="mt-6 text-[9px] font-bold tracking-[.2em] text-[#607587]">
                    {title}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-[-.02em]">
                    {description}
                  </h3>

                  <p className="mt-4 text-[11px] leading-6 text-[#7d91a1]">
                    {stack}
                  </p>

                  <div className="mt-6 h-px overflow-hidden bg-white/[.07]">
                    <div className="h-full w-1/3 bg-[#45c7b8]/60 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          {[
            ["18+", "ANOS EM TECNOLOGIA"],
            ["FULL STACK", "ENGENHARIA DE SOFTWARE"],
            ["CLOUD", "INFRAESTRUTURA & DEVOPS"],
            ["SAÚDE", "SAÚDE DIGITAL"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-xl border border-white/[.07] bg-[#09131c]/70 p-5"
            >
              <strong className="block text-base text-[#e6edf2]">
                {value}
              </strong>
              <span className="mt-2 block text-[8px] font-bold tracking-[.16em] text-[#657a8c]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
