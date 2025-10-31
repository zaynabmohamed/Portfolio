import AnimatedCard from '../../components/spectrumui/animatedcard';
import { easeInOut } from 'framer-motion';
import { useEffect, useState } from 'react';
 import { motion } from "framer-motion";
import HTMl from "../../assets/3d-rendered-html-file-icon_84443-57041 , HTML.jpg"
import Css from "../../assets/css-code-vector-illustration-style_717774-1426. Css.jpg"
import JavaScript from "../../assets/js.png"
import React from "../../assets/React.jpeg"
import Context from "../../assets/context-icon-vector-image-can-be-used-journalism_120816-252196.Context.jpg"
import Redux from "../../assets/download.Redux.png"
import TypeScript from "../../assets/download.png"
import Next from "../../assets/imagesnext.png"
const tools = [
  {
    imgSrc: HTMl,
    title: 'HTML',

    aboutProduct: "The standard markup language for structuring web content and building accessible, semantic pages.",
  },
  {
    imgSrc: Css,
    title: 'Css',

    aboutProduct:
      "A styling language used to design responsive, visually appealing layouts and animations for the web.",
  },
  {
    imgSrc: JavaScript,
    title: 'Java Script',

    aboutProduct:"A versatile scripting language for creating interactive, client-side web experiences and logic.",
  },
  {
    imgSrc: React,
    title: 'React.Js',

    aboutProduct: 'Beautiful, accessible components built using Shadcn UI and Tailwind CSS.',
  },
];
const tool = [
  {
    imgSrc: Next,
    title: 'Next.Js',

    aboutProduct:"A React framework for server-side rendering, static site generation, and building fast, SEO-friendly apps.",
  },
  {
    imgSrc: TypeScript,
    title: 'TypeScript',

    aboutProduct:
     "A typed superset of JavaScript that adds static types for more robust, maintainable code.",
  },
  {
    imgSrc: Context ,
    title: 'Context',

    aboutProduct:"React's built-in state management for passing data through the component tree without prop drilling.",
  },
  {
    imgSrc: Redux,
    title: 'Redux',

    aboutProduct:"A predictable state container for managing global application state with a unidirectional data flow.",
  },
];
export default function Skills() {
  useEffect(()=>{
    document.title= "Skills & Technologies — Zaynab Mohamed"
  },[])
  const [touchComponent, setTouchComponent] = useState(false);
  const rotateDegree = [-20, -10, 5, 17];
  const xAxis = [-300, -85, 150, 340];
  const yAxis = [-65, -120, -135, -94];
  const initialRotation = [0, 6, 12, 17];
  const zIndex = [40, 30, 20, 10];
  return (
    <>
    <div className='bg-gradient-to-br from-blue-950 via-purple-900 to-black h-auto'>
      <div className='flex   md:flex-col lg:flex-row  flex-col lg:justify-around items-center w-[80%] mx-auto'>
      <div className='flex md:flex-row xl:flex-col flex-col min-h-screen relative right-20 lg:left-40 lg:pb-20 md:grid-cols-2 md:flex-row xl:left-10 lg:pr-44 lg:pt-30 lg:pl-10 md:py-4 md:h-auto'>
  {/* { First Motion Skills } */}
     <div
      className="items-center justify-center flex-1 ml-40 relative md:top-15 md:right-40 
     top-40 w-[80%] right-15 mb-6 md:left-10 xl:-top-15 xl:-left-18"
      onClick={() => setTouchComponent(!touchComponent)}
    >
      {tools.map((tool, ind) => (
        <motion.div
          key={ind}
          initial={{ x: 0, y: 0 }}
          animate={
            touchComponent
              ? { x: xAxis[ind], y: yAxis[ind], rotate: rotateDegree[ind] }
              : { x: 0, y: 0 }
          }
          transition={{ ease: easeInOut }}
          style={{
            zIndex: zIndex[ind],
            rotate: initialRotation[ind],
          }}
          className="lg:absolute lg:flex justify-center items-center top-40 relative "
        >
          <AnimatedCard imgSrc={tool.imgSrc} title={tool.title} aboutProduct={tool.aboutProduct} />
        </motion.div>
      ))}
    </div>
      {/* { Second Motion Skills } */}
    <div
      className="items-center justify-center flex-1 ml-40 relative 
     w-[80%] right-15 flex flex-col top-20 pt-52 lg:mt-40 md:mr-30 md:left-10 xl:-top-8 xl:-left-12"
      onClick={() => setTouchComponent(!touchComponent)}
    >
      {tool.map((tool, ind) => (
        <motion.div
          key={ind}
          initial={{ x: 0, y: 0 }}
          animate={
            touchComponent
              ? { x: xAxis[ind], y: yAxis[ind], rotate: rotateDegree[ind] }
              : { x: 0, y: 0 }
          }
          transition={{ ease: easeInOut }}
          style={{
            zIndex: zIndex[ind],
            rotate: initialRotation[ind],
          }}
          className="lg:absolute lg:flex justify-center relative items-center"
        >
          <AnimatedCard imgSrc={tool.imgSrc} title={tool.title} aboutProduct={tool.aboutProduct} />
        </motion.div>
      ))}
    </div>
 </div>
   {/* { about My Skills } */}
  <div className='relative lg:left-40 md:left-15 order-1 justify-center lg:pl-30 items-center pt-44 md:w-[80%] lg:w-[60%] md:pb-20 md:pr-20 '>
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg mx-auto "
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">About My Frontend Journey</h3>
          <p className="text-gray-300 leading-relaxed text-center">
            With a strong foundation in HTML, CSS, and JavaScript, I leverage modern frameworks like React and Next.js to build scalable and performant solutions. My expertise extends to TypeScript for type-safe development, Context API and Redux for efficient state management, ensuring robust and maintainable code. I am passionate about responsive design, accessibility, and staying up-to-date with the latest frontend technologies to deliver innovative solutions.
          </p>
        </motion.div>
  </div>
    </div>
    </div>
    </>
  );
}

