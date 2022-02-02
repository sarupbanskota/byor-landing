export { Footer };

const navigation = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/codecraftersio",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/codecrafters-io",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
  courses: [
    {
      name: "Build Your Own Git",
      href: "https://codecrafters.io/challenges/git",
    },
    {
      name: "Build Your Own Redis",
      href: "https://codecrafters.io/challenges/redis",
    },
    {
      name: "Build Your Own Docker",
      href: "https://codecrafters.io/challenges/docker",
    },
    {
      name: "Build Your Own SQLite",
      href: "https://codecrafters.io/challenges/sqlite",
    },
  ],
  resources: [
    { name: "Discord", href: "https://discord.com/invite/DeqUD2P" },
    { name: "Help", href: "https://docs.codecrafters.io/" },
    { name: "Status", href: "https://status.codecrafters.io/" },
    // { name: "Job Board", href: "#" },
  ],
  company: [
    { name: "About", href: "mailto:sarup@codecrafters.io" },
    { name: "Investors", href: "mailto:sarup@codecrafters.io" },
    { name: "Bulk Licenses", href: "mailto:sarup@codecrafters.io" },
  ],
  legal: [
    { name: "Terms", href: "https://codecrafters.io/terms" },
    { name: "Privacy", href: "https://codecrafters.io/privacy" },
  ],
};

function Footer({light}) {
  return (
    <footer
      className={light ? "bg-white" : "bg-radial-at-b from-teal-100 via-lime-50 to-white"}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col-reverse gap-16 lg:flex-row lg:justify-between lg:gap-8">
          <div className="space-y-8 xl:col-span-1 flex flex-col justify-center items-center lg:items-start">
            <img
              className="h-10"
              src="/for/icons/CodeCrafters.png"
              alt="Code Crafters Logo"
            />
            <p className="text-gray-500 text-base font-bold text-center lg:text-left">
              CodeCrafters <br />
              <span className="font-normal">Projects for hackers.</span>
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:gap-0 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Courses
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.courses.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-800 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-800 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-800 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-800 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-green-200 pt-8">
          <p className="text-base text-black opacity-20 text-center">
            &copy; {new Date().getFullYear()} Educode Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
