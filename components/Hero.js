import { PrimaryButton } from "./PrimaryButton";
export { Hero };

function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-red-700 sm:text-5xl md:text-6xl">
                A Redis Pro’s Best Kept Secret.
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg font-semibold sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
                Build your own Redis. Get crystal clear on how it works.{" "}
                <br className="hidden md:block"></br>
                Become your team&apos;s resident performance expert.
              </p>
              <div className="mt-12">
                <PrimaryButton text="Start Learning →" />
                <span className="block text-red-700 mt-2 text-sm">
                  100% free. No CC required.
                </span>
              </div>
              <p className="italic text-2xl max-w-xl mt-8 inline-block">
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
              className="relative rounded-lg shadow-lg"
              src="/icons/app-screenshot.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto pb-8 px-4 sm:pb-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide pb-8">
            SREs & data pros at top companies learn with our challenges
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8  lg:grid-cols-4">
            <div className="col-span-1 flex justify-center  lg:col-span-1">
              <img
                className="h-12 mix-blend-luminosity"
                src="/icons/logos/Amazon.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center  lg:col-span-1">
              <img
                className="h-12 mix-blend-luminosity"
                src="/icons/logos/Facebook.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center  lg:col-span-1">
              <img
                className="h-12 mix-blend-luminosity"
                src="/icons/logos/Uber.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center  lg:col-span-1">
              <img
                className="h-12 mix-blend-luminosity"
                src="/icons/logos/Walmart.svg"
                alt="Transistor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
