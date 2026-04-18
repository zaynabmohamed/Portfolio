import imgprofile from "../../assets/WhatsApp Image 2025-10-26 at 19.25.55_08a59068.jpg";
import "./Home.Module.css";
import { useEffect } from "react";
import bg from "../../assets/image_w1376_h768_background_only.jpeg";

export default function Home() {
  useEffect(() => {
    document.title = "Zaynab Mohamed — Frontend Developer";
  }, []);

  return (
    <section className="Home relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative top-12 z-10 mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-12">
        <div className="glass-card w-full rounded-3xl  p-6 md:p-10">
          <div className="flex flex-col items-center gap-6">
            {/* Profile */}
            <div className="flex flex-col items-center">
              <img
              loading='lazy'
                src={imgprofile}
                alt="Zaynab Mohamed"
                className="h-30 w-30 rounded-full border border-white/20 object-cover shadow-lg md:h-52 md:w-52"
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <h1 className="text-3xl pl-6 font-semibold tracking-tight text-white md:text-4xl">
                Zaynab Mohamed
              </h1>
              <p className="mt-2 text-lg text-white/80 md:text-xl">
                Frontend Developer
              </p>

              <div className="mt-5 grid gap-3 pl-8 sm:grid-cols-2">
                <div className="info-chip text-white">
                  <span className="label">Specialization</span>
                  <span className="value">React • Next.js • UI</span>
                </div>
                <div className="info-chip text-white">
                  <span className="label">Role</span>
                  <span className="value">Open to opportunities</span>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                I build clean, responsive interfaces with modern React and strong attention
                to UX, performance, and component reusability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
