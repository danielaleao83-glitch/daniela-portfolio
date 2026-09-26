"use client";

import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
};

const languageMap: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  PHP: "#777bb4",
  Python: "#3776ab",
  HTML: "#e34f26",
  CSS: "#1572b6",
};

export default function GitHubPortfolio() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/users/danielaleao83-glitch/repos?sort=updated&direction=desc&per_page=9"
        );

        if (!response.ok) {
          throw new Error("GitHub API indisponível");
        }

        const data = await response.json();

        setRepositories(
          data.filter((repo: Repository) => !repo.fork).slice(0, 6)
        );
      } catch {
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    }

    loadRepositories();
  }, []);

  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-white/[.06] bg-[#050d14] px-[6vw] py-32 text-[#f4f7fa]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[.13]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(69,199,184,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(69,199,184,.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#45c7b8]/[.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#45c7b8]/60" />
              <span className="text-[10px] font-bold tracking-[.24em] text-[#718799]">
                07 / ENGINEERING PORTFOLIO
              </span>
            </div>

            <p className="text-[10px] font-bold tracking-[.24em] text-[#45c7b8]">
              GITHUB / SOURCE CODE / PROJECTS
            </p>

            <h2 className="mt-4 text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-none tracking-[-.065em]">
              Código que
              <span className="block font-normal text-[#8296a8]">
                sustenta a experiência.
              </span>
            </h2>

            <p className="mt-7 max-w-[720px] text-[15px] leading-8 text-[#8598a8]">
              Repositórios, projetos e experimentações que complementam o
              portfólio visual e mostram a engenharia por trás das soluções.
            </p>
          </div>

          <a
            href="https://github.com/danielaleao83-glitch"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-lg border border-[#45c7b8]/25 bg-[#45c7b8]/[.05] px-6 py-4 text-[10px] font-black tracking-[.15em] text-[#d7ebe8] transition hover:-translate-y-1 hover:border-[#45c7b8]/60 hover:bg-[#45c7b8]/[.1]"
          >
            ABRIR PERFIL GITHUB
            <span className="text-[#45c7b8] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {loading &&
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-[315px] animate-pulse rounded-2xl border border-white/[.07] bg-white/[.02]"
              />
            ))}

          {!loading &&
            repositories.map((repo, index) => {
              const languageColor =
                repo.language && languageMap[repo.language]
                  ? languageMap[repo.language]
                  : "#45c7b8";

              const demo =
                repo.name.toLowerCase() === "vidasaudedemo"
                  ? "https://vidasaudedemo.onrender.com"
                  : repo.homepage;

              return (
                <article
                  key={repo.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.025] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#45c7b8]/35 hover:bg-white/[.04] hover:shadow-[0_30px_80px_rgba(0,0,0,.3)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,199,184,.13),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute right-5 top-5 font-mono text-[8px] text-[#344b5c]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#45c7b8]/20 bg-[#45c7b8]/[.06] font-mono text-[#62d4c4]">
                        {"</>"}
                      </div>

                      <div>
                        <p className="text-[8px] font-bold tracking-[.18em] text-[#5d7486]">
                          REPOSITORY
                        </p>

                        <h3 className="mt-1 pr-8 text-lg font-bold tracking-[-.02em] text-[#ecf2f5]">
                          {repo.name}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 min-h-[72px] text-[12px] leading-6 text-[#8295a5]">
                      {repo.description ||
                        "Projeto e experimentação de engenharia de software."}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {repo.language && (
                        <span className="flex items-center gap-2 rounded-full border border-white/[.08] px-3 py-1.5 text-[8px] font-bold tracking-[.1em] text-[#8da0af]">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: languageColor }}
                          />
                          {repo.language}
                        </span>
                      )}

                      <span className="rounded-full border border-white/[.08] px-3 py-1.5 text-[8px] font-bold text-[#6e8395]">
                        ★ {repo.stargazers_count}
                      </span>

                      <span className="rounded-full border border-white/[.08] px-3 py-1.5 text-[8px] font-bold text-[#6e8395]">
                        FORK {repo.forks_count}
                      </span>
                    </div>

                    <div className="mt-7 flex items-center gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/code inline-flex items-center gap-2 rounded-lg bg-[#edf3f6] px-4 py-3 text-[9px] font-black tracking-[.12em] text-[#071018] transition hover:bg-white"
                      >
                        SOURCE CODE
                        <span className="transition-transform group-hover/code:translate-x-1">
                          ↗
                        </span>
                      </a>

                      {demo && (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.025] px-4 py-3 text-[9px] font-black tracking-[.12em] text-[#b9c7d1] transition hover:border-[#45c7b8]/35 hover:text-white"
                        >
                          LIVE DEMO ↗
                        </a>
                      )}
                    </div>

                    <div className="mt-6 border-t border-white/[.06] pt-4 text-[7px] font-bold tracking-[.13em] text-[#455b6d]">
                      UPDATED{" "}
                      {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                </article>
              );
            })}

          {!loading && repositories.length === 0 && (
            <div className="col-span-full rounded-2xl border border-white/[.08] bg-white/[.025] p-10 text-center">
              <p className="text-sm text-[#91a2b1]">
                Os repositórios do GitHub estarão disponíveis nesta área.
              </p>

              <a
                href="https://github.com/danielaleao83-glitch"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-lg border border-[#45c7b8]/25 px-5 py-3 text-[9px] font-bold tracking-[.14em] text-[#78c6bd]"
              >
                VER PERFIL GITHUB ↗
              </a>
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["01", "SOURCE", "Código-fonte e arquitetura"],
            ["02", "PROJECTS", "Projetos reais e experimentações"],
            ["03", "DEPLOY", "Experiência publicada e acessível"],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-xl border border-white/[.07] bg-white/[.015] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold tracking-[.16em] text-[#45c7b8]">
                  {number}
                </span>
                <span className="text-[8px] font-bold tracking-[.16em] text-[#536a7b]">
                  {title}
                </span>
              </div>

              <p className="mt-5 text-[11px] text-[#718595]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
