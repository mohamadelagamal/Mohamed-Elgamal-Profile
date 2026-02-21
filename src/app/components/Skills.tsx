import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Smartphone, Server, Code2, Database } from "lucide-react";

const skillCategories = [
  {
    icon: Smartphone,
    label: "Mobile",
    items: ["Flutter", "Android SDK", "Jetpack Compose", "Dart", "Kotlin", "Java"],
  },
  {
    icon: Server,
    label: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST API", "GraphQL", "TypeScript"],
  },
  {
    icon: Database,
    label: "Databases",
    items: ["Firebase", "MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    icon: Code2,
    label: "Architecture & DevOps",
    items: ["Clean Architecture", "MVVM / MVI", "BLoC/Cubit", "Docker", "CI/CD", "GitHub Actions"],
  },
];

const proficiency = [
  { name: "Flutter / Dart", level: 95 },
  { name: "Node.js / NestJS", level: 90 },
  { name: "Android / Kotlin", level: 85 },
  { name: "Firebase", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Docker / CI/CD", level: 65 },
];

const experience = [
  {
    role: "Flutter Developer",
    company: "Execution Techn",
    period: "Jan 2025 – Present",
    location: "Remote",
    description:
      "Developed 3 Flutter apps with BLoC state management and automated CI/CD pipelines, delivering production-ready applications on schedule.",
  },
  {
    role: "Mobile Developer",
    company: "Special Group Company",
    period: "Aug 2024 – Jan 2025",
    location: "Cairo, Egypt",
    description:
      "Built a real estate platform with REST API integration and Google Maps. Optimized performance and improved app load times significantly.",
  },
  {
    role: "Flutter Developer",
    company: "Paymac Software",
    period: "Mar 2024 – Aug 2024",
    location: "Cairo, Egypt",
    description:
      "Built the healthcare platform Refine — a discount and payment app with secure payment flows and real-time updates.",
  },
  {
    role: "Android Lecturer",
    company: "Mindset Training",
    period: "Mar 2024 – Sept 2024",
    location: "Cairo, Egypt",
    description:
      "Trained students in Android development fundamentals and advanced concepts. Created comprehensive course materials and mentored junior developers.",
  },
];

export function Skills() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            Skills & Experience
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight max-w-2xl">
            The stack behind{" "}
            <span className="text-muted-foreground">every product.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: Skills */}
          <div className="space-y-10">

            {/* Skill category grids */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              <h3 className="text-[0.85rem] text-foreground uppercase tracking-[0.15em]">
                Tech Stack
              </h3>
              <div className="space-y-4">
                {skillCategories.map((cat, ci) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + ci * 0.08 }}
                    className="p-4 rounded-xl border border-border bg-surface"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <cat.icon size={15} className="text-primary" />
                      <span className="text-[0.75rem] text-primary uppercase tracking-wider font-medium">
                        {cat.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg text-[0.75rem] border border-border text-muted-foreground bg-background hover:border-primary/20 hover:text-foreground transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Proficiency bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-[0.85rem] text-foreground uppercase tracking-[0.15em] mb-5">
                Proficiency
              </h3>
              <div className="space-y-4">
                {proficiency.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[0.85rem] text-foreground">{tool.name}</span>
                      <span className="text-[0.75rem] text-muted-foreground">{tool.level}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tool.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[0.85rem] text-foreground uppercase tracking-[0.15em] mb-6">
              Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.role + exp.company}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                    className="relative pl-8 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-[18px] w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors -translate-x-[3.5px]" />

                    <div className="p-5 rounded-xl border border-border bg-surface hover:border-foreground/15 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <h4 className="text-[0.95rem] text-foreground font-medium">
                          {exp.role}
                        </h4>
                        <span className="text-[0.72rem] text-primary shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <p className="text-[0.8rem] text-primary/80">{exp.company}</p>
                        <span className="text-border">·</span>
                        <p className="text-[0.8rem] text-muted-foreground">{exp.location}</p>
                      </div>
                      <p className="text-[0.82rem] text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
