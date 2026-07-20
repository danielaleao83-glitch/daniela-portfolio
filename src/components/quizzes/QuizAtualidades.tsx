"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trophy } from "lucide-react";


const questions = [
  {
    question: "Qual tecnologia vem ganhando destaque na transformação digital?",
    options: [
      "Inteligência Artificial",
      "Máquina de escrever",
      "Fax",
      "Disquete",
    ],
    answer: "Inteligência Artificial",
  },

  {
    question: "Qual linguagem é muito utilizada no desenvolvimento web moderno?",
    options: [
      "JavaScript",
      "Assembly antigo",
      "COBOL apenas",
      "Fortran",
    ],
    answer: "JavaScript",
  },

  {
    question: "Qual empresa desenvolve o ChatGPT?",
    options: [
      "OpenAI",
      "Microsoft Paint",
      "Nintendo",
      "Adobe",
    ],
    answer: "OpenAI",
  },

  {
    question: "Qual área utiliza inteligência artificial para análise de grandes dados?",
    options: [
      "Ciência de Dados",
      "Datilografia",
      "Impressão manual",
      "Desenho técnico",
    ],
    answer: "Ciência de Dados",
  },

  {
    question: "Qual tecnologia permite criar aplicações descentralizadas?",
    options: [
      "Blockchain",
      "DVD",
      "VHS",
      "Disquete",
    ],
    answer: "Blockchain",
  },

  {
    question: "Qual navegador é desenvolvido pelo Google?",
    options: [
      "Chrome",
      "Firefox",
      "Safari",
      "Edge",
    ],
    answer: "Chrome",
  },

  {
    question: "Qual área está relacionada à proteção de sistemas digitais?",
    options: [
      "Cibersegurança",
      "Agricultura",
      "Construção civil",
      "Pintura",
    ],
    answer: "Cibersegurança",
  },

  {
    question: "Qual tecnologia é usada para criar interfaces modernas?",
    options: [
      "React",
      "Calculadora",
      "Editor de texto simples",
      "Scanner",
    ],
    answer: "React",
  },

  {
    question: "O que significa IA?",
    options: [
      "Inteligência Artificial",
      "Internet Analógica",
      "Informação Automática",
      "Interface Avançada",
    ],
    answer: "Inteligência Artificial",
  },

  {
    question: "Qual banco de dados é muito usado em aplicações web?",
    options: [
      "MySQL",
      "Bloco de notas",
      "Paint",
      "Calculadora",
    ],
    answer: "MySQL",
  },

  {
    question: "Qual framework é baseado em React?",
    options: [
      "Next.js",
      "Windows",
      "Excel",
      "Photoshop",
    ],
    answer: "Next.js",
  },

  {
    question: "Qual área trabalha com criação de modelos inteligentes?",
    options: [
      "Machine Learning",
      "Arquivologia",
      "Datilografia",
      "Fotografia",
    ],
    answer: "Machine Learning",
  },

  {
    question: "Qual linguagem é conhecida pelo desenvolvimento backend com Laravel?",
    options: [
      "PHP",
      "HTML",
      "CSS",
      "SQL",
    ],
    answer: "PHP",
  },

  {
    question: "Qual tendência cresce no mercado de tecnologia?",
    options: [
      "Automação com IA",
      "Computadores sem software",
      "Fim da internet",
      "Uso de disquetes",
    ],
    answer: "Automação com IA",
  },

  {
    question: "Qual habilidade é importante para desenvolvedores atualmente?",
    options: [
      "Aprendizado contínuo",
      "Ignorar novas tecnologias",
      "Parar de estudar",
      "Evitar programação",
    ],
    answer: "Aprendizado contínuo",
  },
];


export default function QuizAtualidades() {

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);


  function chooseAnswer(option:string){

    setSelected(option);


    if(option === questions[current].answer){

      setScore(score + 1);

    }


    setTimeout(()=>{

      if(current + 1 < questions.length){

        setCurrent(current + 1);
        setSelected(null);

      } else {

        setFinished(true);

      }

    },800);

  }



  if(finished){

    return (

      <section className="px-6 py-32">

        <motion.div

          initial={{opacity:0,scale:.8}}

          animate={{opacity:1,scale:1}}

          className="card mx-auto max-w-xl text-center"

        >

          <Trophy
            size={60}
            className="mx-auto mb-6 text-blue-400"
          />

          <h2 className="text-4xl font-black text-white">
            Resultado Final
          </h2>

          <p className="mt-6 text-xl text-slate-300">
            Você acertou:
          </p>

          <p className="mt-3 text-5xl font-black text-blue-400">
            {score} / {questions.length}
          </p>

        </motion.div>

      </section>

    );

  }



  return (

    <section
      id="quiz-atualidades"
      className="px-6 py-32"
    >

      <div className="mx-auto max-w-5xl">


        <h2
          className="
          metal
          text-center
          text-5xl
          font-black
          "
        >
          Quiz Atualidades
        </h2>


        <p className="mt-6 text-center text-slate-300">
          Pergunta {current + 1} de {questions.length}
        </p>



        <motion.div

          key={current}

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="card mt-10"

        >

          <h3 className="text-2xl font-bold text-white">
            {questions[current].question}
          </h3>


          <div className="mt-8 grid gap-4">

            {questions[current].options.map((option)=>(

              <button

                key={option}

                onClick={()=>chooseAnswer(option)}

                className={`
                rounded-xl
                border
                px-6
                py-4
                text-left
                text-white
                transition

                ${
                  selected === option &&
                  option === questions[current].answer
                  ?
                  "bg-green-600"
                  :
                  ""
                }

                ${
                  selected === option &&
                  option !== questions[current].answer
                  ?
                  "bg-red-600"
                  :
                  ""
                }

                hover:scale-105
                `}

              >

                {selected === option &&
                option === questions[current].answer &&
                <CheckCircle className="inline mr-2"/>}


                {selected === option &&
                option !== questions[current].answer &&
                <XCircle className="inline mr-2"/>}


                {option}

              </button>

            ))}

          </div>


        </motion.div>


      </div>


    </section>

  );

}