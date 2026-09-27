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
          "https://api.github.com/users/danielaleao83-glitch/repos?sort=updated&direction=desc&per_page=12"
        );

        if (!response.ok) {
          throw new Error("GitHub API indisponível");
        }

        const data = await response.json();

        const filteredRepositories = data
          .filter(
            (repo: Repository) =>
              !repo.fork &&
              repo.name.toLowerCase() !== "foto.png"
          )
          .slice(0, 6);

        setRepositories(filteredRepositories);
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
      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[.11]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(69,199,184,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(69,199,184,.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* GLOW CENTRAL */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#45c7b8]/[.035] blur-[150px]" />

      {/* SIDE GLOWS */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3178c6]/[.025] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#777bb4]/[.025] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1550px]">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#45c7b8]/60" />

              <span className="text-[10px] font-bold tracking-[.25em] text-[#718799]">
                07 / ENGINEERING PORTFOLIO
              </span>
            </div>

            <p className="text-[10px] font-bold tracking-[.24em] text-[#45c7b8]">
              GITHUB / SOURCE CODE / PROJECTS
            </p>

            <h2 className="mt-4 max-w-[900px] text-[clamp(2.8rem,6vw,5.6rem)] font-bold leading-[.95] tracking-[-.065em]">
              Código que
              <span className="block font-normal text-[#8296a8]">
                sustenta a experiência.
              </span>
            </h2>

            <p className="mt-7 max-w-[730px] text-[15px] leading-8 text-[#8598a8]">
              Repositórios, projetos e experimentações que complementam o
              portfólio visual e mostram a engenharia por trás das soluções.
            </p>
          </div>

          <a
            href="https://github.com/danielaleao83-glitch"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-lg border border-[#45c7b8]/25 bg-[#45c7b8]/[.05] px-6 py-4 text-[10px] font-black tracking-[.15em] text-[#d7ebe8] transition duration-300 hover:-translate-y-1 hover:border-[#45c7b8]/60 hover:bg-[#45c7b8]/[.1] hover:shadow-[0_15px_45px_rgba(69,199,184,.08)]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#45c7b8]" />

            ABRIR PERFIL GITHUB

            <span className="text-[#45c7b8] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* STATUS BAR */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-white/[.06] py-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#45c7b8]" />

            <span className="text-[8px] font-bold tracking-[.16em] text-[#7890a1]">
              GITHUB API
            </span>

            <span className="text-[8px] font-bold tracking-[.16em] text-[#45c7b8]">
              CONNECTED
            </span>
          </div>

          <div className="h-3 w-px bg-white/[.08]" />

          <span className="text-[8px] font-bold tracking-[.16em] text-[#617789]">
            PUBLIC REPOSITORIES
          </span>

          <div className="h-3 w-px bg-white/[.08]" />

          <span className="text-[8px] font-bold tracking-[.16em] text-[#617789]">
            LIVE DATA
          </span>
        </div>

        {/* REPOSITORY GRID */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {/* LOADING */}
          {loading &&
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative h-[340px] overflow-hidden rounded-2xl border border-white/[.07] bg-white/[.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[.04] via-transparent to-transparent" />

                <div className="absolute left-6 top-6 h-10 w-10 animate-pulse rounded-xl bg-white/[.05]" />

                <div className="absolute left-6 right-6 top-24 space-y-3">
                  <div className="h-3 animate-pulse rounded bg-white/[.05]" />
                  <div className="h-3 w-3/4 animate-pulse rounded bg-white/[.05]" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 h-10 animate-pulse rounded-lg bg-white/[.04]" />
              </div>
            ))}

          {/* REPOSITORIES */}
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
                  className="group relative overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.025] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#45c7b8]/35 hover:bg-white/[.04] hover:shadow-[0_30px_90px_rgba(0,0,0,.3)]"
                >
                  {/* CARD GLOW */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,199,184,.14),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#45c7b8]/[.04] blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* TOP NUMBER */}
                  <div className="absolute right-5 top-5 font-mono text-[8px] text-[#344b5c]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    {/* REPOSITORY HEADER */}
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#45c7b8]/20 bg-[#45c7b8]/[.06] font-mono text-[11px] text-[#62d4c4] transition duration-300 group-hover:border-[#45c7b8]/40 group-hover:shadow-[0_0_25px_rgba(69,199,184,.1)]">
                        <span>{"</>"}</span>
                      </div>

                      <div className="min-w-0">
                        <p className="text-[8px] font-bold tracking-[.18em] text-[#5d7486]">
                          REPOSITORY
                        </p>

                        <h3 className="mt-1 truncate pr-8 text-lg font-bold tracking-[-.02em] text-[#ecf2f5]">
                          {repo.name}
                        </h3>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-6 min-h-[72px] text-[12px] leading-6 text-[#8295a5]">
                      {repo.description ||
                        "Projeto e experimentação de engenharia de software."}
                    </p>

                    {/* METADATA */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {repo.language && (
                        <span className="flex items-center gap-2 rounded-full border border-white/[.08] px-3 py-1.5 text-[8px] font-bold tracking-[.1em] text-[#8da0af]">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor: languageColor,
                            }}
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

                    {/* ACTIONS */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/code inline-flex items-center gap-2 rounded-lg bg-[#edf3f6] px-4 py-3 text-[9px] font-black tracking-[.12em] text-[#071018] transition duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(255,255,255,.06)]"
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
                          className="group/demo inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.025] px-4 py-3 text-[9px] font-black tracking-[.12em] text-[#b9c7d1] transition duration-300 hover:border-[#45c7b8]/35 hover:bg-[#45c7b8]/[.04] hover:text-white"
                        >
                          LIVE DEMO

                          <span className="transition-transform group-hover/demo:translate-x-1">
                            ↗
                          </span>
                        </a>
                      )}
                    </div>

                    {/* UPDATED */}
                    <div className="mt-6 border-t border-white/[.06] pt-4 text-[7px] font-bold tracking-[.13em] text-[#455b6d]">
                      UPDATED{" "}
                      {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                </article>
              );
            })}

          {/* EMPTY STATE */}
          {!loading && repositories.length === 0 && (
            <div className="col-span-full rounded-2xl border border-white/[.08] bg-white/[.025] p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#45c7b8]/20 bg-[#45c7b8]/[.05] font-mono text-[#62d4c4]">
                {"</>"}
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Repositórios indisponíveis no momento
              </h3>

              <p className="mx-auto mt-3 max-w-[520px] text-[12px] leading-6 text-[#788d9e]">
                O perfil do GitHub continua disponível diretamente para
                consulta dos projetos e códigos.
              </p>

              <a
                href="https://github.com/danielaleao83-glitch"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#45c7b8]/25 bg-[#45c7b8]/[.05] px-5 py-3 text-[9px] font-bold tracking-[.14em] text-[#78c6bd] transition hover:border-[#45c7b8]/50 hover:bg-[#45c7b8]/[.1]"
              >
                VER PERFIL GITHUB
                <span>↗</span>
              </a>
            </div>
          )}
        </div>

        {/* ENGINEERING INFO */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            [
              "01",
              "SOURCE",
              "Código-fonte e arquitetura",
              "Repositories",
            ],
            [
              "02",
              "PROJECTS",
              "Projetos reais e experimentações",
              "Engineering",
            ],
            [
              "03",
              "DEPLOY",
              "Experiência publicada e acessível",
              "Live Systems",
            ],
          ].map(([number, title, description, footer]) => (
            <div
              key={number}
              className="group relative overflow-hidden rounded-xl border border-white/[.07] bg-white/[.015] p-5 transition duration-300 hover:border-[#45c7b8]/25 hover:bg-white/[.025]"
            >
              <div className="absolute inset-y-0 left-0 w-0.5 bg-[#45c7b8]/30 transition group-hover:bg-[#45c7b8]" />

              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold tracking-[.16em] text-[#45c7b8]">
                  {number}
                </span>

                <span className="text-[8px] font-bold tracking-[.16em] text-[#536a7b]">
                  {title}
                </span>
              </div>

              <p className="mt-5 text-[11px] text-[#718595]">
                {description}
              </p>

              <div className="mt-4 text-[7px] font-bold tracking-[.14em] text-[#3f5668]">
                {footer}
              </div>
            </div>
          ))}
        </div>

        {/* GITHUB FOOTER */}
        <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-[#45c7b8]/10 bg-[#45c7b8]/[.025] p-6 md:flex-row md:items-center">
          <div>
            <p className="text-[9px] font-bold tracking-[.2em] text-[#45c7b8]">
              GITHUB / DANIELA LEÃO
            </p>

            <p className="mt-2 text-[11px] leading-6 text-[#718595]">
              Código-fonte, projetos e evolução técnica disponíveis
              publicamente.
            </p>
          </div>

          <a
            href="https://github.com/danielaleao83-glitch"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-[9px] font-black tracking-[.14em] text-[#cbd9e0] transition hover:text-white"
          >
            github.com/danielaleao83-glitch

            <span className="text-[#45c7b8] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
