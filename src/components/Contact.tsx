import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Spinner from "./Spinner";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Contact = () => {
  // Animação para elementos que entram na tela
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com(\.[a-zA-Z]{2,})?$/;
    return regex.test(email);
  }

  // Torna a primeira letra de cada palavra maiúscula
  function capitalizeWords(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.target;
    const words = e.target.value.split(" ");
    const lowerCaseWords = ["e", "da", "das", "de", "di", "do", "dos"];

    for (let i = 0; i < words.length; i++) {
      if (lowerCaseWords.includes(words[i].toLowerCase())) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] =
          words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }

    const capitalized = words.join(" ");
    setFormData((prevState) => ({
      ...prevState,
      [name]: capitalized,
    }));
  }

  function capitalizeFirstWord(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;

    const words = value.toLowerCase().split(" ");
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }

    const capitalized = words.join(" ");

    setFormData((prevState) => ({
      ...prevState,
      [name]: capitalized, // Atualiza apenas o campo correspondente
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setSuccess(
        'Email Inválido. O email deve conter um "@" e o domínio ".com".'
      );
      return;
    }

    setLoading(true);
    setSuccess("");

    setTimeout(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccess("Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" });
        }
      } catch {
        setSuccess("Erro ao enviar mensagem. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
        setSuccess("");
      }
    }, 2000);
  };

  return (
    <>
      <section id="contato" className="py-20 relative bg-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-5"></div>
        <div className="absolute left-0 bottom-0 w-32 h-32 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-2">Contato</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-8"></div>
            <p className="text-gray-400 text-center max-w-2xl">
              Tem um projeto em mente ou está interessado em trabalhar juntos?
              Entre em contato comigo para discutirmos as possibilidades!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Envie uma mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="nome"
                    className="block text-gray-300 font-medium"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Seu nome"
                    onChange={(e) => {
                      handleChange(e);
                      capitalizeWords(e);
                    }}
                    name="name"
                    value={formData.name}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-gray-300 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="seu@email.com"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mensagem"
                    className="block text-gray-300 font-medium"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                    placeholder="Sua mensagem aqui..."
                    onChange={(e) => {
                      handleChange(e);
                      capitalizeFirstWord(e);
                    }}
                    name="message"
                    value={formData.message}
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <Spinner /> Enviando mensagem...
                    </>
                  ) : (
                    "Enviar mensagem"
                  )}
                </motion.button>
                {success && (
                  <p className="text-green-500 font-medium text-center">
                    {success}
                  </p>
                )}
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {/* Gmail */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <SiGmail size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">Email</h4>
                    <Link
                      href="mailto:rogerio.jlf@gmail.com"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      rogerio.jlf@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Linkedin */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaLinkedin size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">LinkedIn</h4>
                    <Link
                      href="https://linkedin.com/in/rogério-junio-lopes-ferreira-46018a264"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      linkedin.com/in/rogerio
                    </Link>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <FaGithub size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">GitHub</h4>
                    <Link
                      href="https://github.com/Rogerio-jlf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      github.com/Rogerio-jlf
                    </Link>
                  </div>
                </div>

                {/* Whatsapp */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaWhatsapp size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">Whatsapp</h4>
                    <Link
                      href="https://api.whatsapp.com/send?phone=5531999635544"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      +55 31 99963-5544
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-800 rounded-xl border border-gray-700">
                <h4 className="font-bold text-xl mb-4">
                  Disponível para Projetos
                </h4>
                <p className="text-gray-400 mb-4">
                  Atualmente estou disponível para trabalhos freelance e novos
                  projetos. Entre em contato para conversarmos sobre como posso
                  ajudar a transformar suas ideias em realidade.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
