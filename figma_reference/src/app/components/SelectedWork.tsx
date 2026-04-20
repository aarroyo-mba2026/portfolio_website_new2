import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Ambient Focus Timer",
    impact: "A pomodoro app that adapts its interface based on time of day and your focus patterns, using generative colors and soundscapes",
    category: ["Side Project", "Interaction", "AI"],
    role: "Creator",
    company: "Personal",
    image: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    title: "Micro-Journaling for Spotify",
    impact: "Concept for tagging emotional context to your listening history, creating a music-based memory timeline",
    category: ["Concept", "Music", "UX"],
    role: "Designer & Builder",
    company: "Weekend Build",
    image: "https://images.unsplash.com/photo-1761305135173-616efff573b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    title: "Notion Budget Calculator",
    impact: "Interactive template that brings spreadsheet-like calculations into Notion with animated visualizations",
    category: ["Tool", "Productivity", "Template"],
    role: "Creator",
    company: "Open Source",
    image: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

export function SelectedWork() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">Side Projects</p>
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            Things I build <span className="bg-gradient-to-r from-[#4ecdc4] to-[#a78bfa] bg-clip-text text-transparent">after hours</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
