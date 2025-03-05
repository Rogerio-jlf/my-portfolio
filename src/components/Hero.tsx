import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// COMPONENTE
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // RENDERIZAÇÃO
  return (
    <>
      <div className="relative h-screen flex items-center justify-center">
        {/* Background com efeito parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translate(${mousePosition.x / 100}px, ${
              mousePosition.y / 100
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/imagem-de-fundo.jpg"
            alt="Descrição da Imagem"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={100}
            className="object-cover w-full h-full opacity-70"
          />
        </div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-1"></div>

        {/* Efeito de partículas/grid */}
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-20 z-2"></div>

        {/* Conteúdo principal */}
        <motion.div
          className="flex flex-col space-y-8 z-10 max-w-4xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-3xl text-pink-400 text-center font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Olá, seja bem-vindo!
          </motion.p>

          <motion.h1
            className="text-6xl md:text-7xl text-white text-center font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Meu nome é{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Rogério
            </span>
          </motion.h1>

          <motion.h2
            className="text-3xl text-gray-300 text-center font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Sou{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
              Desenvolvedor Full Stack
            </span>
          </motion.h2>

          {/* Ícones de redes sociais */}
          <motion.div
            className="flex justify-center space-x-10 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              {
                href: "https://linkedin.com",
                icon: FaLinkedin,
                color: "hover:text-blue-500",
              },
              {
                href: "https://github.com",
                icon: FaGithub,
                color: "hover:text-purple-500",
              },
              {
                href: "https://gmail.com",
                icon: SiGmail,
                color: "hover:text-red-500",
              },
            ].map((social) => (
              <motion.div
                key={social.href}
                whileHover={{ scale: 1.5, rotate: 9 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={40} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Botões de CTA */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#projetos"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-lg font-medium transition-all duration-100 w-full sm:w-auto text-center active:scale-90"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contato"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-100 w-full sm:w-auto text-center active:scale-90"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contato
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Indicador de rolagem */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-2 h-2 bg-white rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>

        {/* Formas decorativas */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
      </div>
    </>
  );
};

export default Hero;
