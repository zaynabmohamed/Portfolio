
import Dansial from "../../assets/Screenshot 2025-10-11 023502.png"
import Ecommerce from "../../assets/Screenshot 2025-10-11 025041.png"
import AccountingApp from "../../assets/Screenshot 2026-09-05 045544.png"
import CareHub from "../../assets/Screenshot 2026-04-18 001734.png"
import MedicalWebsite from "../../assets/Screenshot 2026-09-05 045800.png"
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
Desc: "Full-stack accounting management system for managing clients, invoices, payments, transactions, and visits, with role-based access control and a responsive dashboard.",
name: "Accounting App",
designation: "Frontend => Next.js, TypeScript and Tailwind CSS | Backend & Database => Firebase, Firestore | Authentication & Authorization => Firebase Auth + Role-Based Access Control | State Management => React Query",
src: AccountingApp,
GitHub: "https://github.com/zaynabmohamed/Accounting_App.git",
LiveDemo: "https://accounting-app-umber-tau.vercel.app",
},
{
  Desc: "Full-stack medical clinic management system for managing doctors, patients, appointments, and clinic services, with a responsive interface and streamlined online booking experience.",
  name: "Medical Website",
  designation: "Frontend => Next.js, TypeScript and Tailwind CSS | Backend & Database => Firebase, Firestore | Authentication & Authorization => Firebase Auth | Booking System => Doctor Appointments & Scheduling | UI/UX => Responsive Design",
  src: MedicalWebsite,
  GitHub: "https://github.com/zaynabmohamed/Medical-website.git",
  LiveDemo: "https://medical-website-silk-psi.vercel.app/",
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

