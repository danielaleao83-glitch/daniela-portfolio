export default function GitHubProjects() {
  const projects = [
    {
      title: "eSUS APS Laravel",
      description:
        "Sistema de prontuário eletrônico desenvolvido com Laravel, focado em organização de dados de saúde, arquitetura moderna e escalabilidade.",
      technologies: [
        "Laravel 12",
        "PHP 8.2",
        "MySQL",
        "Inertia.js",
        "Tailwind CSS",
      ],
      link: "#",
    },
    {
      title: "Daniela Portfolio",
      description:
        "Portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS, com design moderno, responsivo e animações.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      link: "#",
    },
    {
      title: "Projetos com Inteligência Artificial",
      description:
        "Experimentos e aplicações utilizando ferramentas de inteligência artificial para produtividade, automação e desenvolvimento.",
      technologies: [
        "IA",
        "Automação",
        "Prompt Engineering",
      ],
      link: "#",
    },
  ];

  return (
    <section
      id="github"
      className="w-full py-20 px-6 bg-[#020617]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2
            className="
              text-4xl 
              md:text-5xl 
              font-bold
              text-white
              tracking-wide
            "
          >
            Projetos GitHub
          </h2>

          <p
            className="
              mt-4
              text-gray-400
              max-w-2xl
              mx-auto
            "
          >
            Meus principais projetos, tecnologias utilizadas
            e soluções desenvolvidas.
          </p>
        </div>


        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-105
                hover:border-blue-400/50
                shadow-xl
              "
            >

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-white
                  mb-3
                  group-hover:text-blue-400
                  transition
                "
              >
                {project.title}
              </h3>


              <p
                className="
                  text-gray-400
                  leading-relaxed
                  mb-5
                "
              >
                {project.description}
              </p>


              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  mb-6
                "
              >

                {project.technologies.map(
                  (tech, techIndex) => (

                  <span
                    key={techIndex}
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      bg-blue-500/10
                      text-blue-300
                      border
                      border-blue-500/20
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>


              <a
                href={project.link}
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  rounded-xl
                  py-3
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  transition
                  hover:opacity-90
                "
              >
                Ver Projeto
              </a>


            </div>

          ))}

        </div>

      </div>
    </section>
  );
}