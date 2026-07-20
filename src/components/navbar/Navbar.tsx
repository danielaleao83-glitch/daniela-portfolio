"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  FolderGit2,
  FileText,
  BrainCircuit,
  Trophy,
  Mail,
} from "lucide-react";


const links = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },

  {
    name: "Sobre",
    href: "#about",
    icon: User,
  },

  {
    name: "Projetos",
    href: "#projects",
    icon: FolderGit2,
  },

  {
    name: "Currículo",
    href: "#resume",
    icon: FileText,
  },

  {
    name: "IA",
    href: "#ai",
    icon: BrainCircuit,
  },

  {
    name: "Quizzes",
    href: "#quiz-atualidades",
    icon: Trophy,
  },

  {
    name: "Contato",
    href: "#contact",
    icon: Mail,
  },
];


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <motion.header

      initial={{
        y:-100,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:.8
      }}

      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      px-6
      py-5
      "

    >

      <nav

        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-6
        py-4
        backdrop-blur-xl
        "

      >


        {/* Logo */}

        <a

          href="#home"

          className="
          metal
          text-2xl
          font-black
          "

        >

          DANIELA.DEV

        </a>



        {/* Desktop */}

        <div

          className="
          hidden
          lg:flex
          items-center
          gap-6
          "

        >

          {links.map((link)=>{

            const Icon = link.icon;


            return (

              <a

                key={link.name}

                href={link.href}

                className="
                group
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-slate-300
                transition
                hover:text-white
                "

              >

                <Icon

                  size={16}

                  className="
                  text-blue-400
                  transition
                  group-hover:scale-125
                  "

                />

                {link.name}

              </a>

            );

          })}


        </div>



        {/* Mobile Button */}

        <button

          onClick={()=>setOpen(!open)}

          className="
          rounded-xl
          border
          border-white/20
          bg-white/10
          p-3
          text-white
          lg:hidden
          "

        >

          {open ?

            <X size={25}/>

            :

            <Menu size={25}/>

          }

        </button>


      </nav>



      {/* Mobile Menu */}


      {open && (

        <motion.div

          initial={{
            opacity:0,
            y:-20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="
          mt-3
          rounded-2xl
          border
          border-white/10
          bg-black/50
          p-6
          backdrop-blur-xl
          lg:hidden
          "

        >

          <div className="flex flex-col gap-5">


            {links.map((link)=>{

              const Icon = link.icon;


              return (

                <a

                  key={link.name}

                  href={link.href}

                  onClick={()=>setOpen(false)}

                  className="
                  flex
                  items-center
                  gap-3
                  text-white
                  transition
                  hover:text-blue-400
                  "

                >

                  <Icon
                    size={20}
                    className="text-blue-400"
                  />

                  {link.name}

                </a>

              );

            })}


          </div>


        </motion.div>

      )}


    </motion.header>

  );

}