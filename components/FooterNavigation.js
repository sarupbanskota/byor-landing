export { FooterNavigation };

const navigation = {
  Courses: [
    { name: "Build Your Own Git", href: "https://codecrafters.io/challenges/git" },    
    { name: "Build Your Own Redis", href: "https://codecrafters.io/challenges/redis" },
    { name: "Build Your Own Docker", href: "https://codecrafters.io/challenges/docker" },
    { name: "Build Your Own SQLite", href: "https://codecrafters.io/challenges/sqlite" },
  ],
  Resources: [
    { name: "Help", href: "https://docs.codecrafters.io/" },
    { name: "Status", href: "https://status.codecrafters.io/" },
    // { name: "Job Board", href: "#" },
  ],
  Company: [
    { name: "About", href: "mailto:sarup@codecrafters.io" },
    { name: "Investors", href: "mailto:sarup@codecrafters.io" },
    { name: "Bulk Licenses", href: "mailto:sarup@codecrafters.io" },
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
        <div className="text-left">
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            Courses
          </h3>
          <ul role="list" className="mt-8 space-y-4">
            {navigation.Courses.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 md:mt-0 text-center">
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            Resources
          </h3>
          <ul role="list" className="mt-8 space-y-4">
            {navigation.Resources.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-8 text-center">
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            Company
          </h3>
          <ul role="list" className="mt-8 space-y-4">
            {navigation.Company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 md:mt-0 text-right">
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            Legal
          </h3>
          <ul role="list" className="mt-8 space-y-4">
            {navigation.Legal.map((item) => (
              <li key={item.name} className="">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-900"
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
