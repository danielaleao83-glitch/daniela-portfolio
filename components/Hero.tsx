export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#061018] px-[6vw] pb-20 pt-32 text-[#f4f7fa]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#45c7b8]/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-140px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#4b83b6]/[0.07] blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-[1550px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-7 flex items-center gap-3 text-[10px] font-bold tracking-[.28em] text-[#93a7b9]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#45c7b8]/60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#45c7b8]" />
            </span>
            SOFTWARE ENGINEER / FULL STACK
          </div>

          <h1 className="m-0 text-[clamp(3.4rem,7vw,7.5rem)] font-bold leading-[.88] tracking-[-.075em]">
            Daniela
            <span className="block font-normal text-[#99aebe]">
              Leão da Silva
            </span>
          </h1>

          <p className="mt-9 max-w-[760px] text-[clamp(1rem,1.35vw,1.2rem)] leading-[1.9] text-[#a8b6c4]">
            Engenheira de Software Full Stack com 18+ anos de experiência
            conectando engenharia de software, infraestrutura, cloud,
            operações e saúde digital.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#edf3f6] px-6 text-[11px] font-black tracking-[.12em] text-[#071018] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(255,255,255,.08)]"
            >
              EXPLORAR PROJETOS
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/danielaleao83-glitch"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 items-center gap-3 rounded-lg border border-[#45c7b8]/25 bg-[#45c7b8]/[0.05] px-6 text-[11px] font-black tracking-[.12em] text-[#d7ebe8] transition duration-300 hover:-translate-y-1 hover:border-[#45c7b8]/60 hover:bg-[#45c7b8]/[0.1]"
            >
              GITHUB / ENGINEERING
              <span className="text-[#45c7b8] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <div className="mt-12 grid max-w-[850px] grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#45c7b8]/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(69,199,184,.12),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <span className="text-[10px] font-bold tracking-[.18em] text-[#566b7e]">
                  01
                </span>
                <strong className="mt-7 block text-xs tracking-[.1em]">
                  SOFTWARE ENGINEERING
                </strong>
                <span className="mt-2 block text-[11px] leading-6 text-[#8496a8]">
                  Arquitetura · Backend · APIs
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#45c7b8]/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(69,199,184,.12),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <span className="text-[10px] font-bold tracking-[.18em] text-[#566b7e]">
                  02
                </span>
                <strong className="mt-7 block text-xs tracking-[.1em]">
                  FULL STACK
                </strong>
                <span className="mt-2 block text-[11px] leading-6 text-[#8496a8]">
                  Laravel · PHP · Python · React · Next.js
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#45c7b8]/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(69,199,184,.12),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <span className="text-[10px] font-bold tracking-[.18em] text-[#566b7e]">
                  03
                </span>
                <strong className="mt-7 block text-xs tracking-[.1em]">
                  CLOUD & DEVOPS
                </strong>
                <span className="mt-2 block text-[11px] leading-6 text-[#8496a8]">
                  AWS · Docker · CI/CD · Infraestrutura
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/[.08] pt-7">
            <div>
              <strong className="block text-xl font-bold">18+</strong>
              <span className="text-[9px] font-bold tracking-[.16em] text-[#687d8f]">
                ANOS DE EXPERIÊNCIA
              </span>
            </div>

            <div>
              <strong className="block text-xl font-bold">AI</strong>
              <span className="text-[9px] font-bold tracking-[.16em] text-[#687d8f]">
                TECNOLOGIA & AUTOMAÇÃO
              </span>
            </div>

            <div>
              <strong className="block text-xl font-bold">HEALTH</strong>
              <span className="text-[9px] font-bold tracking-[.16em] text-[#687d8f]">
                SAÚDE DIGITAL
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[560px] w-full max-w-[620px] items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full border border-[#45c7b8]/10" />
          <div className="absolute h-[330px] w-[330px] rounded-full border border-[#45c7b8]/10" />
          <div className="absolute h-[240px] w-[240px] rounded-full border border-[#45c7b8]/15" />

          <div className="absolute h-[390px] w-[390px] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-[#45c7b8]/20" />

          <div className="relative flex h-44 w-44 items-center justify-center rounded-[32px] border border-[#45c7b8]/30 bg-[#0b1822]/90 shadow-[0_0_90px_rgba(69,199,184,.12)] backdrop-blur-xl">
            <div className="absolute inset-3 rounded-[25px] border border-white/[.05]" />
            <span className="font-mono text-5xl text-[#5ed5c5]">
              {"</>"}
            </span>
          </div>

          <div className="absolute left-[2%] top-[16%] rounded-xl border border-white/10 bg-[#0b151f]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
            <small className="block text-[8px] font-bold tracking-[.18em] text-[#63798b]">
              BACKEND
            </small>
            <strong className="mt-1 block text-sm">Laravel</strong>
          </div>

          <div className="absolute bottom-[17%] right-[1%] rounded-xl border border-white/10 bg-[#0b151f]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
            <small className="block text-[8px] font-bold tracking-[.18em] text-[#63798b]">
              CLOUD
            </small>
            <strong className="mt-1 block text-sm">AWS</strong>
          </div>

          <div className="absolute right-[7%] top-[12%] rounded-xl border border-white/10 bg-[#0b151f]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
            <small className="block text-[8px] font-bold tracking-[.18em] text-[#63798b]">
              LANGUAGE
            </small>
            <strong className="mt-1 block text-sm">Python</strong>
          </div>

          <div className="absolute bottom-[8%] left-[8%] rounded-full border border-[#45c7b8]/20 bg-[#45c7b8]/[0.06] px-4 py-2 text-[9px] font-bold tracking-[.18em] text-[#65d9cb]">
            SYSTEM / 01
          </div>
        </div>
      </div>
    </section>
  );
}
