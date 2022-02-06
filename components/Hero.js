import { useEffect, useState } from "react";
import { CourseCards } from "./CourseCards";
import { LogoCloud } from "./LogoCloud";
import { PrimaryButton } from "./PrimaryButton";
export { Hero };

function Hero({ title, subtitle, testimonial, dark, hideCourses, hideLogos }) {
  const darkTitleColors = [
    "text-transparent bg-clip-text bg-radial-at-t from-lime-300 to-white",
    "text-transparent bg-clip-text bg-radial-at-t from-white to-lime-300",
  ];

  const [darkTitleColor, setDarkTitleColor] = useState(darkTitleColors[0]);

  let colorIndex = 1;

  useEffect(() => {
    setInterval(() => {
      if (colorIndex < darkTitleColors.length) {
        setDarkTitleColor(darkTitleColors[colorIndex]);
        colorIndex += 1;
      } else {
        colorIndex = 0;
      }
    }, 3000);
  });

  return (
    <div
      className={
        dark
          ? "bg-radial-at-t from-black to-gray-900"
          : "bg-radial-at-b from-teal-400 via-lime-50 to-white"
      }
    >
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-4">
          <div className="mt-8 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6">
            <div className="text-center">
              <h1
                className={`text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl ${
                  dark ? darkTitleColor : ""
                }`}
              >
                {title}
              </h1>
              <p
                className={`mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl ${
                  dark ? "text-white" : ""
                }`}
              >
                {subtitle}
              </p>
              {/* <div className="mt-8">
                <PrimaryButton text="Choose Project →" />
                <span className="block text-teal-700 mt-2 text-sm">
                  100% free. No CC required.
                </span>
              </div> */}
              <p
                className={`italic text-lg max-w-xl mt-8 inline-block ${
                  dark ? "text-white" : ""
                }`}
              >
                {testimonial.quote}
                <br />
                <span className="text-sm">{testimonial.author}</span>
              </p>
            </div>
          </div>
        </div>

        <div className={!hideCourses ? "relative" : "hidden"}>
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full" />
          </div>
          <CourseCards />
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <img
              className="relative"
              src="/app-screenshot.png"
              alt="App screenshot"
            />
          </div> */}
        </div>
      </div>
      <LogoCloud hideLogos={hideLogos} />
    </div>
  );
}
