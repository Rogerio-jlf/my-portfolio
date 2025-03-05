import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  // Animação para elementos que entram na tela
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projetos = [
    {
      id: 1,
      titulo: "App Cursos Online",
      descricao:
        "Plataforma front-end completa, de uma instituição de ensino online para programadores.",
      imagem: "/project-app-courses-online.PNG",
      tecnologias: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind",
        "Shadcn/UI",
      ],
      link: "https://app-courses-online-git-main-rogerios-projects-ffeef27f.vercel.app/",
      linkGitHub: "https://github.com/Rogerio-jlf/app-courses-online",
    },
    {
      id: 2,
      titulo: "Sistema de Gestão",
      descricao:
        "Aplicação para gestão de empresas com controle de estoque, finanças e recursos humanos.",
      imagem: "/projeto2.jpg",
      tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
      link: "https://github.com/seulink",
      linkGitHub: "https://github.com/Rogerio-jlf/app-courses-online",
    },
    {
      id: 3,
      titulo: "App Mobile",
      descricao:
        "Aplicativo de entrega de alimentos com geolocalização e sistema de avaliações.",
      imagem: "/projeto3.jpg",
      tecnologias: ["React Native", "Firebase", "Redux", "Google Maps API"],
      link: "https://github.com/seulink",
      linkGitHub: "https://github.com/Rogerio-jlf/app-courses-online",
    },
  ];

  return (
    <>
      <section id="projetos" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col items-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-2">Projetos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-8"></div>
            <p className="text-gray-400 text-center max-w-2xl">
              Confira alguns dos meus projetos mais recentes e descubra como
              minhas habilidades podem ajudar a transformar suas ideias em
              realidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <motion.div
                key={projeto.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{projeto.titulo}</h3>

                  <p className="text-gray-400 mb-4">{projeto.descricao}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projeto.tecnologias.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg transition-all duration-200 hover:from-purple-900 hover:to-pink-900"
                    >
                      Ver Projeto
                    </Link>

                    <Link
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        size={40}
                        className="text-white hover:text-pink-500 transition-colors duration-200"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Link
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"
            >
              <FaGithub size={20} />
              <span>Ver mais projetos no GitHub</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
