"use client";

import { motion } from "framer-motion";


export default function ResumeCard() {


  const skills = [
    {
      title: "Desenvolvimento Full Stack",
      description:
        "Next.js, React, TypeScript, Laravel e PHP para criação de aplicações modernas.",
      icon: "💻",
    },

    {
      title: "Banco de Dados",
      description:
        "MySQL, APIs REST, modelagem e organização de dados.",
      icon: "🗄️",
    },

    {
      title: "Inteligência Artificial",
      description:
        "Automação, ferramentas de IA e soluções digitais inteligentes.",
      icon: "🤖",
    },

    {
      title: "Sistema de Saúde",
      description:
        "Sistema de prontuário eletrônico inspirado no ecossistema eSUS APS.",
      icon: "❤️",
    },
  ];


  return (

    <section
      id="resume"
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

          className="
          card
          "

        >


          <div
            className="
            grid
            gap-12
            lg:grid-cols-2
            items-center
            "
          >



            {/* CURRÍCULO */}


            <div>


              <div
                className="
                flex
                items-center
                gap-4
                "
              >

                <div className="text-4xl">
                  📄
                </div>


                <h2
                  className="
                  metal
                  text-5xl
                  font-black
                  "
                >
                  Currículo
                </h2>


              </div>



              <p
                className="
                mt-8
                text-lg
                leading-8
                text-slate-300
                "
              >

                Desenvolvedora Full Stack focada em criação
                de sistemas web modernos, aplicações escaláveis
                e soluções digitais utilizando tecnologias atuais.

              </p>



              <p
                className="
                mt-4
                text-lg
                leading-8
                text-slate-300
                "
              >

                Conhecimentos em Next.js, React, TypeScript,
                Laravel, PHP, bancos de dados, APIs e
                Inteligência Artificial.

              </p>




              {/* BOTÕES */}


              <div
                className="
                mt-10
                flex
                flex-wrap
                gap-5
                "
              >


                <a

                  href="/cv/curriculo.pdf"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="
                  btn
                  flex
                  items-center
                  gap-3
                  "

                >

                  📄

                  Visualizar CV

                </a>




                <a

                  href="/cv/curriculo.pdf"

                  download

                  className="
                  glass
                  rounded-xl
                  px-8
                  py-4
                  text-white
                  flex
                  items-center
                  gap-3
                  "

                >

                  <span>
                    ⬇️
                  </span>


                  Baixar CV


                </a>


              </div>


            </div>





            {/* HABILIDADES */}



            <div
              className="
              grid
              gap-5
              "
            >


              {skills.map((skill)=>(
                
                <motion.div

                  key={skill.title}

                  whileHover={{
                    scale:1.05
                  }}

                  className="
                  glass
                  rounded-2xl
                  p-6
                  "

                >

                  <div className="text-4xl">
                    {skill.icon}
                  </div>


                  <h3
                    className="
                    mt-4
                    text-xl
                    font-bold
                    text-white
                    "
                  >

                    {skill.title}

                  </h3>



                  <p
                    className="
                    mt-3
                    text-slate-300
                    "
                  >

                    {skill.description}

                  </p>


                </motion.div>

              ))}


            </div>


          </div>


        </motion.div>


      </div>


    </section>

  );

}