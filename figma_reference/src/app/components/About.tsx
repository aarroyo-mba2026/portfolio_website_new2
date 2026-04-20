import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)" }}
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">About</p>
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-12">
            Why this <span className="bg-gradient-to-r from-[#4ecdc4] to-[#a78bfa] bg-clip-text text-transparent">exists</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                By day, I work as a Product Manager. By night (and weekends), I explore ideas that don't fit neatly into roadmaps or OKRs.
              </p>
              <p>
                This is my creative outlet. A place to experiment with unconventional interfaces, imagine features for products I admire, and build things just because they're interesting.
              </p>
              <p>
                No business cases. No stakeholder alignment. Just curiosity and the freedom to explore what's possible when you're not constrained by what's practical.
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                I believe the best product ideas often come from playing around without a specific goal. From asking "what if?" instead of "what should we?"
              </p>
              <p>
                Some of these projects are functional prototypes. Others are purely conceptual. All of them represent ways of thinking differently about digital products.
              </p>
              <p className="pt-4 border-t border-border">
                If you're into creative experimentation, want to collaborate on something weird, or just want to chat about speculative product ideas — let's connect.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
