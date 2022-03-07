import { Footer } from "../components/Footer";
import { CheckIcon } from "@heroicons/react/outline";

const tiers = [
  {
    name: "Curious Hacker",
    priceMonthly: 0,
    href: "/for/rust",
    description: "All core features, free.",
    features: [
      "4 Challenges",
      "Discord Access",
      "Unlimited Attempts",
      "Public Leaderboard",
      "Public Profile Page",
    ],
    cta: "Get Started",
  },
  {
    name: "Teams & Orgs",
    priceMonthly: 48,
    href: "https://usemotion.com/meet/sarup/20",
    description: "No usage limits. Unlimited Possibilities.",
    features: [
      "Base Tier ++",
      "Slack Integration",
      "Private Leaderboard",
      "Reviews & Collaboration",
      "Your own courses (add-on)",
      "Hiring assessments (add-on)",
    ],
    cta: "Request Invite",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const extLinksProps = {
    target:"_blank",
    rel: "nofollow"
  }
  return (
    <>
      <div className="bg-gray-900 border-b">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Pricing
              </h2>
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                We meet you where you are.
              </p>
              <p className="text-xl text-gray-300">
                Our challenges are 100% free for individual hackers, with the
                option to upgrade for more reliable builds, and other perks.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12  sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-900" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <h3
                          className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-teal-100 text-teal-600"
                          id="tier-standard"
                        >
                          {tier.name}
                        </h3>
                      </div>
                      <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                        ${tier.priceMonthly}
                        <span className="ml-1 text-2xl font-medium text-gray-500">
                          /mo
                        </span>
                      </div>
                      <p className="mt-5 text-lg text-gray-500">
                        {tier.description}
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                      <ul role="list" className="space-y-4">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base text-gray-700">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className={tier.cta? "block" : "hidden"}>
                        <a
                          {...tier.priceMonthly !== 0 && {...extLinksProps}}
                          href={tier.href}
                          className={classNames(
                            tier.priceMonthly === 0
                              ? "bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-600"
                              : "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
                            "flex items-center justify-center px-5 py-3 text-base font-medium rounded-lg text-center text-white"
                          )}
                          aria-describedby={`tier-${tier.name.replace(/([a-z])([A-Z])/g, "$1-$2")
                          .replace(/\s+/g, '-')
                          .toLowerCase()}`}
                        >
                          {tier.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
