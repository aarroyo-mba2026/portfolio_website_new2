import { motion } from "motion/react";
import { Mail, Linkedin, FileText, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-sm text-muted-foreground mb-6 tracking-wide">Let's collaborate</p>
          <h2 className="text-5xl lg:text-7xl tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#a78bfa] bg-clip-text text-transparent">
              Let's build something
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Got a wild idea? Want to collaborate on something experimental? Just want to chat about speculative product concepts? I'm all ears.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-8 tracking-tight">Get in touch</h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:alex.morrison@example.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">alex.morrison@example.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/alexmorrison"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground">linkedin.com/in/alexmorrison</p>
                  </div>
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Resume</p>
                    <p className="text-foreground">Download CV</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Perfect if you want to:</p>
              <ul className="space-y-2">
                <li className="text-foreground/80">• Collaborate on experimental projects</li>
                <li className="text-foreground/80">• Discuss speculative product ideas</li>
                <li className="text-foreground/80">• Share creative concepts</li>
                <li className="text-foreground/80">• Just chat about interesting product stuff</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h3 className="text-2xl mb-8 tracking-tight">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8787] text-white rounded-2xl hover:shadow-xl hover:shadow-[#ff6b6b]/20 transition-all flex items-center justify-center gap-2 group"
              >
                Send message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
