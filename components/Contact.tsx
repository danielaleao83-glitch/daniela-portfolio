export default function Contact() {
  return (
    <section className="relative overflow-hidden border-t border-white/[.06] bg-[#050d14] px-[6vw] py-28 text-[#f4f7fa]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#45c7b8]/[.04] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            10 / CONTATO
          </span>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-white/[.08] bg-[#09131c] shadow-[0_35px_100px_rgba(0,0,0,.35)]">
          <div className="grid lg:grid-cols-[1fr_380px]">
            <div className="relative p-8 md:p-12">
              <p className="text-[9px] font-bold tracking-[.24em] text-[#45c7b8]">
                LET'S CONNECT
              </p>

              <h2 className="mt-5 max-w-[750px] text-[clamp(2.8rem,5.5vw,5.8rem)] font-bold leading-[.92] tracking-[-.07em]">
                Vamos construir
                <span className="block font-normal text-[#8397a8]">
                  algo relevante?
                </span>
              </h2>

              <p className="mt-8 max-w-[650px] text-[14px] leading-8 text-[#899cac]">
                Engenharia de software, cloud, infraestrutura, automação e
                tecnologia aplicada a soluções digitais.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="mailto:daniela.leao83@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-lg bg-[#edf3f6] px-6 py-4 text-[10px] font-black tracking-[.13em] text-[#071018] transition hover:-translate-y-1 hover:bg-white"
                >
                  DANIELA.LEAO83@GMAIL.COM
                  <span className="transition group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/danielaleao83-glitch"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-lg border border-[#45c7b8]/25 bg-[#45c7b8]/[.05] px-6 py-4 text-[10px] font-black tracking-[.13em] text-[#d7ebe8] transition hover:-translate-y-1 hover:border-[#45c7b8]/60"
                >
                  GITHUB
                  <span className="text-[#45c7b8] transition group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/[.06] bg-black/[.15] p-7 lg:border-l lg:border-t-0">
              <div className="rounded-2xl border border-[#45c7b8]/10 bg-[#07131b] p-5 font-mono">
                <div className="flex items-center justify-between text-[7px] tracking-[.17em] text-[#526a7b]">
                  <span>PORTFOLIO / CONTACT</span>
                  <span className="text-[#45c7b8]">LIVE</span>
                </div>

                <div className="mt-8 space-y-4 text-[9px]">
                  <p>
                    <span className="text-[#45c7b8]">name</span>
                    <span className="text-[#647b8c]"> = </span>
                    <span className="text-[#d3dee5]">"Daniela Leão da Silva"</span>
                  </p>

                  <p>
                    <span className="text-[#45c7b8]">role</span>
                    <span className="text-[#647b8c]"> = </span>
                    <span className="text-[#d3dee5]">
                      "Software Engineer"
                    </span>
                  </p>

                  <p>
                    <span className="text-[#45c7b8]">stack</span>
                    <span className="text-[#647b8c]"> = </span>
                    <span className="text-[#d3dee5]">
                      ["Laravel", "Python", "Next.js"]
                    </span>
                  </p>

                  <p>
                    <span className="text-[#45c7b8]">status</span>
                    <span className="text-[#647b8c]"> = </span>
                    <span className="text-[#70c7bc]">
                      "OPEN_TO_CONNECTION"
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[.07] p-4">
                  <strong className="block text-sm">18+</strong>
                  <span className="mt-1 block text-[7px] font-bold tracking-[.13em] text-[#607687]">
                    ANOS
                  </span>
                </div>

                <div className="rounded-xl border border-white/[.07] p-4">
                  <strong className="block text-sm">AI</strong>
                  <span className="mt-1 block text-[7px] font-bold tracking-[.13em] text-[#607687]">
                    ENGINEERING
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[.06] px-8 py-5 text-[8px] font-bold tracking-[.14em] text-[#52697a] md:px-12">
            © 2026 Daniela Leão da Silva · Software Engineer Full Stack
          </div>
        </div>
      </div>
    </section>
  );
}
