import { Stats } from "./Stats";

export { ValuePropositions };

const values = [
  {
    id: 1,
    desc: "You’re well-versed with using Redis or a similar key-value database product",
  },
  {
    id: 2,
    desc: "You're curious about how Redis works internally, and how it stores data",
  },
  {
    id: 3,
    desc: "You work with an infrastructure team and use Redis as part of your job",
  },
];

function ValuePropositions() {
  return (
    <section className="relative bg-blue-50 pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-center md:text-left text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                  Is this course for me?
                </h2>
                <div className="mt-10 space-y-4 md:space-y-6 lg:space-y-10 max-w-lg">
                  {values.map((item) => (
                    <div key={item.id} className="relative">
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                        <img
                          className="rounded-full w-6 md:w-12 h-10 md:h-10"
                          src="/icons/check.svg"
                          alt=""
                        />
                      </div>
                      <p className="ml-16 md:text-2xl leading-6 font-medium text-gray-900">
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
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="icons/app-screenshot-2.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
