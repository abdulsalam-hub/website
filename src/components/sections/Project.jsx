import {Revalscroll} from "../RevalScroll";

export const Project= () => {
  return (
    <>
      <section
        id="project"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <Revalscroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                <h3 className="text-xl font-bold mb-2">BASIC PROJECT</h3>
                <p className="text-gray-300 mb-4">
                  Beautiful innovative project ideas that caught attentions with
                  designs scaling skills.
                </p>
                <div>
                  {["HTML", "CSS", "JAVASCIPT"].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-300
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-transform
                    "
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center ">
                  <a
                    href="src\components\views\index2.html"
                    className="text-blue-800 my-4 hover:text-gray-700 transition-colors"
                  >
                    view project ^
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                <h3 className="text-xl font-bold mb-2">PORTFOLIO PROJECT</h3>
                <p className="text-gray-300 mb-4">
                  immagine building a project of your start in tech is amazing though it lost to lot overseeing but <strong>it coming soon!!</strong>.
                </p>
                <div>
                  {["REACT", "TYPESCRIPT", "TAILWIND", "APIs"].map(
                    (tech, key) => {
                      return (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-300
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-transform
                    "
                        >
                          {tech}
                        </span>
                      );
                    }
                  )}
                </div>
                <div className="flex justify-between items-center ">
                  <a
                    href="src\components\views\index4.html"
                    className="text-blue-800 my-4 hover:text-gray-700 transition-colors"
                  >
                    view project ^
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                <h3 className="text-xl font-bold mb-2">OTHER PROJECT</h3>
                <p className="text-gray-300 mb-4">
                  Beautiful innovative project ideas of mine that caught attentions with
                  uplifting functions scaling.
                </p>
                <div>
                  {["JAVASCIPT", "REACT", "NODE"].map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-300
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-transform
                    "
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center ">
                  <a
                    href="src\components\views\todo\todo-list.html"
                    className="text-blue-800 my-4 hover:text-gray-700 transition-colors"
                  >
                    view project ^
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};

