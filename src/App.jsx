import Contact from "./components/Home/Contact";
import Experience from "./components/Home/Experience";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Projects from "./components/Home/Projects";
import Technologies from "./components/Home/Technologies";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-slate-200 antialiased">
      <div className="fixed inset-0 -z-10 bg-surface">
        <div
          className="absolute inset-0 bg-grid-soft bg-[length:48px_48px] opacity-90"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-glow-indigo"
          aria-hidden
        />
      </div>
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
