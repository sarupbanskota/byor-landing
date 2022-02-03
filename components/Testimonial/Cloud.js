import { PrimaryButton } from "components";
import { StackedAvatars } from "./StackedAvatars";
import { TestimonialCard } from "./TestimonialCard";

export { TestimonialCloud };

function TestimonialCloud() {
  return (
    <div>
      <div className="flex flex-col items-center mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          A community you want to be in.<br/>The passion is infectious. 
        </h2>
        <p className="mt-4 text-lg leading-6 text-black max-w-lg">
          Our community spans top tech teams, projects, and learning organisations. We are united by our love for programming.
        </p>
        <div className="grid gap-6 lg:grid-cols-3 ">
          <TestimonialCard 
            course="redis"
            author={{
              name: "Charles Guo",
              image: "/for/avatar-charles-guo.png",
              role: "Engineer, Scala Team",
              company: "stripe"
            }}
            testimonial={{
              title: "The redis challenge was extremely fun.",
              content: <>I ended up having to read Redis protocol specification doc pretty
              carefully in its entirety! The result felt like lightly-guided
              independent study, if that makes sense. (Which, again, was lots of
              fun)</>
            }}
          />
          <TestimonialCard 
            course="redis"
            author={{
              name: "Maya Brodsky",
              image: "/for/avatar-charles-guo.png",
              role: "Participant, Recurse Center",
              company: "stripe"
            }}
            testimonial={{
              title: "Enjoying it a lot so far.",
              content: <>
              I've started the Docker challenge. Just the right level of guidance, helpful and still gives you a lot of freedom to explore and learn for yourself.
              </>
            }}
          />
          {/* <TestimonialCard 
            course="redis"
            author={{
              name: "Beyang Liu",
              image: "/for/avatar-charles-guo.png",
              role: "CTO, Sourcegraph",
              company: "stripe"
            }}
            testimonial={{
              title: "Found out from a colleague.",
              content: <>It has you build your own version of things
        like Git and Docker from scratch. <br/><br/>Seems like a cool way to build a stronger mental model of how those tools work.
        
            </>
            }}
          /> */}
          <TestimonialCard 
            course="redis"
            author={{
              name: "Raghav Dua",
              image: "/for/avatar-charles-guo.png",
              role: "Engineer, Shuttl",
              company: "stripe"
            }}
            testimonial={{
              title: "Spent a full day on the Docker course.",
              content: <>
               I ended up building the whole thing myself. As an SRE (and mostly a user of Docker), digging into its internals blew me away.<br/>
            </>
            }}
          />
        </div>
        <div className="mt-8 flex flex-col">
        <PrimaryButton
          text="Join our Discord →"
          color="black"
          link={"https://discord.com/invite/DeqUD2P"}
        />
        <a
          href="https://discord.com/invite/DeqUD2P"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inline-flex mt-4 gap-2 items-center">
            <StackedAvatars />{" "}
            {/* <p className="text-sm">Meet our members </p> */}
          </div>
        </a>
        </div>
      </div>
    </div>
  );
}
