import { Button } from "../../components/ui/button";
import Notes from "../../assets/Screenshot 2025-10-28 141513.png"
import Social from "../../assets/Screenshot 2025-10-28 170458.png"
import Dansial from "../../assets/Screenshot 2025-10-11 023502.png"
import Ecommerce from "../../assets/Screenshot 2025-10-11 025041.png"
import RealEstate from "../../assets/Screenshot 2025-12-03 002533.png"
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
export default function Projects() {
   useEffect(()=>{
    document.title= "Projects Showcase — Zaynab Mohamed"
  },[])
  const [active, setActive] = useState(testimonials[0]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const handleprev = () => {
    const currentIndex = testimonials.indexOf(active);
    const length = testimonials.length;
    const prevIndex = (currentIndex - 1 + length) % length;
    setActive(testimonials[prevIndex]);
  };
  const handlenext = () => {
    const currentIndex = testimonials.indexOf(active);
    const length = testimonials.length;
    const nextIndex = (currentIndex + 1) % length;
    setActive(testimonials[nextIndex]);
  };
  const isActive = (index: number) => {
    return testimonials[index] === active;
  };
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <>

      <div className="flex inset-0 bg-linear-to-br from-blue-950 via-purple-900 to-gray-900 min-h-screen w-full pb-10 ">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-16 sm:top-20 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-purple-500 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-16 sm:bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-cyan-500 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-8 sm:bottom-10 right-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-500 rounded-full opacity-20 animate-bounce"></div>
        </div>
        <div className="gap-8 sm:gap-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 p-4 sm:p-6 md:p-8 relative pb-24">
          {/* {Animation img} */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full top-24 sm:top-32 md:top-40 order-1 lg:order-1 md:w-[80%] mx-auto">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    z: -100,
                    rotateY: isLargeScreen ? randomRotateY() : 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : isLargeScreen ? 0.7 : 0,
                    scale: isActive(index) ? 1 : isLargeScreen ? 0.95 : 0.8,
                    z: isActive(index) ? 0 : isLargeScreen ? -100 : -50,
                    rotate: isActive(index) ? 0 : isLargeScreen ? randomRotateY() : 0,
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: isLargeScreen ? 100 : 50,
                    rotate: isLargeScreen ? randomRotateY() : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                  key={active.name}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    draggable={false}
                    className="rounded-2xl sm:rounded-3xl h-full w-full object-cover object-center shadow-2xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="order-2 lg:order-1 ">
            {/* {Animation content} */}
            <div className="py-4 relative top-24 sm:top-32 md:top-40 lg:left-8">
              <motion.div
                key={active.name}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center lg:text-left ">
                  {active.name}
                </h3>
                <p className="text-sm sm:text-base  text-gray-300 pt-2 sm:pt-4 text-center lg:text-left">
                  {active.designation}
                </p>
                <motion.p className="text-sm  sm:text-base md:text-lg text-gray-900 mt-4 sm:mt-6 md:mt-8 leading-relaxed text-center lg:text-left">
                  {active.Desc.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 ">
                  <Button className="hover:cursor-pointer text-sm sm:text-base px-4 py-2">
                    <Link to={active.LiveDemo} target="_blank">Live Demo</Link>
                  </Button>
                  <Button className="hover:cursor-pointer text-sm sm:text-base px-4 py-2">
                    <Link to={active.GitHub} target="_blank">GitHub</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            {/* {Animation Events Button } */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 sm:pt-10 md:mb-30 relative top-24 sm:top-32 lg:left-20">
              <Button className="h-8 sm:h-10 w-8 sm:w-10 rounded-full hover:scale-110 transition-transform" onClick={handleprev}>
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button className="h-8 sm:h-10 w-8 sm:w-10 rounded-full hover:scale-110 transition-transform " onClick={handlenext}>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 const testimonials = [
    {
      Desc: "Developed a full-featured E-commerce website using React.js, Next.js, and TypeScript, providing users with a smooth and dynamic shopping experience. Implemented Context API for state management, React Hook Form for handling user input and validation, and integrated APIs to manage products, carts, and wishlists",
      name: "E-Commerce",
      designation: "React.js,Next.js,context,Api, TypeScript, React-hook-form,Tailwindcss,Tools UI",
      src: Ecommerce,
      GitHub: "https://github.com/zaynabmohamed/E-Commerce-Route.git",
      LiveDemo: "https://e-commerce-route-a5q7.vercel.app",
    },
    {
      Desc: "Note App using Next.js, Tailwind CSS, and Hero UI for a clean and modern interface. Integrated Axios for API communication and React Hook Form for efficient form handling. Added Toast notifications to enhance user experience and provide instant feedback. The app allows users to add, edit, and delete notes easily with a smooth and responsive design.",
      name: "Notes App",
      designation: "Next.js,Axios,Hero UI,Tailwindcss,toolsUi",
      src: Notes,
      GitHub: "https://github.com/zaynabmohamed/Notes.Next.js.git",
      LiveDemo: "https://notes-next-js-fawn.vercel.app",
    },
    {
      Desc: "Developed a responsive multi-section website using HTML, CSS, Bootstrap, and Media Queries. The project focuses on clean design, smooth layout, and full responsiveness across all devices. Bootstrap was used to structure and style the layout efficiently, while custom CSS and media queries ensured a unique and adaptive user interface.",
      name: "Dansial",
      designation: "Html,Css,Bootstrip MediaQuery",
      src: Dansial,
      GitHub: "https://github.com/zaynabmohamed/Assigement-6-DevFoilo.git",
      LiveDemo: "https://daniels-exam-route-fdgg.vercel.app",
    },
    {
      Desc: "using React, Tailwind CSS, and Hero UI, allowing users to create profiles, share posts, like, and comment.Integrated Axios and React Query for efficient API data fetching and synchronization,while React Hook Form was used for smooth and validated user input handling",
      name: "Social.App",
      designation: "React,Hero Ui,Tailwindcss,ReactQuery, React-hook-form,axios ",
      src: Social,
      GitHub: "https://github.com/zaynabmohamed/Social.App.git",
      LiveDemo: "social-app-gamma-beryl.vercel.app/",
    },
    {
      Desc: "built with Next.js ,Tailwind CSS and TypeScript , allowing users to explore properties, view detailed and filter homes based on their needs",
      name:"Real-Estate",
      designation: "Frontend=> Next.js and Tailwind , Backend=> Convex and Database  , Authentication=> clerk",
      src: RealEstate,
      GitHub: "https://github.com/zaynabmohamed/Real_Estate.git",
      LiveDemo: "https://real-estate-bspv.vercel.app",
    },
  ];
