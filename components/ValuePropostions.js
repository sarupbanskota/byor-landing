import { Stats } from "./Stats";

export { ValuePropositions };

const values = [
  {
    id: 1,
    desc: "You're an experienced programmer, and are looking to pickup or master Rust.",
  },
  {
    id: 2,
    desc: "You're curious how your favorite technologies work internally.",
  },
  {
    id: 3,
    desc: "You're a self-paced, minimal guidance person (vs requiring hand-holding).",
  },
];

function ValuePropositions() {
  return (
    <section className="relative bg-radial-at-b from-black to-gray-900 py-16 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-center md:text-left text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Is this course for me?
                </h2>
                <div className="mt-10 space-y-4 md:space-y-6 lg:space-y-10 max-w-lg">
                  {values.map((item) => (
                    <div key={item.id} className="relative">
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                        <img
                          className="rounded-full w-6 md:w-12 h-10 md:h-10"
                          src="/for/icons/check.svg"
                          alt=""
                        />
                      </div>
                      <p className="ml-16 md:text-2xl leading-6 font-medium text-white">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <Stats />
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 -mr-2.5 md:mr-0">
            <div className="pl-4 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full lg:absolute lg:-right-[220px] lg:h-full lg:w-auto lg:max-w-none"
                src="/for/redis-course-light.png"
                alt="Redis Course Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
