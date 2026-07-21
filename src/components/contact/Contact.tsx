"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  ExternalLink,
} from "lucide-react";


const contacts = [
  {
    icon: Mail,
    title: "Email",
    text: "daniela.leao83@gmail.com",
    link: "mailto:daniela.leao83@gmail.com",
  },

  {
    icon: ExternalLink,
    title: "LinkedIn",
    text: "Meu perfil profissional",
    link: "https://www.linkedin.com/in/daniela-leão-561466a1",
  },

  {
    icon: ExternalLink,
    title: "GitHub",
    text: "Meus projetos",
    link: "https://github.com/danielaleao83-glitch/daniela-portfolio",
  },
];


export default function Contact() {

  return (

    <section
      id="contact"
      className="
      px-6
      py-32
      "
    >

      <div
        className="
        mx-auto
        max-w-6xl
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
            duration:0.8,
          }}

          viewport={{
            once:true,
          }}

          className="
          card
          text-center
          "
        >


          <Send
            size={55}
            className="
            mx-auto
            mb-6
            text-blue-400
            "
          />


          <p
            className="
            uppercase
            tracking-[5px]
            text-blue-400
            "
          >
            Contato
          </p>


          <h2
            className="
            metal
            mt-4
            text-5xl
            font-black
            "
          >
            Vamos conversar?
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
            Vamos conversar sobre projetos,
            tecnologia, desenvolvimento de sistemas
            e novas oportunidades profissionais.
          </p>



          <div
            className="
            mt-12
            grid
            gap-6
            md:grid-cols-3
            "
          >

            {contacts.map((contact,index)=>{

              const Icon = contact.icon;


              return (

                <motion.a

                  key={contact.title}

                  href={contact.link}

                  target={
                    contact.title === "Email"
                    ? undefined
                    : "_blank"
                  }

                  rel="noopener noreferrer"

                  initial={{
                    opacity:0,
                    y:30,
                  }}

                  whileInView={{
                    opacity:1,
                    y:0,
                  }}

                  transition={{
                    duration:0.5,
                    delay:index * 0.15,
                  }}

                  viewport={{
                    once:true,
                  }}

                  whileHover={{
                    scale:1.05,
                  }}

                  className="
                  glass
                  rounded-2xl
                  p-6
                  transition
                  "
                >

                  <Icon
                    size={35}
                    className="
                    mx-auto
                    mb-4
                    text-blue-400
                    "
                  />


                  <h3
                    className="
                    text-xl
                    font-bold
                    text-white
                    "
                  >
                    {contact.title}
                  </h3>


                  <p
                    className="
                    mt-3
                    text-slate-300
                    "
                  >
                    {contact.text}
                  </p>


                </motion.a>

              );

            })}

          </div>



          <div
            className="
            mt-10
            flex
            justify-center
            items-center
            gap-2
            text-slate-300
            "
          >

            <MapPin size={20}/>

            <span>
              Desenvolvedora Full Stack
            </span>

          </div>



        </motion.div>


      </div>


    </section>

  );

}