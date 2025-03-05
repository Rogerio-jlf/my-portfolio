import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="py-8 bg-black border-t border-gray-800">
        {/* Container geral */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Direitos reservados */}
            <div className="mb-4 md:mb-0">
              <p className="text-white text-center md:text-left">
                © {new Date().getFullYear()} Rogério. Todos os direitos
                reservados.
              </p>
            </div>

            {/* Redes sociais */}
            <div className="flex space-x-6">
              <motion.div
                className="flex justify-center space-x-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  {
                    href: "https://www.linkedin.com/in/rog%C3%A9rio-junio-lopes-ferreira-46018a264",
                    icon: FaLinkedin,
                    color: "hover:text-blue-500",
                  },
                  {
                    href: "https://github.com/Rogerio-jlf",
                    icon: FaGithub,
                    color: "hover:text-purple-500",
                  },
                  {
                    href: "mailto:rogerio.jlf@gmail.com",
                    icon: SiGmail,
                    color: "hover:text-red-500",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={social.href}
                    whileHover={{ scale: 1.5, rotate: 9 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white transition-colors duration-300 ${social.color}`}
                    >
                      <social.icon size={30} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      <Link
        href="https://api.whatsapp.com/send?phone=5531999635544"
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Image
          src="/whatssapp.svg"
          alt="Botão whatsapp"
          width={60}
          height={60}
          className="fixed bottom-4 right-16 z-50"
        />
      </Link>
    </>
  );
};

export default Footer;
