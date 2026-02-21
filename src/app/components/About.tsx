import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Layers, Zap, Globe } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Live Apps on Store" },
  { value: "500+", label: "GitHub Commits" },
  { value: "4.5★", label: "Avg. App Rating" },
];

const values = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "I follow proven patterns like Clean Architecture, MVVM, and MVI to build maintainable, testable, and scalable codebases that stand the test of time.",
  },
  {
    icon: Zap,
    title: "Performance-Focused",
    description:
      "Every line of code matters. I optimize for performance, memory efficiency, and smooth 60fps user experiences across all platforms and devices.",
  },
  {
    icon: Globe,
    title: "Full-Stack Thinking",
    description:
      "From Flutter UI to Node.js APIs and cloud databases, I bring an end-to-end perspective that helps me build complete, production-ready systems.",
  },
];

export function About() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            About Me
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight max-w-2xl">
            Building products that{" "}
            <span className="text-muted-foreground">scale and perform.</span>
          </h2>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-[1rem]">
              I'm an Android, Flutter & Backend Developer with 3+ years of
              experience building scalable mobile applications and RESTful APIs.
              I thrive at the intersection of clean code and great user
              experience.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[1rem]">
              My approach is architecture-driven and performance-focused. I've
              shipped production apps on both Google Play and the App Store,
              maintained 4.5★+ ratings, and built backend services that handle
              real-world traffic reliably.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[1rem]">
              Outside of shipping products, I contribute actively to open source
              with 500+ GitHub commits and mentor developers in Android
              development. I believe in giving back to the community.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 grid grid-cols-2 md:flex md:flex-col gap-6 md:gap-6 md:pl-8 md:border-l border-border"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-['Space_Grotesk'] text-[clamp(1.5rem,3vw,2.25rem)] text-primary tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[0.8rem] text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values / Approach cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="p-6 rounded-2xl border border-border bg-surface hover:bg-surface-hover hover:border-foreground/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-[1rem] text-foreground mb-2">{item.title}</h3>
              <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
