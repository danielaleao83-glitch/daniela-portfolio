"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Bot,
  Cpu,
  WandSparkles,
  Database,
} from "lucide-react";


const aiSkills = [
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description:
      "Aplicação de IA em sistemas modernos para automação, análise e criação de soluções inteligentes.",
  },

  {
    icon: Bot,
    title: "Automação Inteligente",
    description:
      "Desenvolvimento de fluxos automatizados utilizando APIs e ferramentas de inteligência artificial.",
  },

  {
    icon: Cpu,
    title: "Integração com Sistemas",
    description:
      "Conexão de aplicações web com serviços inteligentes e arquiteturas modernas.",
  },

  {
    icon: Database,
    title: "Dados e Análise",
    description:
      "Uso de dados para melhorar processos, decisões e experiência do usuário.",
  },

  {
    icon: Sparkles,
    title: "IA Generativa",
    description:
      "Uso de modelos generativos para produtividade, criação e desenvolvimento de soluções digitais.",
  },

  {
    icon: WandSparkles,
    title: "Tecnologia do Futuro",
    description:
      "Exploração de novas ferramentas de IA aplicadas ao desenvolvimento de software.",
  },
];


export default function ArtificialIntelligence() {

  return (

    <section
      id="ai"
      className="
      px-6
      py-32
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        "
      >


        <motion.div

          initial={{
            opacity:0,
            y:50,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:.8,
          }}

          viewport={{
            once:true,
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
            Tecnologia
          </p>


          <h2
            className="
            metal
            mt-4
            text-5xl
            font-black
            "
          >
            Inteligência Artificial
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
            Explorando inteligência artificial para criar
            aplicações mais inteligentes, eficientes e
            preparadas para o futuro.
          </p>


        </motion.div>



        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {aiSkills.map((item,index)=>{

            const Icon = item.icon;


            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:50,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                transition={{
                  duration:.5,
                  delay:index * .1,
                }}

                viewport={{
                  once:true,
                }}

                whileHover={{
                  scale:1.05,
                }}

                className="
                card
                "
              >

                <Icon
                  size={45}
                  className="
                  mb-6
                  text-blue-400
                  "
                />


                <h3
                  className="
                  text-2xl
                  font-bold
                  text-white
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                  mt-4
                  leading-7
                  text-slate-300
                  "
                >
                  {item.description}
                </p>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>

  );

}