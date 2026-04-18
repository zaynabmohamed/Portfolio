import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { useEffect, type CSSProperties } from "react";
import { Share2, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import "./Skills.Module.css";

export default function Skills() {
  useEffect(() => {
    document.title = "Skills & Technologies — Zaynab Mohamed";
  }, []);

  const skillIcons = [
    { label: "HTML", Icon: SiHtml5, color: "text-orange-500" },
    { label: "CSS", Icon: SiCss3, color: "text-blue-500" },
    { label: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    { label: "React", Icon: SiReact, color: "text-cyan-400" },
    { label: "Next.js", Icon: SiNextdotjs, color: "text-white" },
    { label: "TypeScript", Icon: SiTypescript, color: "text-sky-400" },
    { label: "Context API", Icon: Share2, color: "text-cyan-300" },
    { label: "Redux", Icon: GitBranch, color: "text-violet-300" },
  ];

  return (
    <div className="bg-[#0C1821] py-20 relative overflow-hidden ">
      {/* القوس (Glow Circle) */}
      <h1 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
        Skills & Tools
      </h1>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-green-100 rounded-full opacity-20 blur-3xl"
      />
      {/* Layout */}
      <div className="mt-24 grid lg:grid-cols-2 grid-cols-1 gap-12 items-center w-[90%] mx-auto relative m-6">
        {/* 🔹 Orbit Section */}
        <div className="flex justify-center items-center">
          <div
            className="orbit-wrap"
            style={
              {
                "--orbit-duration": "28s",
                "--radius": "clamp(120px, 27vw, 170px)",
              } as CSSProperties
            }
          >
            <div className="orbit-rotator">
              <div className="orbit-ring" />

              {skillIcons.map(({ label, Icon, color }, i) => {
                const n = skillIcons.length;
                const angle = (360 / n) * i - 90;
                return (
                  <div
                    key={label}
                    className="orbit-item"
                    style={
                      {
                        "--angle": `${angle}deg`,
                      } as CSSProperties
                    }
                  >
                    <div className="orbit-upright flex flex-col items-center gap-2">
                      <div className="orbit-icon">
                        <Icon className={`h-8 w-8 ${color}`} />
                      </div>

                      <span className="text-xs text-white/80">{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="orbit-core" />
          </div>
        </div>
        <div className="flex justify-center items-center relative mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg max-w-md text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 ">
              About My Frontend Journey
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed ">
             Frontend Developer skilled in React, Next.js, and TypeScript. Experienced in scalable
web apps with clean architecture, state management, and REST API integration.
Strong focus on performance optimization, SEO, and production-ready delivery.
Seeking challenging roles in modern React/Next.js development
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
