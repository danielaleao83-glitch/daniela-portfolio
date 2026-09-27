export default function SoftwareEngineering() {
  const technologies = [
    ["PHP 8.x", "BACKEND"],
    ["Laravel", "FRAMEWORK"],
    ["Python", "PROGRAMMING"],
    ["MVC", "ARCHITECTURE"],
    ["SOLID", "PRINCIPLES"],
    ["Clean Code", "QUALITY"],
    ["Design Patterns", "ARCHITECTURE"],
    ["APIs REST", "INTEGRATION"],
    ["Eloquent ORM", "PERSISTENCE"],
    ["Composer", "DEPENDENCY"],
    ["Artisan", "CLI"],
    ["Middleware", "BACKEND"],
    ["Services", "ARCHITECTURE"],
    ["DTOs", "ARCHITECTURE"],
    ["Authentication", "SECURITY"],
    ["Authorization", "SECURITY"],
  ];

  const layers = [
    ["01", "DOMAIN", "Regras de negócio e organização das responsabilidades"],
    ["02", "APPLICATION", "Services · DTOs · Controllers · Validation"],
    ["03", "INTEGRATION", "REST APIs · JSON · Authentication · Middleware"],
    ["04", "PERSISTENCE", "Models · Eloquent ORM · Migrations · Database"],
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[.06] bg-[#061019] px-[6vw] py-28 text-[#f4f7fa]">
      <div className="pointer-events-none absolute right-[-150px] top-20 h-[500px] w-[500px] rounded-full bg-[#45c7b8]/[.035] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            02 / SOFTWARE ENGINEERING
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <p className="text-[10px] font-bold tracking-[.24em] text-[#45c7b8]">
              BACKEND & ARQUITETURA
            </p>

            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-bold leading-none tracking-[-.06em]">
              Engenharia para
              <span className="block font-normal text-[#8195a7]">
                aplicações robustas.
              </span>
            </h2>

            <p className="mt-7 max-w-[600px] text-[14px] leading-8 text-[#889baa]">
              Desenvolvimento orientado a arquitetura, qualidade de código,
              integração de sistemas, APIs e boas práticas de engenharia.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#45c7b8]/15 bg-[#07141c]">
              <div className="flex items-center justify-between border-b border-white/[.06] px-5 py-4">
                <span className="text-[8px] font-bold tracking-[.18em] text-[#607789]">
                  SOFTWARE ARCHITECTURE
                </span>

                <span className="font-mono text-[8px] text-[#45c7b8]">
                  SYSTEM_READY
                </span>
              </div>

              <div className="space-y-3 p-5 font-mono text-[10px]">
                <p className="text-[#546b7d]">
                  <span className="text-[#45c7b8]">01</span> / design
                  <span className="text-[#91a4b2]"> → SOLID</span>
                </p>
                <p className="text-[#546b7d]">
                  <span className="text-[#45c7b8]">02</span> / architecture
                  <span className="text-[#91a4b2]"> → MVC</span>
                </p>
                <p className="text-[#546b7d]">
                  <span className="text-[#45c7b8]">03</span> / integration
                  <span className="text-[#91a4b2]"> → REST API</span>
                </p>
                <p className="text-[#546b7d]">
                  <span className="text-[#45c7b8]">04</span> / persistence
                  <span className="text-[#91a4b2]"> → ELOQUENT</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {technologies.map(([name, category], index) => (
                <article
                  key={name}
                  className="group relative overflow-hidden rounded-xl border border-white/[.07] bg-white/[.025] p-5 transition duration-400 hover:-translate-y-1 hover:border-[#45c7b8]/30 hover:bg-white/[.04]"
                >
                  <div className="absolute right-4 top-4 text-[7px] font-mono text-[#385061]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="h-8 w-8 rounded-lg border border-[#45c7b8]/20 bg-[#45c7b8]/[.05] p-2">
                    <div className="h-full w-full rounded bg-[#45c7b8]/40 transition group-hover:bg-[#45c7b8]/80" />
                  </div>

                  <strong className="mt-5 block text-sm">{name}</strong>

                  <span className="mt-1 block text-[8px] font-bold tracking-[.16em] text-[#687e90]">
                    {category}
                  </span>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {layers.map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-xl border border-white/[.07] bg-[#09141d] p-5"
                >
                  <div className="flex justify-between">
                    <span className="text-[8px] font-bold text-[#45c7b8]">
                      {number}
                    </span>
                    <span className="text-[8px] font-bold tracking-[.16em] text-[#52697a]">
                      {title}
                    </span>
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-[#738898]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
