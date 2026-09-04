import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

function descriptionToBullets(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function codePreview(title, technologies) {
  const api = title.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
  return `// ${title}
import { setup } from './core';

export async function run() {
  const stack = ${JSON.stringify(technologies)};
  await setup({ service: '${api}', stack });
}`;
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-16 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <motion.h2
        id="projects-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-16 lg:gap-24">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass-strong overflow-hidden rounded-3xl lg:rounded-[2rem]"
          >
            <div
              className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image — reduce from 42% to 38% */}

              <a href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block shrink-0 overflow-hidden bg-surface-muted lg:w-[38%]"
              >
                <img
                  src={project.image}
                  alt=""
                  width={640}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-72 lg:h-full lg:min-h-[320px]"
                />
              </a>

              {/* Content — add min-w-0 to prevent overflow */}
              <div className="flex flex-1 flex-col justify-center gap-4 p-8 lg:p-10 min-w-0 overflow-hidden">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl truncate">

                    <a href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-indigo-400"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-indigo-400">
                    Live overview
                  </p>
                </div>

                <ul className="list-inside list-disc space-y-1.5 text-slate-400 marker:text-indigo-500">
                  {descriptionToBullets(project.description).map((line, i) => (
                    <li key={`${project.title}-${i}`} className="leading-relaxed text-sm">
                      {line}
                    </li>
                  ))}
                </ul>

                {/* Technologies — wrap naturally, no overflow */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Code preview — hidden on smaller screens */}
                <pre className="hidden xl:block overflow-x-auto rounded-xl border border-white/10 bg-[#070b14] p-4 text-left font-mono text-xs leading-relaxed text-slate-300 shadow-inner">
                  <code>{codePreview(project.title, project.technologies)}</code>
                </pre>
              </div>
            </div>
          </motion.article>
        ))
        }
      </div >
    </section >
  );
};

export default Projects;
