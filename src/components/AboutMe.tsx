import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaDatabase, FaMobile, FaServer } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// COMPONENTE
const AboutMe = () => {
  // ARRAY HABILIDADES
  const habilidades = [
    { nome: "Front-end", icon: FaCode, cor: "from-blue-400 to-cyan-400" },
    { nome: "Back-end", icon: FaServer, cor: "from-green-400 to-emerald-500" },
    { nome: "Mobile", icon: FaMobile, cor: "from-orange-400 to-amber-500" },
    {
      nome: "Banco de Dados",
      icon: FaDatabase,
      cor: "from-purple-400 to-indigo-500",
    },
  ];

  // ARRAY TECNOLOGIAS
  const tecnologias = [
    { nome: "React", icon: SiReact, cor: "text-blue-400" },
    { nome: "Node.js", icon: SiNodedotjs, cor: "text-green-500" },
    { nome: "Tailwind CSS", icon: SiTailwindcss, cor: "text-cyan-400" },
    { nome: "JavaScript", icon: SiJavascript, cor: "text-yellow-400" },
    { nome: "TypeScript", icon: SiTypescript, cor: "text-blue-600" },
    { nome: "Next.js", icon: SiNextdotjs, cor: "text-black" },
    { nome: "CSS3", icon: SiCss3, cor: "text-blue-400" },
    { nome: "HTML5", icon: SiHtml5, cor: "text-red-500" },
    { nome: "Chakra UI", icon: SiShadcnui, cor: "text-purple-400" },
    { nome: "MySQL", icon: SiMysql, cor: "text-blue-500" },
    { nome: "PostgreSQL", icon: SiPostgresql, cor: "text-blue-400" },
    { nome: "Prisma", icon: SiPrisma, cor: "text-blue-500" },
    { nome: "NestJS", icon: SiNestjs, cor: "text-red-500" },
  ];

  // ANIMAÇÃO FRAMER MOTION - ELEMENTOS QUE ENTRAM NA TELA
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // RENDERIZAÇÃO
  return (
    <>
      <section id="sobre" className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent opacity-50"></div>

        {/* Círculos decorativos */}
        <div className="absolute left-0 top-0 w-32 h-32 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-2">Sobre Mim</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="w-full aspect-square relative rounded-2xl overflow-hidden border-4 border-white/10">
                <Image
                  src="/image-perfil.png"
                  alt="Rogério"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 opacity-30 rounded-full blur-xl"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Quem sou eu
              </h3>
              <p className="text-gray-300 mb-6">
                Olá! Sou um desenvolvedor Full Stack apaixonado por criar
                soluções web e mobile inovadoras. Tenho trabalhado com diversas
                tecnologias modernas para desenvolver aplicações de alta
                qualidade.
              </p>
              <p className="text-gray-300 mb-6">
                Minha jornada começou com desenvolvimento front-end, mas logo me
                apaixonei pelo ecossistema completo e me tornei um desenvolvedor
                full stack, capaz de trabalhar em todas as camadas de uma
                aplicação.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {habilidades.map((habilidade, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4 border border-gray-700"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${habilidade.cor} flex items-center justify-center`}
                    >
                      <habilidade.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">{habilidade.nome}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {tecnologias.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 rounded-full px-4 py-2 flex items-center space-x-2 border border-gray-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <tech.icon className={`${tech.cor}`} size={18} />
                    <span className="text-sm">{tech.nome}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
