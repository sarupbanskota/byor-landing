import { CourseCards } from "./CourseCards";
import { LogoCloud } from "./LogoCloud";
import { PrimaryButton } from "./PrimaryButton";
export { Hero };

function Hero() {
  return (
    <div className="bg-radial-at-b from-teal-400 via-lime-50 to-white">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-4 md:pb-16">
          <div className="mt-8 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-black sm:text-5xl md:text-6xl">
                The Rust Pro’s <br /> Best Kept Secret.
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
                Build a real project. Achieve depth.{" "}
                <br/>
                Become your team’s Rust expert.
              </p>
              {/* <div className="mt-8">
                <PrimaryButton text="Choose Project →" />
                <span className="block text-teal-700 mt-2 text-sm">
                  100% free. No CC required.
                </span>
              </div> */}
              <p className="italic text-lg max-w-xl mt-8 inline-block">
              “My favorite way to master a language.” <br/>
                <span className="text-sm">— Pranjal Paliwal, $35k winner of <a href="https://hackatom.org/" target="_blank" rel="noreferrer" className="underline underline-offset-4">HackAtom 2021</a></span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full" />
          </div>
          <CourseCards/>
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <img
              className="relative"
              src="/app-screenshot.png"
              alt="App screenshot"
            />
          </div> */}
        </div>
      </div>
      <LogoCloud />
    </div>
  );
}
