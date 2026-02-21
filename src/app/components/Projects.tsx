import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import zikrImg from "@/assets/zikr.png";

type Category = "All" | "Mobile" | "Full Stack" | "Android";

interface Project {
  id: number;
  name: string;
  description: string;
  category: Category[];
  image: string;
  tech: string[];
  type: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "ذكر — Dhikr",
    description:
      "All-in-one Islamic app to maintain daily Adhkar (morning & evening remembrances), read the complete Holy Quran with a clear font, and get accurate prayer times — all in one place.",
    category: ["Android", "Mobile"],
    image: zikrImg,
    tech: ["Flutter", "Dart", "Local Notifications", "REST API"],
    type: "Android",
    link: "https://play.google.com/store/apps/details?id=com.elmaref.elgamal",
  },
  {
    id: 2,
    name: "Refine",
    description:
      "Healthcare Discounts App with payment integration and real-time updates. Enables users to access exclusive healthcare deals seamlessly.",
    category: ["Mobile"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1080&q=80",
    tech: ["Flutter", "Firebase", "REST API", "BLoC"],
    type: "Mobile",
  },
  {
    id: 3,
    name: "Dr Recruiter",
    description:
      "Medical Job Platform connecting healthcare professionals with top opportunities. Full-stack solution with smart matching and real-time notifications.",
    category: ["Full Stack"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1080&q=80",
    tech: ["Flutter", "Node.js", "MongoDB", "Express"],
    type: "Full Stack",
  },
  {
    id: 4,
    name: "Live Jobs",
    description:
      "Live Interview System with real-time video and chat functionality built with WebRTC. Streamlines the remote hiring process end-to-end.",
    category: ["Full Stack"],
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1080&q=80",
    tech: ["Flutter", "WebRTC", "Socket.io", "NestJS"],
    type: "Full Stack",
  },
  {
    id: 5,
    name: "eBroker",
    description:
      "Property Marketplace with advanced search, interactive Google Maps integration, and smart filtering. Simplified real estate discovery for buyers and renters.",
    category: ["Mobile"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1080&q=80",
    tech: ["Flutter", "Google Maps", "Firebase", "REST API"],
    type: "Mobile",
  },
  {
    id: 6,
    name: "SaaS Staff Teacher",
    description:
      "Classroom SaaS platform for educational institutions with multi-tenant architecture, course management, and progress analytics.",
    category: ["Full Stack"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1080&q=80",
    tech: ["Flutter", "Node.js", "PostgreSQL", "GraphQL"],
    type: "Full Stack",
  },
];

const categories: Category[] = ["All", "Mobile", "Full Stack", "Android"];

const categoryColors: Record<string, string> = {
  Mobile: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  "Full Stack": "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
  Android: "text-green-600 bg-green-500/10 border-green-500/20",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { ref, isInView } = useInView(0.1);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            Featured Projects
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight max-w-2xl">
            Apps shipped to{" "}
            <span className="text-muted-foreground">production.</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[0.85rem] transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-foreground/15 transition-all duration-300 cursor-pointer"
                onClick={() => project.link && window.open(project.link, "_blank")}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />

                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[0.68rem] font-medium border backdrop-blur-sm ${
                        categoryColors[project.type] ?? "text-primary bg-primary/10 border-primary/20"
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Hover overlay arrow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <ArrowUpRight size={20} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[1.1rem] text-foreground font-['Space_Grotesk'] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[0.85rem] text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[0.7rem] border border-border text-muted-foreground bg-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
