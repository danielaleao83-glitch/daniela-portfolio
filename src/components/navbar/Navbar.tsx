"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Sobre Mim",
      href: "#sobre",
    },
    {
      name: "Projetos",
      href: "#projetos",
    },
    {
      name: "eSUS APS",
      href: "#esus",
    },
    {
      name: "Contato",
      href: "#contato",
    },
  ];


  return (
    <motion.nav

      initial={{
        opacity:0,
        y:-50
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:.8
      }}

      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50
      w-[90%]
      max-w-7xl
      glass
      px-8
      py-5
      "

    >


      <div className="
      flex
      items-center
      justify-between
      ">


        {/* Logo */}

        <a
          href="#home"
          className="
          text-3xl
          font-black
          metal
          tracking-wider
          "
        >
          DL
        </a>



        {/* Menu Desktop */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          {links.map((link)=>(

            <a

              key={link.name}

              href={link.href}

              className="
              text-slate-300
              font-medium
              transition
              duration-300
              hover:text-white
              hover:scale-110
              "

            >

              {link.name}

            </a>

          ))}


        </div>



        {/* Botão Mobile */}

        <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          text-white
          "

        >

          {
            open
            ?
            <X size={30}/>
            :
            <Menu size={30}/>
          }


        </button>


      </div>




      {/* Menu Mobile */}


      {
        open && (

          <motion.div

            initial={{
              opacity:0,
              height:0
            }}

            animate={{
              opacity:1,
              height:"auto"
            }}

            className="
            md:hidden
            flex
            flex-col
            gap-5
            mt-6
            border-t
            border-white/10
            pt-6
            "

          >


            {
              links.map((link)=>(

                <a

                  key={link.name}

                  href={link.href}

                  onClick={()=>setOpen(false)}

                  className="
                  text-slate-300
                  hover:text-white
                  transition
                  "

                >

                  {link.name}

                </a>

              ))
            }


          </motion.div>

        )
      }


    </motion.nav>
  );
}