"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  ShieldCheck,
  Cpu,
  Globe
} from "lucide-react";


const skills = [
  {
    icon: Code2,
    title: "Full Stack",
    text: "Laravel, PHP, React, Next.js e TypeScript"
  },

  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    text: "Integração de IA em sistemas modernos"
  },

  {
    icon: Database,
    title: "Banco de Dados",
    text: "MySQL, PostgreSQL e modelagem avançada"
  },

  {
    icon: ShieldCheck,
    title: "Sistemas Seguros",
    text: "Autenticação, APIs e boas práticas"
  },

  {
    icon: Cpu,
    title: "Arquitetura",
    text: "Projetos escaláveis e organizados"
  },

  {
    icon: Globe,
    title: "Tecnologia Web",
    text: "Aplicações modernas responsivas"
  }
];


export default function About(){

  return (

    <section
      id="sobre"
      className="
      py-32
      px-6
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        "
      >


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="text-center"

        >

          <p
            className="
            text-blue-400
            uppercase
            tracking-[5px]
            "
          >
            Sobre mim
          </p>


          <h2
            className="
            metal
            text-5xl
            font-black
            mt-4
            "
          >
            Desenvolvendo tecnologia com propósito
          </h2>


          <p
            className="
            max-w-4xl
            mx-auto
            mt-8
            text-slate-300
            text-lg
            leading-8
            "
          >

            Sou desenvolvedora Full Stack focada em criar
            soluções modernas, eficientes e inteligentes.

            Minha experiência envolve desenvolvimento web,
            arquitetura de sistemas, APIs, banco de dados
            e aplicações utilizando Inteligência Artificial.

            Atualmente trabalho na evolução de um sistema
            de Prontuário Eletrônico inspirado no ecossistema
            eSUS APS.

          </p>


        </motion.div>



        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >

          {skills.map((skill,index)=>{


            const Icon = skill.icon;


            return (

              <motion.div

                key={skill.title}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index * .1
                }}

                viewport={{
                  once:true
                }}

                className="
                card
                "

              >

                <Icon
                  size={40}
                  className="
                  text-blue-400
                  mb-5
                  "
                />


                <h3
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  {skill.title}
                </h3>


                <p
                  className="
                  text-slate-300
                  mt-3
                  "
                >
                  {skill.text}
                </p>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>

  );

}