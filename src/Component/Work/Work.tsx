import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
 

export default function Work({ projects }) {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const active = projects[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    setIsHover(false);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsHover(false);
  };

  return (
    <div className="bg-[#0C1821] py-20 overflow-hidden">
        <h1 className='text-center justify-center gap-4 p-4 mb-4'>Projects</h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-[90%] mx-auto">
        {/* 🔹 Phone Mockup */}
        <div className="flex flex-col items-center">

          <div
            className=" mx-auto sm:w-[460px] sm:h-[420px] md:w-[360px] md:h-[560px] w-[330px] h-[500px] bg-black rounded-[40px] p-3 shadow-2xl relative transition duration-300 hover:scale-105"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {/* notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-full"></div>

            {/* screen */}
            <div className="w-full h-full bg-white rounded-[30px] overflow-hidden">

              <AnimatePresence mode="wait">
                {!isHover ? (
                  <motion.img
                    key={active.src}
                    src={active.src}
                    alt={active.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                ) : (
                  <motion.iframe
                    key={active.LiveDemo}
                    src={active.LiveDemo}
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

            </div>

            {!isHover && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                Hover to view live
              </div>
            )}
          </div>

          {/* 🔹 Navigation */}
          <div className="flex gap-6 mt-6">
            <button
              onClick={prev}
              className="bg-white/10 p-3 rounded-full hover:scale-110 transition"
            >
              <ArrowLeft className="text-white" />
            </button>

            <button
              onClick={next}
              className="bg-white/10 p-3 rounded-full hover:scale-110 transition"
            >
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>

        {/* 🔹 Project Details */}
        <div className="text-center lg:text-left">

          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {active.name}
              </h2>

              <p className="text-gray-400 mb-4">
                {active.designation}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                {active.Desc}
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href={active.LiveDemo}
                  target="_blank"
                  className="bg-green-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
                >
                  Live Demo
                </a>

                <a
                  href={active.GitHub}
                  target="_blank"
                  className="border border-white/30 text-white px-5 py-2 rounded-full text-sm hover:bg-white/10 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}