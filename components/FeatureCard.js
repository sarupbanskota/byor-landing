import Image from "next/image";
export { FeatureCard };

const features = [
  {
    icon: "/for/logo/github.svg",
    name: <>Real Projects. <br/>Just Enough Guidance.</>,
    desc: <>Recreate your favorite tools, your own way. <br/>A fresh approach to language mastery.</>,
  },
  {
    icon: "/for/logo/iterm2.png",
    name: <>Your Own Machine.<br/>Your Own Setup.</>,
    desc: <>Work within your favorite local editor <br/>and terminal, with your favorite extensions.</>,
  },
  {
    icon: "/for/logo/discord.svg",
    name: <>The Best Community.<br/>Inspiration Abound.</>,
    desc: <>Discover new approaches from a community <br/>passionate about bettering themselves.</>,
  },
  ,
];

function FeatureCard() {
  return (
    <section className="relative py-12 pb-16 border-t border-gray-700 border-opacity-50 bg-radial-at-t from-black to-gray-900">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div>
                <span>
                  <Image
                    src={feature.icon}
                    width={80}
                    height={80}
                    alt={feature.name}
                  />
                </span>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-white">
                  {feature.name}
                </h3>
                <p className="mt-5 text-lg tracking-tight text-gray-400">
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
