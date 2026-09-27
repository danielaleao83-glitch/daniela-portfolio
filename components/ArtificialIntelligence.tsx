export default function ArtificialIntelligence() {
  const capabilities = [
    ["01", "IA GENERATIVA", "ChatGPT · modelos generativos"],
    ["02", "COPILOT", "Assistência de código · produtividade"],
    ["03", "PROMPT ENGINEERING", "Contexto · instruções · automação"],
    ["04", "AI DEV", "Refatoração · documentação · análise"],
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[.06] bg-[#050d14] px-[6vw] py-28 text-[#f4f7fa]">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#45c7b8]/[.035] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            07 / INTELIGÊNCIA ARTIFICIAL
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-[9px] font-bold tracking-[.22em] text-[#45c7b8]">
              INTELLIGENCE LAYER
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-bold leading-none tracking-[-.065em]">
              Inteligência aplicada
              <span className="block font-normal text-[#8297a9]">
                ao desenvolvimento.
              </span>
            </h2>

            <p className="mt-7 max-w-[590px] text-[14px] leading-8 text-[#879aaa]">
              Uso de Inteligência Artificial como camada de apoio à engenharia
              de software, automação, análise, documentação e produtividade.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#45c7b8]/15 bg-[#07131b] shadow-[0_25px_80px_rgba(0,0,0,.25)]">
              <div className="flex items-center gap-2 border-b border-white/[.06] px-5 py-4">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="ml-auto font-mono text-[7px] tracking-[.18em] text-[#536c7d]">
                  AI_ENGINE
                </span>
              </div>

              <div className="space-y-3 p-6 font-mono text-[9px]">
                <p className="text-[#657b8c]">
                  <span className="text-[#45c7b8]">$</span> analyze
                  <span className="text-[#c8d4dc]"> architecture.ts</span>
                </p>

                <p className="text-[#657b8c]">
                  <span className="text-[#45c7b8]">$</span> optimize
                  <span className="text-[#c8d4dc]"> backend</span>
                </p>

                <p className="text-[#657b8c]">
                  <span className="text-[#45c7b8]">$</span> generate
                  <span className="text-[#c8d4dc]"> documentation</span>
                </p>

                <p className="text-[#72c5ba]">
                  <span className="text-[#45c7b8]">✓</span> ENGINE READY
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map(([number, title, description]) => (
              <article
                key={number}
                className="group relative overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.025] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#45c7b8]/30 hover:bg-white/[.04]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#45c7b8]/[.05] blur-2xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#45c7b8]">
                      {number}
                    </span>

                    <span className="font-mono text-[8px] text-[#455c6d]">
                      AI
                    </span>
                  </div>

                  <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#45c7b8]/20 bg-[#45c7b8]/[.06] text-sm text-[#61d2c3]">
                    ✦
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{title}</h3>

                  <p className="mt-3 text-[10px] leading-6 text-[#788d9d]">
                    {description}
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
