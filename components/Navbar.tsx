"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Perfil", "#perfil"],
    ["Tecnologias", "#tecnologias"],
    ["Cloud", "#cloud"],
    ["Projetos", "#projetos"],
    ["Formação", "#formacao"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#071018]/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-[5vw]">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#45c7b8]/30 bg-[#45c7b8]/[0.08] text-sm font-black tracking-[.08em] text-[#65d9cb] shadow-[0_0_30px_rgba(69,199,184,.08)] transition duration-300 group-hover:border-[#45c7b8]/70 group-hover:shadow-[0_0_35px_rgba(69,199,184,.2)]">
            D
          </span>

          <span className="hidden text-[12px] font-bold tracking-[.18em] text-[#e8eef3] sm:block">
            DANIELA <span className="text-[#8fa1b2]">LEÃO</span>
          </span>
        </a>

        <nav
          className={`absolute left-4 right-4 top-[86px] rounded-2xl border border-white/10 bg-[#09131d]/95 p-3 shadow-2xl backdrop-blur-2xl md:static md:flex md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-[11px] font-semibold tracking-[.12em] text-[#90a1b2] transition hover:bg-white/[.04] hover:text-white md:px-0 md:py-2"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/danielaleao83-glitch"
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-lg border border-[#45c7b8]/20 bg-[#45c7b8]/[0.06] px-4 py-2.5 text-[10px] font-bold tracking-[.16em] text-[#cce8e4] transition hover:-translate-y-0.5 hover:border-[#45c7b8]/50 hover:bg-[#45c7b8]/[0.12] md:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#45c7b8] shadow-[0_0_12px_rgba(69,199,184,.8)]" />
            GITHUB
            <span className="text-[#45c7b8] transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xl text-[#dce5ec] transition hover:border-white/25 hover:bg-white/[0.07] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
