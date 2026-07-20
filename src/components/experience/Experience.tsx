export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvimento Web",
      company: "Projetos Independentes",
      description:
        "Criação de aplicações modernas utilizando React, Next.js, TypeScript e tecnologias atuais.",
    },
    {
      title: "Desenvolvimento Backend",
      company: "Sistemas Web",
      description:
        "Desenvolvimento de APIs e sistemas utilizando Laravel, PHP, bancos de dados e boas práticas.",
    },
    {
      title: "Tecnologia e Inteligência Artificial",
      company: "Estudos e Projetos",
      description:
        "Aplicação de ferramentas de inteligência artificial para melhorar produtividade e soluções digitais.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Experiência
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-md
                shadow-xl
                transition
                duration-300
                hover:scale-105
              "
            >
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-blue-300">
                {item.company}
              </p>

              <p className="mt-4 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}