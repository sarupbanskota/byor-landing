export { FooterNavigation };

const navigation = {
  Languages: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  Challenges: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  Resources: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  Legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

function FooterNavigation() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Languages
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {navigation.Languages.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Challenges
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {navigation.Challenges.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Resources
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {navigation.Resources.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Legal
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {navigation.Legal.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
