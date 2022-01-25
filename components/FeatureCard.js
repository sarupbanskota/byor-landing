import Image from "next/image";
export { FeatureCard };

const features = [
  {
    icon: "/icons/calendar.svg",
    name: <>Real Projects. <br/>Just Enough Guidance.</>,
    desc: "Recreate your favorite tools, in your own way. A fresh approach to language mastery.",
  },
  {
    icon: "/icons/GoPythonRust-updated.svg",
    name: <>On Your Own Machine.<br/>With Your Own Setup.</>,
    desc: "Work within your favorite local editor and terminal, with your favorite extensions.",
  },
  {
    icon: "/icons/discord.svg",
    name: <>The Best Community.<br/>Inspiration Abound.</>,
    desc: "Keep discovering new approaches from a community passionate about this stuff.",
  },
  ,
];

function FeatureCard() {
  return (
    <section className="relative bg-gray-900 py-12 pb-16 border-t border-gray-50 border-opacity-50">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6 text-white">
              <div>
                <span>
                  <Image
                    src={feature.icon}
                    width={80}
                    height={80}
                    alt={feature.name}
                  />
                </span>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight">
                  {feature.name}
                </h3>
                <p className="mt-5 text-lg font-semibold tracking-tight text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
