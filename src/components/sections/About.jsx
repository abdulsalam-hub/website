import {Revalscroll} from "../RevalScroll";
import Work from "/src/assets/work.jpeg";
import Edu from "/src/assets/edu.png";
export const About = () => {
  const basicLists = ["HTML5", "CSS3", "BOOTSTRAP", "JavaScript","vanilla"];
  const frontLists = ["React", "TypeScript", "TailWindcss", "Api" ,"NodeJs"];
  return (
    <>
      <section
        id="about"
        className="min-h-screen w- items-center justify-center py-20"
      >
        <Revalscroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center">
              About Me
            </h2>
            <div className="glass rounded-xl p-4 border-white/8 border hover:translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)]">
              <p className="text-gray-400 text-center text-lg mb-6">
                A passionate developper with expertise in in building scalable
                web application solutions and creating innovative solutions.
              </p>
              <h2 className="text-center text-lg bg-gray-800 my-3 font-bold underline underline-blue-400 hover:text-blue-300 transition-all text-shad">
                SKILLS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl text-gray-300 font-bold mb-4">
                    Basic levels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {basicLists.map((tech, key) => {
                      return (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-300
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-transform
                    "
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl text-gray-300 font-bold mb-4">
                    Front-end
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontLists.map((tech, key) => {
                      return (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-300
                    hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)] transition-transform
                    "
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)]">
                <h3 className="text-xl text-blue-300 font-bold mb-4">
                  <img
                    src={Edu}
                    alt="education image"
                    loading="auto"
                    className="w-9 rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 transition-all hover:-translate-y-1 hover:border"
                  />{" "}
                  education :
                </h3>
                <ul className="list-disc list-inside py-2 px-1 text-gray-500 space-y-2  border border-blue-300 rounded">
                  <li>
                    <strong className="font-bold-xl">
                      CERTIFICATE in Web - Development
                    </strong>
                  </li>
                  -Olatech ENT. Lagos. (2023-2024)
                  <li>
                    <strong>Relevant Work:</strong> software Development, web &
                    application Development.
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)]">
                <h3 className="text-xl text-blue-300 font-bold mb-4">
                  <img
                    src={Work}
                    alt="working status image"
                    loading="eager"
                    className="w-9 rounded-xl bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1.5 transition-all hover:-translate-y-1 hover:border"
                  />{" "}
                  Work experince :
                </h3>
                <div className="space-y-4 text-gray-500 ">
                  <div className="">
                    <h4 className="font-semibold">
                      <strong>INTERN @ SWIFT llc. </strong>(2024 - till date)
                    </h4>
                    <p>
                      develop and assist senior DEVS in micro ux/functions of
                      the application. Assisted in building front end components
                      and integrating REST apis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};
