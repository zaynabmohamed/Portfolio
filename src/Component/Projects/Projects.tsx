import Notes from "../../assets/Screenshot 2025-10-28 141513.png"
import Social from "../../assets/Screenshot 2025-10-28 170458.png"
import Dansial from "../../assets/Screenshot 2025-10-11 023502.png"
import Ecommerce from "../../assets/Screenshot 2025-10-11 025041.png"
import RealEstate from "../../assets/Screenshot 2025-12-03 002533.png"
import CareHub from "../../assets/Screenshot 2026-04-18 001734.png"
import Work from "../Work/Work";
import Carousel from "../Carousel/Carousel"
const projects = [
  {
    name: "E-Commerce",
      Desc: "Developed a full-featured E-commerce website using React.js, Next.js, and TypeScript, providing users with a smooth and dynamic shopping experience. Implemented Context API for state management, React Hook Form for handling user input and validation, and integrated APIs to manage products, carts, and wishlists",
      designation: "React.js,Next.js,context,Api, TypeScript, React-hook-form,Tailwindcss,Tools UI",
    src: Ecommerce,
    LiveDemo: "https://e-commerce-route-a5q7.vercel.app",
    GitHub: "https://github.com/zaynabmohamed/E-Commerce-Route.git",
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
  Desc: "Clinic management dashboard with patient records and appointments. Built with Next.js and Tailwind CSS, with full frontend-backend integration using Appwrite database.",
  name: "CareHub Platform",
  designation: "Next.js, Tailwind, Appwrite",
  src: CareHub,
  GitHub: "https://github.com/zaynabmohamed/CareHub",
  LiveDemo: "https://care-hub-sage.vercel.app/",
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
      LiveDemo: "https://social-app-gamma-beryl.vercel.app",
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
export default function Projects() {
  return (
    <div>
<Work projects={projects}/> 
<Carousel/>  
 </div>
  )
}

