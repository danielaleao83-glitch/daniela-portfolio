export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "PHP",
    "MySQL",
    "Git & GitHub",
    "Inteligência Artificial",
    "UI/UX Design",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Habilidades
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-6
                text-center
                text-lg
                font-semibold
                text-gray-200
                backdrop-blur-md
                shadow-xl
                transition
                duration-300
                hover:scale-105
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}