import { WaitlistForm } from "./WaitlistForm";

export { CourseCards };

const upcomingCourses = [
  {
    name: "Build your own Redis",
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Beginner",
    theme: "red",
    icon: "/icons/git-half.png",
  },
  {
    name: "Build your own Git",
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Advanced",
    theme: "orange",
    icon: "/icons/git-half.png",
  },
  {
    name: "Build your own Docker",
    desc: "Dive deep into how Docker works, including the Registry API.",
    formattedDate: "Live Mar 22",
    level: "Intermediate",
    theme: "seablue",
    icon: "/icons/docker-half.png",
  },
  {
    name: "Build your own SQLite",
    desc: "Gain a solid understanding of SQL’sfile format and indexing.",
    formattedDate: "Live Mar 22",
    level: "Advanced",
    theme: "darkblue",
    icon: "/icons/sqlite-half.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CourseCards({title, waitlist}) {
  return (
    <div className="bg-white bg-opacity-25">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {title && <p className="text-center text-xl font-normal mb-12">
          Sign up for our upcoming courses
        </p>}
        <div className="flex gap-8 overflow-scroll flex-col md:flex-row items-center">
          {upcomingCourses.map((course) => (
            <a
              href="#"
              key="course.name"
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
                  <div
                    className={classNames(
                      course.theme === "orange"
                        ? "bg-[#F05033]"
                        : course.theme === "seablue"
                        ? "bg-blue-500"
                        : "bg-sky-900",
                      "flex-grow inline-flex justify-center rounded-sm border border-transparent shadow-sm px-2 py-1 md:px-4 md:py-2 text-white text-lg md:text-xl font-black"
                    )}
                  >
                    {course.level.toUpperCase()}
                  </div>
                  <span
                    className={classNames(
                      course.theme === "orange"
                        ? "text-[#F05033]"
                        : course.theme === "seablue"
                        ? "text-blue-500"
                        : "text-sky-900",
                      "flex-grow inline justify-center bg-white text-xl font-medium sm:mt-0"
                    )}
                  >
                    {course.formattedDate}
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={course.icon}
                  alt="git icon"
                  className=" h-32 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
        {waitlist && <WaitlistForm />}
      </div>
    </div>
  );
}
