"use client";

import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";


export default function Footer() {

  return (

    <motion.footer

      initial={{
        opacity: 0,
        y: 30,
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

      className="
      border-t
      border-white/10
      bg-black/20
      px-6
      py-10
      text-center
      backdrop-blur-md
      "

    >

      <div
        className="
        mx-auto
        max-w-5xl
        "
      >

        <p
          className="
          text-gray-300
          "
        >

          © {new Date().getFullYear()}{" "}

          <span
            className="
            font-bold
            text-white
            "
          >
            Daniela Leão
          </span>

          . Todos os direitos reservados.

        </p>



        <div
          className="
          mt-3
          flex
          items-center
          justify-center
          gap-2
          text-sm
          text-gray-500
          "
        >

          <Code2 size={16}/>

          <span>
            Desenvolvido com Next.js, React e TypeScript
          </span>

          <Heart
            size={16}
            className="
            text-blue-400
            "
          />

        </div>


      </div>


    </motion.footer>

  );

}