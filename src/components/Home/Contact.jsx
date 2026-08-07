import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { PROFILE_LOCATION, SERVICES } from "../../constants";

const phoneNo = import.meta.env.VITE_API_PHONE_NO;
const mail = import.meta.env.VITE_API_EMAIL;
// const hometown = "Podakkudi -614103, Thiruvarur";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mail) return;
    const subject = name ? `Portfolio: ${name}` : "Portfolio contact";
    const body = [message, "", name ? `Name: ${name}` : "", email ? `Reply-to: ${email}` : ""]
      .filter(Boolean)
      .join("\n");
    globalThis.location.href = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/[0.08] py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <motion.h2
        id="contact-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="sr-only"
      >
        Contact
      </motion.h2>

      {/* Uncomment when ready to start taking freelance work.
      Also uncomment `SERVICES` in constants/index.js and import it above. */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 grid gap-4 sm:grid-cols-3"
      >
        {SERVICES.map(({ title, description }) => (
          <div
            key={title}
            className="glass rounded-2xl p-6 transition hover:border-indigo-400/30 hover:bg-white/[0.06]"
          >
            <h4 className="text-base font-semibold text-white">{title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
          </div>
        ))}
      </motion.div>


      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="glass-strong grid gap-12 rounded-3xl p-8 lg:grid-cols-2 lg:gap-16 lg:p-14"
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Contact
          </p>
          <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Let&apos;s build the next version together.
          </h3>
          <p className="mt-6 max-w-md text-lg text-slate-400">
            Open to roles and collaborations. Reach out by email, WhatsApp, or the form — I&apos;ll
            respond as soon as I can.
          </p>
          <p className="mt-8 flex items-start gap-2 text-sm text-slate-500">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden />
            <span>
              {PROFILE_LOCATION}
              {/* <span className="text-slate-600"> · </span>
              {hometown} */}
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${phoneNo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/40 hover:text-white"
            >
              <FaWhatsapp className="text-lg text-emerald-400" aria-hidden />
              WhatsApp
            </a>
            <a
              href={mail ? `mailto:${mail}` : "#contact"}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-400/40 hover:text-white"
              aria-disabled={mail ? undefined : true}
              onClick={mail ? undefined : (e) => e.preventDefault()}
            >
              <IoIosMail className="text-lg text-indigo-400" aria-hidden />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/mdirfanul/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-400/40 hover:text-white"
            >
              <FaLinkedin className="text-lg text-blue-400" aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-surface-muted/50 p-6 sm:p-8"
        >
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-400">Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-400">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-400">Message</span>
            <textarea
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              placeholder="What would you like to work on?"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!mail}
          >
            Send message
          </button>
          {!mail && (
            <p className="text-center text-xs text-amber-200/90">
              Set <code className="rounded bg-white/10 px-1">VITE_API_EMAIL</code> in{" "}
              <code className="rounded bg-white/10 px-1">.env</code> to enable the form.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;