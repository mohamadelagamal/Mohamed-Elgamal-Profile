import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[0.8rem] text-muted-foreground">
          &copy; {new Date().getFullYear()} Mohamad Elgamal. All rights reserved.
        </p>
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
          }}
          whileHover={{ y: -2 }}
          className="text-[0.8rem] text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          Back to top
        </motion.a>
      </div>
    </footer>
  );
}
