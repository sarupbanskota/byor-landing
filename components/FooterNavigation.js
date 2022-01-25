export { FooterNavigation };

const navigation = {
  Courses: [
    { name: "Build Your Own Redis", href: "#" },
    { name: "Build Your Own Docker", href: "#" },
    { name: "Build Your Own Git", href: "#" },
    { name: "Build Your Own SQLite", href: "#" },
  ],
  Resources: [
    { name: "Help", href: "https://docs.codecrafters.io/" },
    { name: "Status", href: "https://status.codecrafters.io/" },
    { name: "Twitter", href: "https://twitter.com/codecraftersio" },
    { name: "Job Board", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Bulk Licenses", href: "#" },
    { name: "Partnerships", href: "#" },
    { name: "Investors", href: "#" },
    { name: "Careers", href: "#" },
  ],
  Legal: [
    { name: "Terms", href: "https://codecrafters.io/terms" },    
    { name: "Privacy", href: "https://codecrafters.io/privacy" },
  ],
};

function FooterNavigation() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Courses
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {navigation.Courses.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
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
            Resources
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {navigation.Resources.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
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
            Company
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {navigation.Company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
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
                  target="_blank"
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
