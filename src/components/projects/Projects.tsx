"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  HeartPulse,
  Code2,
  BrainCircuit,
} from "lucide-react";


const projects = [
  {
    title: "Sistema de Prontuário Eletrônico",
    description:
      "Sistema web desenvolvido para gerenciamento de informações de saúde utilizando Laravel, PHP e banco de dados, inspirado no ecossistema eSUS APS.",
    tech: "Laravel • PHP • MySQL • APIs",
    icon: HeartPulse,
    github: "#",
    demo: "#",
  },

  {
    title: "Portfolio Profissional",
    description:
      "Portfólio moderno desenvolvido com Next.js, React, TypeScript e Tailwind CSS com foco em experiência visual premium.",
    tech: "Next.js • React • TypeScript • Tailwind",
    icon: Code2,
    github: "#",
    demo: "#",
  },

  {
    title: "Aplicações com Inteligência Artificial",
    description:
      "Projetos utilizando inteligência artificial para automação, produtividade e criação de soluções digitais inteligentes.",
    tech: "IA • APIs • Automação",
    icon: BrainCircuit,
    github: "#",
    demo: "#",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-32"
    >

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="text-center"
        >

          <p
            className="
            uppercase
            tracking-[5px]
            text-blue-400
            "
          >
            Meu trabalho
          </p>


          <h2
            className="
            metal
            mt-4
            text-5xl
            font-black
            "
          >
            Projetos em destaque
          </h2>


          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            text-slate-300
            "
          >
            Algumas das soluções desenvolvidas envolvendo
            desenvolvimento web, sistemas inteligentes e
            tecnologias modernas.
          </p>

        </motion.div>



        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-3
          "
        >

          {projects.map((project, index) => {

            const Icon = project.icon;


            return (

              <motion.article
                key={project.title}

                initial={{
                  opacity: 0,
                  y: 60,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  scale: 1.05,
                }}

                className="
                card
                group
                "
              >

                <Icon
                  size={45}
                  className="
                  mb-6
                  text-blue-400
                  transition
                  group-hover:scale-110
                  "
                />


                <h3
                  className="
                  text-2xl
                  font-bold
                  text-white
                  "
                >
                  {project.title}
                </h3>


                <p
                  className="
                  mt-4
                  leading-7
                  text-slate-300
                  "
                >
                  {project.description}
                </p>


                <p
                  className="
                  mt-6
                  font-semibold
                  text-blue-300
                  "
                >
                  {project.tech}
                </p>



                <div
                  className="
                  mt-8
                  flex
                  gap-4
                  "
                >

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                    glass
                    rounded-xl
                    px-5
                    py-2
                    text-sm
                    text-white
                    transition
                    hover:scale-105
                    "
                  >
                    GitHub
                  </a>



                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                    glass
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-5
                    py-2
                    text-sm
                    text-white
                    transition
                    hover:scale-105
                    "
                  >

                    <ExternalLink size={18} />

                    Demo

                  </a>


                </div>


              </motion.article>

            );

          })}


        </div>


      </div>

    </section>
  );
}