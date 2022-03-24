import Image from "next/image";

import { useEffect } from "react";

export { CourseCards };

const courses = [
  {
    key: "docker",
    name: "Build your own Docker",
    desc: "Dive deep into how Docker works, including the Registry API.",
    formattedDate: "Live Mar 22",
    level: "Intermediate",
    theme: "seablue",
    icon: "logo/docker-half-resized.png",
    languages: [
      "Rust",
      "Go",
      "Clang",
      "PHP",
      // "Nim"
    ],
  },
  {
    key: "git",
    name: "Build your own Git",
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Advanced",
    theme: "orange",
    icon: "logo/git-half-resized.png",
    languages: ["Rust", "Go", "Python", "Ruby", "Kotlin"],
  },
  {
    key: "redis",
    name: "Build your own Redis",
    desc: "Take your networking skills further, by dissecting how Redis works. ",
    formattedDate: "Live Feb 22",
    level: "Intermediate",
    theme: "red",
    icon: "logo/redis-half-resized.png",
    languages: [
      "Rust",
      "Ruby",
      "Elixir",
      "Python",
      "Go",
      // , "Clang", , "Haskell"
    ],
  },
  {
    key: "sqlite",
    name: "Build your own SQLite",
    desc: "Gain a solid understanding of SQLite’s file format and indexing.",
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
    languages: [],
  },
  {
    name: "Build your own HTTP Server",
    upcoming: true,
    desc: "Dive deep into how Docker works, including the Registry API.",
    formattedDate: "Live Mar 22",
    level: "Intermediate",
    theme: "seablue",
    icon: "logo/docker-half.png",
    languages: [],
  },
  {
    name: "Build your own Shell",
    upcoming: true,
    desc: "Gain a solid understanding of SQLite’s file format and indexing.",
    formattedDate: "Live Mar 22",
    level: "Advanced",
    theme: "darkblue",
    icon: "logo/sqlite-half.png",
    languages: [],
  },
  {
    name: "Build your own BitTorrent client",
    upcoming: true,
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Beginner",
    theme: "red",
    icon: "logo/git-half.png",
    languages: [],
  },
  {
    name: "Build your own Blockchain",
    upcoming: true,
    desc: "Master the inner workings of Git, and explain any complex scenario. ",
    formattedDate: "Live Feb 22",
    level: "Beginner",
    theme: "red",
    icon: "logo/git-half.png",
    languages: [],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CourseCards({ title, waitlist, upcomingOnly }) {
  useEffect(() => {
    const coursesContainer = document.getElementsByClassName("course-cards")[0];
    const coursesScrollWidth = coursesContainer.scrollWidth;
    let done = false;

    setInterval(() => {
      if (!done && coursesContainer.scrollLeft < 100) {
        coursesContainer.scrollTo(coursesContainer.scrollLeft + 2, 0);
      }
    }, 1);
    setInterval(() => {
      if (
        !done &&
        coursesContainer.scrollLeft < 200 &&
        coursesContainer.scrollLeft >= 100
      ) {
        coursesContainer.scrollTo(coursesContainer.scrollLeft + 1, 0);
      }
      if (coursesContainer.scrollLeft == 200) {
        done = true;
      }
    }, 1);
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        {title && (
          <p className="text-center text-xl font-normal mb-12 mt-12">
            Vote for an upcoming course, and get automatic early access
          </p>
        )}
        <div className="my-8 md:my-0 course-cards flex justify-center flex-wrap items-center py-10 gap-6">
          {courses
            .filter((c) => (upcomingOnly ? c.upcoming : !c.upcoming))
            .map((course) => (
              <a
                href={`https://app.codecrafters.io/courses/${course.key}/overview`}
                key={course.key}
                className="flex align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-lg hover:shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6 !pr-0 justify-between items-center min-w-[340px] md:min-w-fit border border-gray-100"
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
                  <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-start space-x-4">
                    <div>
                      <div
                        className={`hover:opacity-90 ${classNames(
                          course.theme === "orange"
                            ? "bg-[#F05033] "
                            : course.theme === "seablue"
                              ? "bg-blue-500"
                              : course.theme === "red"
                                ? "bg-[#C52E31]"
                                : "bg-sky-900",
                          "flex-grow inline-flex justify-center rounded-sm border border-transparent shadow-sm px-2 py-1 md:px-4 md:py-2 text-white text-lg md:text-xl font-black"
                        )}`}
                      >
                        {course.upcoming ? (
                          "Vote"
                        ) : (
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 18"
                              width={18}
                              height={18}
                              fill="white"
                              className="inline"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                              />
                            </svg> Try {course.level} →</span>
                        )}
                      </div>
                    </div>
                    <span className="flex space-x-2">
                      {course.languages.length > 0 &&
                        course.languages.map((language) => (
                          <div key={`${language}`}>
                            <Image
                              src={`/for/icons/${language.toLowerCase()}.svg`}
                              alt={`${language} logo`}
                              height={20}
                              width={20}
                              layout="fixed"
                              priority={true}
                            />
                          </div>
                        ))}
                    </span>
                  </div>
                </div>
                <div className="absolute md:relative inset-y-0 right-0 opacity-20 md:opacity-100">
                  <div style={{ position: 'relative', width: '100px', height: '128px' }}>
                    <Image
                      src={`/for/${course.icon}`}
                      alt={`${course.key} logo`}
                      layout="fill" objectFit="contain"
                      priority={true}
                    />
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
