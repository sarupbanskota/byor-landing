import { motion } from "framer-motion";

export { CourseCards };

const courses = [
  {
    key: 'git',
    name: "Build your own Git",
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Advanced",
    theme: "orange",
    icon: "logo/git-half.png",
    languages: ["Rust", "Go", "Python", "Ruby", "Kotlin"],
  },
  {
    key: 'docker',
    name: "Build your own Docker",
    desc: "Dive deep into how Docker works, including the Registry API.",
    formattedDate: "Live Mar 22",
    level: "Intermediate",
    theme: "seablue",
    icon: "logo/docker-half.png",
    languages: ["Rust", "Go", "C", "PHP", "Nim" ]
  },
  {
    key: 'redis',
    name: "Build your own Redis",
    desc: "Take your networking skills further, by dissection how Redis works. ",
    formattedDate: "Live Feb 22",
    level: "Beginner",
    theme: "red",
    icon: "logo/redis-half.png",
    languages: ["Rust", "Ruby",  "Elixir", "Haskell", "Go", "Python", "C"],
  },
  {
    key: 'sqlite',
    name: "Build your own SQLite",
    desc: "Gain a solid understanding of SQL’sfile format and indexing.",
    formattedDate: "Live Mar 22",
    level: "Advanced",
    theme: "darkblue",
    icon: "logo/sqlite-half.png",
    languages: ["Rust", "Go", "Python", "Ruby"],
  },
  {
    name: "Build your own Regex Parser",
    upcoming: true,
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Advanced",
    theme: "orange",
    icon: "logo/git-half.png",
    languages: []
  },
  {
    name: "Build your own HTTP Server",
    upcoming: true,
    desc: "Dive deep into how Docker works, including the Registry API.",
    formattedDate: "Live Mar 22",
    level: "Intermediate",
    theme: "seablue",
    icon: "logo/docker-half.png",
    languages: []
  },
  {
    name: "Build your own Shell",
    upcoming: true,
    desc: "Gain a solid understanding of SQL’sfile format and indexing.",
    formattedDate: "Live Mar 22",
    level: "Advanced",
    theme: "darkblue",
    icon: "logo/sqlite-half.png",
    languages:[]
  },
  {
    name: "Build your own BitTorrent client",
    upcoming: true,
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Beginner",
    theme: "red",
    icon: "logo/git-half.png",
    languages:[]
  },
  {
    name: "Build your own Blockchain",
    upcoming: true,
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Beginner",
    theme: "red",
    icon: "logo/git-half.png",
    languages:[]
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CourseCards({title, waitlist, upcomingOnly}) {
  return (
    <div className="bg-white bg-opacity-25">
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        {title && <p className="text-center text-xl font-normal mb-12 mt-12">
          Vote for an upcoming course, and get automatic early access
        </p>}
        <div className="flex gap-8 overflow-scroll flex-col md:flex-row items-center">
          {courses.filter(c => upcomingOnly ? c.upcoming : !c.upcoming).map((course) => (
            <a
              href={`https://app.codecrafters.io/courses/${course.key}`}
              key={course.key}
              className="flex align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-lg hover:shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6 !pr-0 justify-between items-center min-w-fit border border-gray-100"
            >
              <div>
                {" "}
                <div className="text-left">
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-2xl g:text-3xl font-extrabold text-gray-900">
                      {course.name}
                    </h3>
                    <div className="mt-2 max-w-sm">
                      <p className="text-xl lg:text-2xl tracking-tight text-gray-900">
                        {course.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-start gap-4">
                  <motion.a href={`https://app.codecrafters.io/courses/${course.key}`} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                  <div
                    className={classNames(
                      course.theme === "orange"
                        ? "bg-[#F05033]"
                        : course.theme === "seablue"
                        ? "bg-blue-500"
                        : course.theme === "red"
                        ? "bg-[#C52E31]"
                        : "bg-sky-900",
                      "flex-grow inline-flex justify-center rounded-sm border border-transparent shadow-sm px-2 py-1 md:px-4 md:py-2 text-white text-lg md:text-xl font-black"
                    )}
                  >
                    {course.upcoming ? "Vote" : <span>Try {course.level} →</span>}
                  </div>
                  </motion.a>
                  <span className="flex gap-2">
                    {/* if course.languages array is not empty, loop through the array and create an image tag with src attribute equals course.languages prepended with the word "icon" */}
                    {course.languages.length > 0 &&
                      course.languages.map((language) => (
                        <img
                          src={`/for/icons/${language.toLowerCase()}.svg`}
                          alt={language}  
                          className="h-5 w-5"
                          key={language}
                          title={language}
                        />
                      ))}
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={`/for/${course.icon}`}
                  alt="git icon"
                  className=" h-32 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
