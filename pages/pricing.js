import { Footer } from "../components/Footer";
import { CheckIcon } from "@heroicons/react/outline";

const pricing = {
  tiers: [
    {
      title: "Curious Hacker",
      price: 0,
      frequency: "/month",
      description: "All core features, free.",
      features: [
        "All 4 challenges",
        "Access to Discord",
        "At least one stage/day",
        "Public Leaderboard Access",
        "Unlimited attempts/day",
        "Public Profile Page",
      ],
      cta: "Request Invite",
      mostPopular: false,
    },
    // {
    //   title: 'Obsessed Hacker',
    //   price: 32,
    //   frequency: '/month',
    //   description: 'No usage limits.',
    //   features: [
    //     'Everything in base tier',
    //     'Unlimited attempts/day',
    //     'Public Profile Page',
    //   ],
    //   cta: 'Request Invite',
    //   mostPopular: true,
    // },
    {
      title: "Teams & Orgs",
      price: 48,
      frequency: "/month",
      description: "No usage limits. Unlimited Possibilities.",
      features: [
        "Everything in base tier",
        "Private Leaderboard",
        "Advanced analytics",
        "Slack Integration",
        "Reviews & Collaboration",
        "Your own courses (add-on)",
        "Hiring assessments (add-on)",
      ],
      cta: "Request Invite",
      mostPopular: true,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          We meet you where you are.
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          Our challenges are 100% free for individual hackers, with the option
          to upgrade for more reliable builds, and other perks.
        </p>

        {/* Tiers */}
        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-teal-400 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-teal-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://usemotion.com/meet/sarup/cc-catchup"
                className={classNames(
                  tier.mostPopular
                    ? "bg-teal-400 text-white hover:bg-teal-600"
                    : "bg-teal-50 text-teal-700 hover:bg-teal-100",
                  "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
