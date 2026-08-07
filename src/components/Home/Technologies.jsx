import { RiReactjsLine } from "react-icons/ri";
import {
  SiAmazonwebservices,
  SiMongodb,
  SiDocker,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiNestjs,
  SiGraphql,
  SiRedis,
  SiAnthropic,
  SiOpenai,
} from "react-icons/si";
import { FaBootstrap, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { PiCursorClickBold } from "react-icons/pi";
import { motion } from "framer-motion";

const stack = [
  { icon: RiReactjsLine, label: "React", color: "text-cyan-400" },
  { icon: SiNestjs, label: "NestJS", color: "text-red-400" },
  { icon: FaNodeJs, label: "Node.js", color: "text-emerald-400" },
  { icon: SiExpress, label: "Express", color: "text-emerald-500" },
  { icon: SiGraphql, label: "GraphQL", color: "text-fuchsia-400" },
  { icon: SiMysql, label: "MySQL", color: "text-slate-300" },
  { icon: SiMongodb, label: "MongoDB", color: "text-emerald-400" },
  { icon: SiRedis, label: "Redis", color: "text-red-400" },
  { icon: SiAmazonwebservices, label: "AWS", color: "text-amber-200" },
  { icon: SiDocker, label: "Docker", color: "text-sky-400" },
  { icon: IoLogoFirebase, label: "Firebase", color: "text-amber-400" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-400" },
  { icon: FaBootstrap, label: "Bootstrap", color: "text-violet-400" },
  { icon: FaPython, label: "Python", color: "text-amber-300" },
];

const aiTools = [
  { icon: SiAnthropic, label: "Claude", color: "text-orange-300" },
  { icon: PiCursorClickBold, label: "Cursor", color: "text-slate-200" },
  { icon: SiOpenai, label: "ChatGPT", color: "text-emerald-300" },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="scroll-mt-24 py-16 lg:py-24"
      aria-labelledby="tech-heading"
    >
      <motion.h2
        id="tech-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Tech stack
      </motion.h2>
      <motion.ul
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {stack.map(({ icon: Icon, label, color }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
          >
            <div className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-6 transition hover:border-indigo-400/30 hover:bg-white/[0.06]">
              <Icon className={`text-5xl ${color}`} aria-hidden />
              <span className="text-center text-sm font-medium text-slate-300">{label}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 16 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-14 text-center text-xl font-semibold tracking-tight text-white"
      >
        AI-Assisted Development
      </motion.h3>
      <motion.ul
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-md grid-cols-3 gap-3"
      >
        {aiTools.map(({ icon: Icon, label, color }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
          >
            <div className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-6 transition hover:border-indigo-400/30 hover:bg-white/[0.06]">
              <Icon className={`text-5xl ${color}`} aria-hidden />
              <span className="text-center text-sm font-medium text-slate-300">{label}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Technologies;
