import { motion } from "framer-motion";
import { EXPERIENCE } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-16 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <motion.h2
        id="experience-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Experience
      </motion.h2>
      <ol className="relative mx-auto max-w-3xl space-y-6 border-l border-indigo-500/25 pl-8">
        {EXPERIENCE.map((job, index) => (
          <motion.li
            key={`${job.company}-${job.period}`}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -12 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative"
          >
            <span
              className="absolute -left-[2.125rem] top-2 h-3 w-3 rounded-full border-2 border-indigo-400 bg-surface ring-4 ring-indigo-500/10"
              aria-hidden
            />
            <article className="glass-strong rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="text-sm font-medium text-indigo-400">{job.period}</p>
              </div>
              <p className="mt-1">
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-300 hover:text-indigo-400"
                >
                  {job.company}
                </a>
                <span className="text-slate-500"> · {job.location}</span>
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400 marker:text-indigo-500">
                {job.highlights.map((item, i) => (
                  <li key={`${job.company}-${i}`} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
