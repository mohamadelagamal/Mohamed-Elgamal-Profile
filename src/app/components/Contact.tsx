import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, MapPin, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const infoCards = [
  {
    icon: Mail,
    label: "Email",
    value: "mohamad.elgamal.tech@gmail.com",
    href: "mailto:mohamad.elgamal.tech@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 105 049 6330",
    href: "tel:+201050496330",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-e-63102220b",
    href: "https://www.linkedin.com/in/mohamed-e-63102220b/",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-input-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-[0.9rem]";

const errorClass = "mt-1.5 text-[0.78rem] text-destructive";

export function Contact() {
  const { ref, isInView } = useInView(0.1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight">
            Let's build something{" "}
            <span className="text-primary">great together.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-[0.95rem]">
            Whether you need a Flutter app, an Android project, or a backend
            API — I'd love to hear about your idea.
          </p>
        </motion.div>

        {/* Info cards — 2×2 grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {infoCards.map((card) => {
            const Wrapper = card.href ? "a" : "div";
            const wrapperProps = card.href
              ? {
                  href: card.href,
                  target: card.href.startsWith("http") ? "_blank" : undefined,
                  rel: card.href.startsWith("http") ? "noopener noreferrer" : undefined,
                }
              : {};

            return (
              <Wrapper
                key={card.label}
                {...(wrapperProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                className={`flex items-center gap-4 p-4 rounded-2xl border border-border bg-surface transition-all duration-200 ${
                  card.href
                    ? "hover:border-primary/25 hover:bg-surface-hover group cursor-pointer"
                    : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <card.icon size={19} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.72rem] text-muted-foreground mb-0.5 uppercase tracking-wide">
                    {card.label}
                  </p>
                  <p className="text-[0.88rem] text-foreground truncate group-hover:text-primary transition-colors">
                    {card.value}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-7 sm:p-8 rounded-2xl border border-border bg-card"
        >
          <h3 className="text-[1rem] font-medium text-foreground mb-6 font-['Space_Grotesk']">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-[0.8rem] text-muted-foreground mb-1.5">
                  Your Name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`${inputClass} ${errors.name ? "border-destructive focus:ring-destructive/30" : ""}`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className={errorClass}>{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-[0.8rem] text-muted-foreground mb-1.5">
                  Your Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`${inputClass} ${errors.email ? "border-destructive focus:ring-destructive/30" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-[0.8rem] text-muted-foreground mb-1.5">
                Subject <span className="text-primary">*</span>
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Project Inquiry"
                className={`${inputClass} ${errors.subject ? "border-destructive focus:ring-destructive/30" : ""}`}
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className={errorClass}>{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[0.8rem] text-muted-foreground mb-1.5">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none ${errors.message ? "border-destructive focus:ring-destructive/30" : ""}`}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters",
                  },
                })}
              />
              {errors.message && (
                <p className={errorClass}>{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl text-[0.9rem] font-medium hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-[0_0_24px_rgba(245,158,11,0.25)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}

            </button>
          </form>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <p className="text-[0.8rem] text-muted-foreground">Also find me on</p>
          <a
            href="https://www.linkedin.com/in/mohamed-e-63102220b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-surface hover:border-primary/20 hover:bg-surface-hover text-[0.8rem] text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            <Linkedin size={14} className="text-primary" />
            LinkedIn
          </a>
          <a
            href="https://github.com/mohamadelagamal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-surface hover:border-primary/20 hover:bg-surface-hover text-[0.8rem] text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            <Github size={14} className="text-primary" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
