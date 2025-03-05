import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { FolderKanban, House, Phone, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  interface Routes {
    [key: string]: string;
  }

  const getRoute = (item: string): string => {
    const routes: Routes = {
      Início: "início",
      Sobre: "sobre",
      Projetos: "projetos",
      Contato: "contato",
    };
    return routes[item] || item.toLowerCase();
  };

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-900 font-kodchasan fixed top-0 left-0 w-full z-50">
        <header className="flex justify-between items-center py-4 max-w-7xl m-auto">
          <h1 className="text-4xl font-extrabold italic hidden md:block">
            ROGÉRIO
            <span className="text-orange-500">FERREIRA</span>
          </h1>
          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex space-x-10">
                {["Início", "Sobre", "Projetos", "Contato"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${getRoute(item)}`}
                      className="group relative flex items-center gap-2 text-xl font-medium dark:text-white hover:italic dark:hover:text-orange-500 transition-all duration-100"
                    >
                      {item === "Início" && <House />}
                      {item === "Sobre" && <User />}
                      {item === "Projetos" && <FolderKanban />}
                      {item === "Contato" && <Phone />}
                      {item}

                      <span className="absolute bottom-0 left-0 h-0.5 w-0 dark:bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={30} />}
            </button>
            <div className="border-l-2 border-gray-300 h-10 hidden md:block"></div>
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          </div>
        </header>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-gray-200 dark:bg-gray-900">
            <ul className="flex flex-col space-y-4 p-4">
              {["Início", "Sobre", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${getRoute(item)}`}
                    className="group relative flex items-center gap-2 text-xl font-medium dark:text-white hover:italic dark:hover:text-orange-500 transition-all duration-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item === "Início" && <House />}
                    {item === "Sobre" && <User />}
                    {item === "Projetos" && <FolderKanban />}
                    {item === "Contato" && <Phone />}
                    {item}

                    <span className="absolute bottom-0 left-0 h-0.5 w-0 dark:bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Header;
