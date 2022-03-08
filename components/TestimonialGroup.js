/* This example requires Tailwind CSS v2.0+ */
export { TestimonialGroup };
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const people = [
  {
    name: "Ananthalakshmi Sankar",
    title: "Automation Engineer",
    org: "Apple",
    imageUrl:
      "/for/testimonials/ananthalakshm-sankar.jpeg",
    testimonial:
      "There are few sites I like as much that have a step by step guide. The real-time feedback is so good, it's creepy!",
  },
  {
    name: "Raghav Dua",
    title: "Site Reliability Engineer",
    org: "Coinbase",
    imageUrl:
      "/for/testimonials/raghav-dua.jpeg",
    testimonial:
      "I spent a full day on your Docker building course and ended up building the whole thing myself. As a SRE (and mostly a user of docker), digging into the internals blew me away.",
  },
  {
    name: "Maya Farber Brodsky",
    title: "Participant",
    org: "Recurse Center",
    imageUrl:
      "/for/testimonials/maya-farber-brodsky.png",
    testimonial:
      "I've started the Docker challenge, enjoying it a lot so far. Just the right level of guidance, helpful and still gives you a lot of freedom to explore and learn for yourself.",
  },
  {
    name: "Patrick Burris",
    title: "Senior Software Developer",
    org: "CenturyLink",
    imageUrl:
      "/for/testimonials/patrick-burris.jpeg",
    testimonial:
      "The instant feedback right there in the git push is really cool. Didn't even know that was possible!",
  },
  {
    name: "Pranjal Paliwal",
    title: "$35k winner of HackAtom 2021",
    org: "Headout",
    imageUrl:
      "/for/testimonials/pranjal-paliwal.jpeg",
    testimonial: "My favorite way to master a language.",
  },
  {
    name: "Beyang Liu",
    title: "Chief Technology Officer",
    org: "SourceGraph",
    imageUrl:
      "/for/testimonials/beyang-liu.jpeg",
    testimonial:
      "Found out from a colleague. It has you build your own version of things like Git and Docker from scratch. A cool way to build a stronger mental model of how those tools work.",
  },
  // More people...
];

function TestimonialGroup() {
  return (
    <div className="sm:px-6 px-4 lg:px-8 mt-8 lg:mt-16 sm:mt-12 sm:pb-16 pb-12">
      <ul
        org="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 bg-gray-900 rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6 h-full">
              {/* testimonial */}
              {/* testimonial author */}
              <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">{person.testimonial}</p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 inline-flex rounded-full border-2 border-teal-600">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={person.imageUrl}
                        alt={`${person.name}'s photo`}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">
                        {person.name}
                      </div>
                      <div className="text-base font-medium text-gray-400">
                        {person.title}, {person.org}
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
