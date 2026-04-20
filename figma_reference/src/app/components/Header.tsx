import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg tracking-tight bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#a78bfa] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          whileHover={{ scale: 1.05 }}
        >
          Creative Lab
        </motion.button>

        <div className="flex items-center gap-8">
          <motion.button
            onClick={() => scrollToSection("work")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Projects
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("lab")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Ideas
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("about")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            About
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
