export default function CloudDevOps() {
  const stages = [
    ["01", "CODE", "Git · GitHub"],
    ["02", "BUILD", "Node · npm · Composer"],
    ["03", "DEPLOY", "CI/CD · Actions"],
    ["04", "CLOUD", "AWS · Azure · Render"],
  ];

  const cloud = [
    ["AWS", "IAM · EC2 · S3 · VPC · RDS · CloudWatch"],
    ["AZURE", "Identity · Microsoft 365 · Cloud Services"],
    ["DEVOPS", "Docker · CI/CD · GitHub Actions · Azure DevOps"],
    ["SERVER", "Nginx · PHP-FPM · HTTPS · Production"],
  ];

  return (
    <section
      id="cloud"
      className="relative overflow-hidden border-t border-white/[.06] bg-[#061019] px-[6vw] py-28 text-[#f4f7fa]"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#45c7b8]/[.035] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            04 / CLOUD & DEVOPS
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[9px] font-bold tracking-[.22em] text-[#45c7b8]">
              CLOUD INFRASTRUCTURE
            </p>

            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-bold leading-none tracking-[-.065em]">
              Da aplicação
              <span className="block font-normal text-[#8297a9]">
                ao deploy.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[14px] leading-8 text-[#879aaa]">
              Conhecimentos em cloud, automação, integração contínua,
              infraestrutura e implantação de aplicações.
            </p>

            <div className="mt-8 rounded-2xl border border-white/[.08] bg-[#09141d] p-6">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold tracking-[.2em] text-[#607586]">
                  DEPLOYMENT PIPELINE
                </span>
                <span className="text-[8px] text-[#45c7b8]">
                  ● READY
                </span>
              </div>

              <div className="mt-7 space-y-4">
                {stages.map(([number, title, stack], index) => (
                  <div key={number} className="relative flex items-center gap-4">
                    {index < stages.length - 1 && (
                      <div className="absolute left-[13px] top-8 h-8 w-px bg-[#45c7b8]/20" />
                    )}

                    <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#45c7b8]/30 bg-[#45c7b8]/[.07] text-[7px] font-bold text-[#5fd0c1]">
                      {number}
                    </div>

                    <div>
                      <strong className="block text-[11px] tracking-[.11em]">
                        {title}
                      </strong>
                      <span className="text-[9px] text-[#6c8191]">
                        {stack}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cloud.map(([title, description], index) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.025] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#45c7b8]/30 hover:shadow-[0_25px_70px_rgba(0,0,0,.25)]"
              >
                <div className="absolute right-5 top-5 text-[7px] font-mono text-[#385061]">
                  0{index + 1}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#45c7b8]/20 bg-[#45c7b8]/[.05]">
                  <div className="h-5 w-5 rounded border border-[#45c7b8]/60 shadow-[0_0_18px_rgba(69,199,184,.12)]" />
                </div>

                <h3 className="mt-7 text-lg font-bold">{title}</h3>

                <p className="mt-3 text-[10px] leading-6 text-[#7d91a1]">
                  {description}
                </p>

                <div className="mt-7 flex gap-1">
                  <span className="h-1 w-1 rounded-full bg-[#45c7b8]" />
                  <span className="h-1 w-8 rounded-full bg-[#45c7b8]/30" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
