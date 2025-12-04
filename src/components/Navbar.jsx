import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 bg-white/60 backdrop-blur-md z-30 shadow-sm 
                      dark:bg-[#0d1117]/60 dark:shadow-md">
      <div className="container-custom flex items-center justify-between h-16">
        <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          Rahul Prajapati
        </div>

        <nav className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <div className="hidden sm:flex items-center gap-4">

          <a href="#projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Projects
          </a>
          <a href="#experience" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Experience
          </a>
          <a href="#contact" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </a>

          <a
            href="https://github.com/rahulPrajapati021"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/rahul-prajapati-129783219/"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin size={18} />
          </a>

          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 
                       hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? (
              <BsMoonStarsFill size={16} />
            ) : (
              <BsSunFill size={16} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
