export default function Infrastructure() {
  const systems = [
    ["WINDOWS", "Windows Server · Active Directory · Microsoft 365"],
    ["LINUX", "Linux · Shell · Services"],
    ["NETWORK", "TCP/IP · DNS · DHCP · LAN/WAN"],
    ["VIRTUAL", "VMware · Virtualização"],
    ["MONITOR", "Zabbix · Monitoramento"],
    ["OPS", "Backup · Segurança · Continuidade"],
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[.06] bg-[#071018] px-[6vw] py-28 text-[#f4f7fa]">
      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-[#45c7b8]/60" />
          <span className="text-[10px] font-bold tracking-[.25em] text-[#708698]">
            05 / INFRAESTRUTURA & REDES
          </span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[9px] font-bold tracking-[.23em] text-[#45c7b8]">
              FOUNDATION
            </p>

            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-bold leading-none tracking-[-.065em]">
              A base por trás
              <span className="block font-normal text-[#8297a9]">
                da tecnologia.
              </span>
            </h2>

            <p className="mt-7 max-w-[600px] text-[14px] leading-8 text-[#879aaa]">
              Experiência em ambientes corporativos, redes, servidores,
              virtualização, monitoramento, segurança, backup e continuidade
              operacional.
            </p>

            <div className="mt-9 rounded-3xl border border-white/[.08] bg-[#09131c] p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[8px] font-bold tracking-[.18em] text-[#63788a]">
                  NETWORK TOPOLOGY
                </span>
                <span className="font-mono text-[8px] text-[#45c7b8]">
                  ACTIVE
                </span>
              </div>

              <div className="relative h-[250px]">
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#45c7b8]/30 bg-[#45c7b8]/[.06] text-[9px] font-bold tracking-[.16em] text-[#74cfc2] shadow-[0_0_45px_rgba(69,199,184,.08)]">
                  CORE
                </div>

                <div className="absolute left-1/2 top-8 h-[92px] w-px -translate-x-1/2 bg-gradient-to-b from-[#45c7b8]/50 to-transparent" />
                <div className="absolute left-1/2 bottom-8 h-[92px] w-px -translate-x-1/2 bg-gradient-to-t from-[#45c7b8]/50 to-transparent" />
                <div className="absolute left-8 top-1/2 h-px w-[120px] -translate-y-1/2 bg-gradient-to-r from-transparent to-[#45c7b8]/50" />
                <div className="absolute right-8 top-1/2 h-px w-[120px] -translate-y-1/2 bg-gradient-to-l from-transparent to-[#45c7b8]/50" />

                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-lg border border-white/[.08] bg-white/[.025] px-4 py-2 text-[8px] text-[#718595]">
                  SERVER
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-lg border border-white/[.08] bg-white/[.025] px-4 py-2 text-[8px] text-[#718595]">
                  BACKUP
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-lg border border-white/[.08] bg-white/[.025] px-4 py-2 text-[8px] text-[#718595]">
                  NETWORK
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-lg border border-white/[.08] bg-white/[.025] px-4 py-2 text-[8px] text-[#718595]">
                  SECURITY
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {systems.map(([title, description], index) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/[.07] bg-white/[.025] p-6 transition duration-400 hover:-translate-y-1 hover:border-[#45c7b8]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-bold text-[#45c7b8]">
                    0{index + 1}
                  </span>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#45c7b8]/50" />
                </div>

                <strong className="mt-7 block text-sm tracking-[.08em]">
                  {title}
                </strong>

                <p className="mt-3 text-[10px] leading-6 text-[#788c9c]">
                  {description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[7px] font-bold tracking-[.15em] text-[#53697a]">
                  <span className="h-px w-7 bg-[#45c7b8]/40" />
                  FOUNDATION
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
