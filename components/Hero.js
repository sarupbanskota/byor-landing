import { LogoCloud } from "./LogoCloud";
import { PrimaryButton } from "./PrimaryButton";
export { Hero };

function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-4 md:pb-16">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700 sm:text-5xl md:text-6xl">
                A Redis Pro’s <br className="md:hidden" /> Best Kept Secret.
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg font-semibold sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
                Build your own Redis. Get crystal clear on how it works.{" "}
                <br className="hidden md:block"></br>
                Become your team&apos;s resident performance expert.
              </p>
              <div className="mt-12">
                <PrimaryButton text="Start Learning →" />
                <span className="block text-teal-700 mt-2 text-sm">
                  100% free. No CC required.
                </span>
              </div>
              <p className="italic text-lg max-w-xl mt-8 inline-block">
                “Never in my life have I needed something so much and not known
                until I received it.” —{" "}
                <span className="underline underline-offset-4">Reddit</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-900" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <img
              className="relative"
              src="/icons/app-screenshot.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <LogoCloud />
    </div>
  );
}
