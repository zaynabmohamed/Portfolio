import imgprofile from "../../assets/WhatsApp Image 2025-10-26 at 19.25.55_08a59068.jpg";
import { FaGithub, FaLinkedin , FaWhatsapp} from "react-icons/fa";
import CV from "../../assets/ZaynabMohamed-CV.pdf";
import "./Home.Module.css";
import { useEffect } from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "../../lib/utils";

export default function Home () {
   useEffect(()=>{
      document.title= "Zaynab Mohamed — Frontend Developer"
    },[])
  return (
    <>
    <div className="Home relative min-h-screen">
     <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes/>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around">
          <div>
              <img
          className="w-40 h-40 md:w-60 md:h-60 rounded-full mb-4 md:mb-0 md:mr-8 relative z-20"
          alt="image profile"
          src={imgprofile}
        />
        </div>
        <div className="flex flex-col">
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 text-center")}>
         Hi,Zaynab Mohamed
      </h1>
      <h2 className="text-gray-200 text-center text-3xl pt-4">Frontend Developer</h2>
      </div>
          </div>
      <p className="text-center mt-2 text-neutral-300 relative z-20 flex ">
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
      </p>
    </div>
    </div>
    </>
  );
}
