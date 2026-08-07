import { motion } from "framer-motion";
import profilePic from "../../assets/portfolio_image.png";
import { ABOUT_TEXT } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <motion.h2
        id="about-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        About me
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="glass-strong flex flex-col gap-10 rounded-3xl p-8 lg:flex-row lg:items-center lg:gap-14 lg:p-12"
      >
        <div className="mx-auto shrink-0 lg:mx-0">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-400/60 to-indigo-600/30 blur-md"
              aria-hidden
            />
            <img
              src={profilePic}
              alt="Mohamed Irfanullah M"
              width={200}
              height={200}
              className="relative h-48 w-48 rounded-full border border-white/15 object-cover shadow-lg lg:h-52 lg:w-52"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 space-y-5 text-lg leading-relaxed text-slate-300">
          {ABOUT_TEXT.split(/\n\n+/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
