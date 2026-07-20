"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trophy, Flag } from "lucide-react";


const questions = [
  {
    state: "Acre",
    flag: "🇧🇷",
    question: "Qual é a capital do Acre?",
    options: ["Rio Branco", "Manaus", "Macapá", "Porto Velho"],
    answer: "Rio Branco",
  },

  {
    state: "Alagoas",
    flag: "🇧🇷",
    question: "Qual é a capital de Alagoas?",
    options: ["Maceió", "Recife", "Aracaju", "Salvador"],
    answer: "Maceió",
  },

  {
    state: "Amapá",
    flag: "🇧🇷",
    question: "Qual é a capital do Amapá?",
    options: ["Macapá", "Belém", "Boa Vista", "Palmas"],
    answer: "Macapá",
  },

  {
    state: "Amazonas",
    flag: "🇧🇷",
    question: "Qual é a capital do Amazonas?",
    options: ["Manaus", "Rio Branco", "Cuiabá", "Porto Velho"],
    answer: "Manaus",
  },

  {
    state: "Bahia",
    flag: "🇧🇷",
    question: "Qual é a capital da Bahia?",
    options: ["Salvador", "Fortaleza", "Natal", "João Pessoa"],
    answer: "Salvador",
  },

  {
    state: "Ceará",
    flag: "🇧🇷",
    question: "Qual é a capital do Ceará?",
    options: ["Fortaleza", "Recife", "Teresina", "Natal"],
    answer: "Fortaleza",
  },

  {
    state: "Distrito Federal",
    flag: "🇧🇷",
    question: "Qual é a capital do Distrito Federal?",
    options: ["Brasília", "Goiânia", "Cuiabá", "Palmas"],
    answer: "Brasília",
  },

  {
    state: "Espírito Santo",
    flag: "🇧🇷",
    question: "Qual é a capital do Espírito Santo?",
    options: ["Vitória", "Vila Velha", "Cariacica", "Serra"],
    answer: "Vitória",
  },

  {
    state: "Goiás",
    flag: "🇧🇷",
    question: "Qual é a capital de Goiás?",
    options: ["Goiânia", "Anápolis", "Brasília", "Palmas"],
    answer: "Goiânia",
  },

  {
    state: "Maranhão",
    flag: "🇧🇷",
    question: "Qual é a capital do Maranhão?",
    options: ["São Luís", "Teresina", "Belém", "Fortaleza"],
    answer: "São Luís",
  },

  {
    state: "Mato Grosso",
    flag: "🇧🇷",
    question: "Qual é a capital do Mato Grosso?",
    options: ["Cuiabá", "Campo Grande", "Goiânia", "Palmas"],
    answer: "Cuiabá",
  },

  {
    state: "Mato Grosso do Sul",
    flag: "🇧🇷",
    question: "Qual é a capital do Mato Grosso do Sul?",
    options: ["Campo Grande", "Cuiabá", "Dourados", "Corumbá"],
    answer: "Campo Grande",
  },

  {
    state: "Minas Gerais",
    flag: "🇧🇷",
    question: "Qual é a capital de Minas Gerais?",
    options: ["Belo Horizonte", "Uberlândia", "Ouro Preto", "Juiz de Fora"],
    answer: "Belo Horizonte",
  },

  {
    state: "Pará",
    flag: "🇧🇷",
    question: "Qual é a capital do Pará?",
    options: ["Belém", "Santarém", "Macapá", "Manaus"],
    answer: "Belém",
  },

  {
    state: "Paraná",
    flag: "🇧🇷",
    question: "Qual é a capital do Paraná?",
    options: ["Curitiba", "Londrina", "Maringá", "Cascavel"],
    answer: "Curitiba",
  },

  {
    state: "Pernambuco",
    flag: "🇧🇷",
    question: "Qual é a capital de Pernambuco?",
    options: ["Recife", "Olinda", "Caruaru", "Natal"],
    answer: "Recife",
  },

  {
    state: "Piauí",
    flag: "🇧🇷",
    question: "Qual é a capital do Piauí?",
    options: ["Teresina", "Parnaíba", "Fortaleza", "São Luís"],
    answer: "Teresina",
  },

  {
    state: "Rio de Janeiro",
    flag: "🇧🇷",
    question: "Qual é a capital do Rio de Janeiro?",
    options: ["Rio de Janeiro", "Niterói", "Petrópolis", "Volta Redonda"],
    answer: "Rio de Janeiro",
  },

  {
    state: "Rio Grande do Sul",
    flag: "🇧🇷",
    question: "Qual é a capital do Rio Grande do Sul?",
    options: ["Porto Alegre", "Pelotas", "Caxias do Sul", "Santa Maria"],
    answer: "Porto Alegre",
  },

  {
    state: "Rondônia",
    flag: "🇧🇷",
    question: "Qual é a capital de Rondônia?",
    options: ["Porto Velho", "Ji-Paraná", "Vilhena", "Ariquemes"],
    answer: "Porto Velho",
  },

  {
    state: "Roraima",
    flag: "🇧🇷",
    question: "Qual é a capital de Roraima?",
    options: ["Boa Vista", "Manaus", "Macapá", "Rio Branco"],
    answer: "Boa Vista",
  },

  {
    state: "Santa Catarina",
    flag: "🇧🇷",
    question: "Qual é a capital de Santa Catarina?",
    options: ["Florianópolis", "Joinville", "Blumenau", "Chapecó"],
    answer: "Florianópolis",
  },

  {
    state: "São Paulo",
    flag: "🇧🇷",
    question: "Qual é a capital de São Paulo?",
    options: ["São Paulo", "Campinas", "Santos", "Guarulhos"],
    answer: "São Paulo",
  },

  {
    state: "Sergipe",
    flag: "🇧🇷",
    question: "Qual é a capital de Sergipe?",
    options: ["Aracaju", "Maceió", "Salvador", "Recife"],
    answer: "Aracaju",
  },

  {
    state: "Tocantins",
    flag: "🇧🇷",
    question: "Qual é a capital do Tocantins?",
    options: ["Palmas", "Goiânia", "Belém", "Brasília"],
    answer: "Palmas",
  },
];


export default function QuizBrasil() {

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);


  function answerQuestion(option: string) {

    setSelected(option);


    if (option === questions[current].answer) {
      setScore(score + 1);
    }


    setTimeout(() => {

      if (current + 1 < questions.length) {

        setCurrent(current + 1);
        setSelected(null);

      } else {

        setFinished(true);

      }

    }, 900);

  }



  if (finished) {

    return (

      <section className="px-6 py-32">

        <div className="card mx-auto max-w-xl text-center">

          <Trophy
            size={60}
            className="mx-auto mb-6 text-blue-400"
          />

          <h2 className="text-4xl font-black text-white">
            Resultado Brasil
          </h2>

          <p className="mt-6 text-slate-300">
            Sua pontuação:
          </p>

          <p className="mt-3 text-5xl font-black text-blue-400">
            {score}/{questions.length}
          </p>

        </div>

      </section>

    );

  }



  return (

    <section
      id="quiz-brasil"
      className="px-6 py-32"
    >

      <div className="mx-auto max-w-5xl">

        <h2 className="metal text-center text-5xl font-black">
          Quiz Estados e Capitais do Brasil
        </h2>


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

          <div className="flex items-center gap-4">

            <Flag
              className="text-blue-400"
              size={35}
            />

            <h3 className="text-2xl font-bold text-white">
              {questions[current].state}
            </h3>

          </div>


          <p className="mt-6 text-xl text-slate-300">
            {questions[current].question}
          </p>



          <div className="mt-8 grid gap-4">

            {questions[current].options.map((option)=>(

              <button

                key={option}

                onClick={() => answerQuestion(option)}

                className={`
                rounded-xl
                border
                px-6
                py-4
                text-left
                text-white
                transition
                hover:scale-105

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


          <p className="mt-8 text-center text-slate-400">
            Pergunta {current + 1} de {questions.length}
          </p>


        </motion.div>

      </div>

    </section>

  );

}