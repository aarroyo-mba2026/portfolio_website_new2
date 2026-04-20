import { motion } from "motion/react";
import { Palette, Sparkles, Boxes, Wand2, Rocket, Lightbulb } from "lucide-react";

const capabilities = [
  {
    icon: Palette,
    title: "Creative Exploration",
    description: "Experimenting with unconventional interfaces and interaction patterns that challenge standard UX norms",
    color: "#ff6b6b"
  },
  {
    icon: Sparkles,
    title: "Generative Design",
    description: "Building experiences that use AI and algorithms to create dynamic, personalized visual systems",
    color: "#4ecdc4"
  },
  {
    icon: Boxes,
    title: "Product Concepts",
    description: "Imagining features and products that could exist for companies I admire, exploring what's possible",
    color: "#ffd93d"
  },
  {
    icon: Wand2,
    title: "Micro-interactions",
    description: "Crafting delightful, unexpected moments of interaction that make digital products feel alive",
    color: "#a78bfa"
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Moving from idea to working prototype quickly, testing concepts before investing deep",
    color: "#ff6b6b"
  },
  {
    icon: Lightbulb,
    title: "Alternative Thinking",
    description: "Questioning assumptions about how products should work and exploring different mental models",
    color: "#4ecdc4"
  }
];

export function Capabilities() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">Approach</p>
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            How I <span className="bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#a78bfa] bg-clip-text text-transparent">explore & create</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-8 bg-card rounded-3xl border-2 border-border hover:border-transparent hover:shadow-2xl transition-all cursor-default relative overflow-hidden"
                style={{
                  boxShadow: "0 0 0 0 rgba(255, 107, 107, 0)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px -15px ${capability.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 rgba(255, 107, 107, 0)";
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${capability.color}10 0%, transparent 70%)`
                  }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ backgroundColor: `${capability.color}15` }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7" style={{ color: capability.color }} />
                  </motion.div>
                  <h3 className="text-xl mb-3 tracking-tight">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
