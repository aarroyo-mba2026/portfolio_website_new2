import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  impact: string;
  category: string[];
  role: string;
  company?: string;
  image: string;
  delay?: number;
}

const gradients = [
  "from-[#ff6b6b]/80 to-[#ff8787]/80",
  "from-[#4ecdc4]/80 to-[#6dd5cd]/80",
  "from-[#ffd93d]/80 to-[#ffe066]/80",
  "from-[#a78bfa]/80 to-[#c4b5fd]/80",
];

export function ProjectCard({ title, impact, category, role, company, image, delay = 0 }: ProjectCardProps) {
  const gradientClass = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-3xl bg-card mb-6 aspect-[16/10] border-2 border-transparent group-hover:border-[#ff6b6b]/30 transition-all duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply`}
          initial={false}
        />
        <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-xl">
          <ArrowUpRight className="w-6 h-6 text-[#ff6b6b]" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {category.map((cat, idx) => {
            const colors = [
              "bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/20",
              "bg-[#4ecdc4]/10 text-[#4ecdc4] border border-[#4ecdc4]/20",
              "bg-[#ffd93d]/10 text-[#ffa500] border border-[#ffd93d]/20",
            ];
            return (
              <span key={cat} className={`text-xs px-3 py-1.5 rounded-full ${colors[idx % colors.length]}`}>
                {cat}
              </span>
            );
          })}
        </div>

        <h3 className="text-2xl tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#ff6b6b] group-hover:to-[#a78bfa] group-hover:bg-clip-text group-hover:text-transparent transition-all">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {impact}
        </p>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{role}</span>
          {company && (
            <>
              <span>·</span>
              <span>{company}</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
