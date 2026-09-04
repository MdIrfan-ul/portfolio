import { lazy, Suspense } from "react";
import Hero from "./components/Home/Hero";
import Nav from "./components/Nav/Nav";

const About = lazy(() => import("./components/Home/About"));
const Experience = lazy(() => import("./components/Home/Experience"));
const Technologies = lazy(() => import("./components/Home/Technologies"));
const Projects = lazy(() => import("./components/Home/Projects"));
const Contact = lazy(() => import("./components/Home/Contact"));

function SectionFallback() {
  return <div className="py-24" />;
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip text-slate-200 antialiased">
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
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Technologies />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}
