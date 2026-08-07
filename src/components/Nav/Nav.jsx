import logo from "../../assets/logo.png";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#technologies", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 pt-4 pb-2">
      <nav
        className="glass flex flex-col gap-4 rounded-2xl px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-4 sm:justify-start">
          <a href="#home" className="flex shrink-0 items-center gap-2" aria-label="Home">
            <img src={logo} width={44} height={29} alt="" className="opacity-95" />
            <span className="hidden font-semibold text-white sm:inline">Irfan</span>
          </a>
          <div className="flex items-center gap-1 text-lg text-slate-400 sm:hidden">
            <a
              href="https://www.linkedin.com/in/mdirfanul/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 transition-colors hover:bg-white/5 hover:text-indigo-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mdirfanul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 transition-colors hover:bg-white/5 hover:text-indigo-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-indigo-400"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center justify-center gap-1 text-xl text-slate-400 sm:flex">
          <a
            href="https://www.linkedin.com/in/mdirfanul/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 transition-colors hover:bg-white/5 hover:text-indigo-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mdirfanul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 transition-colors hover:bg-white/5 hover:text-indigo-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/MdIrfanullah/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="rounded-lg p-2 transition-colors hover:bg-white/5 hover:text-indigo-400"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.hackerrank.com/profile/mohamedirfan1720"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HackerRank"
            className="rounded-lg p-2 transition-colors hover:bg-white/5 hover:text-indigo-400"
          >
            <FaHackerrank />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
