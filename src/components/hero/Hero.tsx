"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 pt-28"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="text-blue-400 uppercase tracking-[5px] font-semibold">
            Software Engineer
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-tight metal mt-4">
            DANIELA
            <br />
            LEÃO DA SILVA
          </h1>

          <p className="mt-8 text-slate-300 text-xl leading-9 max-w-2xl">
            Desenvolvedora Full Stack apaixonada por tecnologia,
            especializada em Laravel, PHP, React, Next.js,
            TypeScript e Inteligência Artificial.

            Atualmente desenvolvendo um sistema de
            Prontuário Eletrônico inspirado no ecossistema eSUS APS.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="btn flex items-center gap-3">
              <FolderOpen size={22}/>
              Ver Projetos
            </button>

            <button className="glass px-8 py-4 rounded-xl flex items-center gap-3 hover:scale-105 duration-300">
              <Download size={22}/>
              Download CV
            </button>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div className="card text-center">
              <h2 className="text-4xl font-black text-blue-400">20+</h2>
              <p className="mt-2 text-slate-300">Tecnologias</p>
            </div>

            <div className="card text-center">
              <h2 className="text-4xl font-black text-blue-400">10+</h2>
              <p className="mt-2 text-slate-300">Projetos</p>
            </div>

            <div className="card text-center">
              <h2 className="text-4xl font-black text-blue-400">1</h2>
              <p className="mt-2 text-slate-300">Sistema eSUS APS</p>
            </div>

          </div>

        </motion.div>

        {/* Foto */}

        <motion.div
          initial={{ opacity:0, scale:.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
          className="flex justify-center"
        >

          <div className="profile">

            <Image
              src="/images/profile/foto.jpg"
              alt="Foto"
              width={500}
              height={500}
              priority
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}