export { LogoCloud };

const logos = [
  { id: 1, name: "Amazon", src: "/icons/logos/Amazon.svg" },
  { id: 2, name: "Facebook", src: "/icons/logos/Facebook.svg" },
  { id: 3, name: "Walmart", src: "/icons/logos/Walmart.svg" },
  { id: 4, name: "Uber", src: "/icons/logos/Uber.svg" },
];

function LogoCloud() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 lg:py-4 lg:pb-12 pb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-400 text-sm tracking-wide pb-12">
          Learn alongside pros at top infra teams, schools, and crypto projects
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
            >
              <img
                className="h-12 mix-blend-luminosity"
                src={logo.src}
                alt={`${logo.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
