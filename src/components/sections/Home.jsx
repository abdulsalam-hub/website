import {Revalscroll} from "../RevalScroll";
import Wat from '/wat.png'
import Git from "/src/assets/git.png";
import In from "/src/assets/in.png";
import Face from "/src/assets/face.png";
export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative w-full"
      >
        <Revalscroll>
          <div className="text-center px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent leading-right">
              hi , am thundetech{" "}
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I' am a front-end developer who loves to craft clean , scalable
              web applications. My goal is to build web solutions that offer
              both exeptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#project"
                className="bg-blue-500 rounded px-6 text-gray-300 py-3 font-medium transition-all-300 relative
                       overflow-hidden hover:-translate-0.5 hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)] hover:text-blue-700
                      "
              >
                Projects
              </a>
              <a
                href="#contact"
                className=" border border-blue-500/50 text-blue-800 bg-gray-500 rounded px-6 py-3 font-medium transition-all duration-200 relative
                       overflow-hidden hover:-translate-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:bg-transparent 
                      "
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex z-40 flex-wrap relative top-40 justify-between px-6 py-4 items-center bg-gray-400 rounded-xl my-7 mx-auto border-blue-500 border-2 transition-all">
            <a href="https://www.facebook.com/thundetech">
              <img
                src={Face}
                loading="lazy"
                alt="facebook handle"
                className="w-8 rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 transition-all hover:-translate-y-1 hover:border"
              />
            </a>
            <a href="https://www.linkedin.com/in/abdulsalam-thunde-947538384">
              <img
                src={In}
                alt="linkedin profile"
                loading="lazy"
                className="w-8 rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,255,0.5)] p-1.5 transition-all hover:-translate-y-1 hover:border"
              />
            </a>
            <a href="https://github.com/abdulsalam-hub">
              <img
                src={Git}
                alt="github repository"
                loading="lazy"
                className="w-8 rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 transition-all hover:-translate-y-1 hover:border"
              />
            </a>
            <a href="https://wa.me/+234087654502">
              <img
                src={Wat}
                alt="whatsapp me link"
                loading="lazy"
                className="w-8 rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 transition-all hover:-translate-y-1 hover:border"
              />
            </a>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};
