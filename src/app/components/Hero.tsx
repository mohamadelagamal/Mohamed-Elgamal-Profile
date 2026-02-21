import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      className="relative"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full lg:rounded-3xl" />

      {/* ── MOBILE: circle ── */}
      <div className="lg:hidden relative flex flex-col items-center gap-5">

        {/* Badge above image */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[0.8rem] text-primary">Available for new opportunities</span>
        </motion.div>

        {/* Circle + floating badges wrapper */}
        <div className="relative flex items-center justify-center">
        {/* Rotating dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute w-[188px] h-[188px] rounded-full border border-dashed border-primary/40"
        />
        {/* Gradient ring */}
        <div className="w-[160px] h-[160px] rounded-full p-[2.5px] bg-gradient-to-br from-primary via-amber-300 to-primary/20">
          <div className="w-full h-full rounded-full p-[2px] bg-background">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Mohamad Elgamal"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Mobile badge — top right of circle */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/25 backdrop-blur-sm shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[0.65rem] font-medium text-green-600 dark:text-green-400 whitespace-nowrap">
            Open to Work
          </span>
        </motion.div>

        {/* Mobile badge — bottom left of circle */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute -bottom-1 -left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-sm shadow-sm"
        >
          <span className="text-[0.65rem] font-medium text-primary whitespace-nowrap">★ 4.5 Rating</span>
        </motion.div>
        </div>{/* end circle wrapper */}
      </div>{/* end mobile section */}

      {/* ── DESKTOP: portrait rectangle ── */}
      <div className="hidden lg:block relative p-[2px] rounded-2xl bg-gradient-to-b from-primary/60 via-primary/20 to-transparent">
        <div className="relative rounded-2xl overflow-hidden w-[310px]">
          <img
            src="/profile.jpg"
            alt="Mohamad Elgamal"
            className="w-full h-auto object-cover block"
            style={{ aspectRatio: "4/5" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Desktop badge — top right */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 backdrop-blur-sm shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[0.7rem] font-medium text-green-600 dark:text-green-400 whitespace-nowrap">
            Open to Work
          </span>
        </motion.div>

        {/* Desktop badge — bottom left */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute -bottom-3 -left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-sm shadow-sm"
        >
          <span className="text-[0.7rem] font-medium text-primary whitespace-nowrap">★ 4.5 Avg Rating</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-28 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center w-full">

          {/* LEFT: Text content */}
          <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">

            {/* Status badge — desktop only (mobile version lives above the image) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[0.8rem] text-primary">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-['Space_Grotesk'] text-[clamp(2.5rem,7vw,4.5rem)] tracking-tight text-foreground leading-[1.05]"
            >
              Mohamad{" "}
              <span className="text-primary">Elgamal</span>
            </motion.h1>

            {/* Role chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {["Android Developer", "Flutter Expert", "Backend Engineer"].map((r) => (
                <span
                  key={r}
                  className="px-4 py-1.5 rounded-full text-[0.8rem] border border-border bg-surface text-muted-foreground"
                >
                  {r}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-xl mx-auto lg:mx-0 text-[clamp(0.95rem,1.8vw,1.1rem)] text-muted-foreground leading-relaxed"
            >
              Building scalable mobile applications and powerful backend systems.{" "}
              <span className="text-foreground">
                3+ years turning ideas into production-ready apps.
              </span>
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { value: "3+", label: "Years Exp." },
                { value: "10+", label: "Live Apps" },
                { value: "500+", label: "GH Commits" },
                { value: "4.5★", label: "App Rating" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-8 bg-border" />}
                  <div>
                    <p className="font-['Space_Grotesk'] text-[1.3rem] font-bold text-primary leading-none">
                      {s.value}
                    </p>
                    <p className="text-[0.7rem] text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-[0.95rem] hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
              >
                View My Work
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-8 py-3.5 border border-foreground/10 text-foreground rounded-full text-[0.95rem] hover:border-foreground/20 hover:bg-surface transition-all duration-200"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Profile image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <ProfileImage />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => handleScroll("#about")}
        >
          <ArrowDown size={20} className="text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
