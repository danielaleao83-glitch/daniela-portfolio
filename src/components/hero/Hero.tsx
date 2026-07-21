"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FolderOpen, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex items-center justify-center
      px-6 md:px-8
      pt-32
      overflow-hidden
      "
    >
      <div
        className="
        max-w-7xl
        w-full
        grid
        lg:grid-cols-2
        gap-12 lg:gap-16
        items-center
        "
      >

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p
            className="
            text-blue-400
            uppercase
            tracking-[5px]
            font-semibold
            text-sm md:text-base
            "
          >
            Software Engineer
          </p>


          <h1
            className="
            text-5xl
            sm:text-6xl
            lg:text-8xl
            font-black
            leading-tight
            metal
            mt-5
            "
          >
            DANIELA <br />LEÃO DA SILVA </h1>
          <p
            className="
            mt-8
            text-slate-300
            text-lg
            md:text-xl
            leading-8
            max-w-2xl
            "
          >
            Desenvolvedora Full Stack apaixonada por tecnologia,
            especializada em Laravel, PHP, React, Next.js,
            TypeScript e Inteligência Artificial.

            <br />
            <br />

            Atualmente desenvolvendo um sistema de
            Prontuário Eletrônico inspirado no ecossistema
            Pec (Prontuario Eletrônico do Cidadão)
          </p>



          {/* BOTÕES */}

          <div className="flex flex-wrap gap-5 mt-10">


            {/* PROJETOS */}

            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.05 }}
              className="
              btn
              flex
              items-center
              gap-3
              cursor-pointer
              "
            >
              <FolderOpen size={22} />

              Ver Projetos

            </motion.a>



            {/* VISUALIZAR CURRÍCULO */}

            <motion.a
              href="/cv/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="
              glass
              px-8
              py-4
              rounded-xl
              flex
              items-center
              gap-3
              cursor-pointer
              "
            >

              <Eye size={22} />

              Visualizar CV

            </motion.a>



            {/* DOWNLOAD CURRÍCULO */}

            <motion.a
              href="/cv/curriculo.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="
              glass
              px-8
              py-4
              rounded-xl
              flex
              items-center
              gap-3
              cursor-pointer
              "
            >

              <Download size={22} />

              Download CV

            </motion.a>


          </div>



          {/* ESTATÍSTICAS */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            mt-14
            "
          >

            <div className="card text-center">

              <h2 className="text-4xl font-black text-blue-400">
                20+
              </h2>

              <p className="mt-2 text-slate-300">
                Tecnologias
              </p>

            </div>



            <div className="card text-center">

              <h2 className="text-4xl font-black text-blue-400">
                10+
              </h2>

              <p className="mt-2 text-slate-300">
                Projetos
              </p>

            </div>



            <div className="card text-center">

              <h2 className="text-4xl font-black text-blue-400">
                1
              </h2>

              <p className="mt-2 text-slate-300">
                Sistema Pec (Prontuario Eletrônico do Cidadão)
              </p>

            </div>


          </div>


        </motion.div>



        {/* FOTO */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8
          }}

          animate={{
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1
          }}

          className="
          flex
          justify-center
          "
        >

          <motion.div

            animate={{
              y: [0, -15, 0]
            }}

            transition={{
              duration: 4,
              repeat: Infinity
            }}

            className="profile"

          >

            <Image

              src="/images/profile/foto.jpg"

              alt="Daniela Leão da Silva"

              width={500}

              height={500}

              priority

              className="
              object-cover
              rounded-full
              "

            />

          </motion.div>


        </motion.div>


      </div>

    </section>
  );
}