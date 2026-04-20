import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const labItems = [
  {
    title: "What if Spotify had a 'vibe shift' detector?",
    description: "AI that notices when your music taste changes and creates a playlist timeline of your life phases",
    category: "Wild Idea",
    color: "#ff6b6b"
  },
  {
    title: "Figma comments that fade over time",
    description: "Design feedback that becomes less visible as it ages, keeping files clean while preserving history",
    category: "Feature Concept",
    color: "#4ecdc4"
  },
  {
    title: "Calendar that blocks off 'energy recovery' time",
    description: "Automatic buffer zones after draining meetings, learned from your patterns",
    category: "Speculative",
    color: "#ffd93d"
  },
  {
    title: "GitHub commits with emotional context",
    description: "Tag your commits with how you felt while writing the code. View the emotional journey of a project.",
    category: "Thought Experiment",
    color: "#a78bfa"
  },
  {
    title: "Notion pages that change based on weather",
    description: "Your workspace aesthetic adapts to what's happening outside your window",
    category: "Playful Idea",
    color: "#ff6b6b"
  },
  {
    title: "Slack that knows when NOT to notify you",
    description: "Message importance prediction based on your response patterns and current context",
    category: "Smart Feature",
    color: "#4ecdc4"
  }
];

export function ProductLab() {
  return (
    <section id="lab" className="py-32 px-6 lg:px-12 bg-secondary/30 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">Ideas Lab</p>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Things that <span className="bg-gradient-to-r from-[#ffd93d] to-[#ff6b6b] bg-clip-text text-transparent">could exist</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Speculative features for products I love. Some practical, some playful, all exploring what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group p-8 bg-card rounded-3xl border-2 border-border hover:border-transparent transition-all cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: "0 0 0 0 rgba(255, 107, 107, 0)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 60px -15px ${item.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(255, 107, 107, 0)";
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${item.color}05 0%, transparent 100%)`
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border-2"
                    style={{
                      backgroundColor: `${item.color}10`,
                      color: item.color,
                      borderColor: `${item.color}30`
                    }}
                  >
                    {item.category}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.div>
                </div>

                <h3 className="text-xl mb-3 tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#ff6b6b] group-hover:to-[#a78bfa] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
