import imgprofile from "../../assets/WhatsApp Image 2025-10-26 at 19.25.55_08a59068.jpg";
import { FaGithub, FaLinkedin , FaWhatsapp} from "react-icons/fa";
import CV from "../../assets/CV.Zaynab (Frontend).pdf";
import "./Home.Module.css";
import { useEffect } from "react";
export default function Home () {
   useEffect(()=>{
      document.title= "Zaynab Mohamed — Frontend Developer"
    },[])
  return (
    <div className="Home relative min-h-screen ">
       {/* {Design Page Home} */}
      {/* <div className="grid-container">
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div> */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center p-4 min-h-screen">
        <img
          className="w-40 h-40 md:w-60 md:h-60 rounded-full mb-4 md:mb-0 md:mr-8 "
          alt="image profile"
          src={imgprofile}
        />
        <div className="text-center md:text-left">
          <h1 className="cursor-pointer text-2xl md:text-4xl lg:text-6xl text-white mb-2  sm:text-xl">
            Hi,Zaynab Mohamed
          </h1>
          <h2 className="text-gray-400 text-xl md:text-3xl mb-4 text-center">
            Frontend Developer
          </h2>
          {/* { Icon Contact Me} */}
          <div className="flex justify-center md:justify-center gap-6 relative top-6">
            <a
              href="https://www.linkedin.com/in/zaynab-mohamed-09458933a"
                            target="_blank"
              rel="noopener noreferrer"
              className="text-white "
            >
              <FaLinkedin className="md:w-6 md:h-6 "/>
            </a>
            <a
              href="https://github.com/zaynabmohamed?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white "
            >
              <FaGithub className="md:w-6 md:h-6 " />
            </a>
            <a
              href="https://wa.me/201020910926?text=Hello%2C%20this%20is%20Zaynab%20Mohamed.%20I%27m%20a%20Front-End%20Developer%20skilled%20in%20React%20and%20Next.js.%20I%27d%20be%20happy%20to%20discuss%20any%20job%20opportunity%20available.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white "
            >
              <FaWhatsapp className="md:w-6 md:h-6 " />
            </a>
            <div>
              <a
                className="text-white border-2 rounded-2xl p-2 "
                href={CV}
                rel="CV Me"
                download
              >
                DownLoad CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
