export { LogoCloud };

const logos = [
  { name: "Uber", src: "/for/logo/Uber.svg" },
  { name: "Ionic Framework", src: "/for/logo/ionic.svg" },
  { name: "Stripe", src: "/for/logo/stripe.svg" },
  { name: "Amazon Web Services", src: "/for/logo/aws.svg" },
  { name: "Deliveroo", src: "/for/logo/deliveroo.svg" },
  { name: "JP Morgan Chase", src: "/for/logo/jpm-chase.svg" },
];

function LogoCloud() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 lg:py-4 lg:pb-12 pb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-400 text-sm tracking-wide pb-12">
          Learn alongside pros at top software teams, schools, and crypto projects
        </h2>
        <div className="flex justify-between">
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
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
