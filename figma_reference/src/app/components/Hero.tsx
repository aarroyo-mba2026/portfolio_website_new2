import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #ff6b6b 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)" }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #ffd93d 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b6b]/10 via-[#4ecdc4]/10 to-[#ffd93d]/10 border border-[#ff6b6b]/20 mb-6"
            animate={{
              borderColor: ["rgba(255, 107, 107, 0.2)", "rgba(78, 205, 196, 0.2)", "rgba(255, 217, 61, 0.2)", "rgba(167, 139, 250, 0.2)", "rgba(255, 107, 107, 0.2)"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className="w-4 h-4 text-[#ff6b6b]" />
            <span className="text-sm">Creative Product Explorations</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl mb-6 tracking-tight">
            Ideas & experiments
            <br />
            <span className="bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#a78bfa] bg-clip-text text-transparent">
              outside the box
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-foreground/80 mb-12 max-w-2xl leading-relaxed">
            Side projects, product ideas, and creative explorations I work on beyond my day job. A playground for thinking differently about digital products.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={() => scrollToSection("work")}
              className="px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8787] text-white rounded-2xl hover:shadow-xl hover:shadow-[#ff6b6b]/20 transition-all flex items-center gap-2 group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("lab")}
              className="px-8 py-4 border-2 border-foreground/10 rounded-2xl hover:bg-secondary transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See ideas
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
