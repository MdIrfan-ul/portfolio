import { useEffect, useState } from "react";
import profilePic from "../../assets/portfolio_image.png";
import {
  HERO_CONTENT,
  PROFILE_LOCATION,
  PROFILE_ROLES,
  PROFILE_ROLE_SECONDARY,
} from "../../constants";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE_ROLES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-24 pb-12 pt-6 lg:pb-20 lg:pt-10"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.p
            variants={childVariants}
            className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400"
          >
            {PROFILE_LOCATION}
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={childVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Mohamed Irfanullah M
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="mt-3 flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={PROFILE_ROLES[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text text-transparent"
              >
                {PROFILE_ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.p>
          <motion.p
            variants={childVariants}
            className="mt-2 max-w-xl text-base font-medium leading-relaxed text-slate-400 sm:text-lg"
          >
            {PROFILE_ROLE_SECONDARY}
          </motion.p>
          {/* Uncomment when ready to start taking freelance work.
          Also uncomment `FREELANCE_TAGLINE` in constants/index.js and import it above.
          <motion.p
            variants={childVariants}
            className="mt-3 inline-flex items-center gap-2 self-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-300 lg:self-start"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            {FREELANCE_TAGLINE}
          </motion.p>
          */}
          <motion.p
            variants={childVariants}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div variants={childVariants} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/Irfan_Resume_FullStack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
            >
              Download resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-indigo-400/40 hover:text-white"
            >
              View projects
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="flex flex-1 justify-center lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-indigo-600/10 blur-2xl"
              aria-hidden
            />
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={profilePic}
                alt="Mohamed Irfanullah M"
                width={640}
                height={640}
                className="aspect-square max-h-[min(420px,70vw)] w-full rounded-[1.5rem] object-cover sm:max-h-[480px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;