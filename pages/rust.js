import Head from "next/head";
import Link from "next/link";
import {
  CourseCards,
  FeatureCard,
  Hero,
  Testimonial,
  ValuePropositions,
  WaitlistForm,
  Footer,
} from "components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Master Rust with Real Projects</title>
        <link rel="icon" href="/for/favicon.ico" />

        <meta name="title" content="Master Rust with Real Projects" />
        <meta
          name="description"
          content="Build Git, Docker, Redis & SQLite from scratch, in Rust."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codecrafters.io/" />
        <meta property="og:title" content="Master Rust with Real Projects" />
        <meta
          property="og:description"
          content="Build Git, Docker, Redis & SQLite from scratch, in Rust."
        />
        <meta
          property="og:image"
          content="https://codecrafters.io/for/for/landing-og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://codecrafters.io" />
        <meta property="twitter:title" content="Master Rust with Real Projects" />
        <meta
          property="twitter:description"
          content="Build Git, Docker, Redis & SQLite from scratch, in Rust."
        />
        <meta
          property="twitter:image"
          content="https://codecrafters.io/for/for/landing-og.png"
        />
      </Head>
      <main className="w-full bg-radial-at-b from-teal-100 via-lime-50 to-white">
        <Hero
          title={
            <>
              The Rust Pro’s <br /> Best Kept Secret.
            </>
          }
          subtitle={
            <>
              Build a real project. Achieve depth. <br />
              Become your team’s Rust expert.
            </>
          }
          testimonial={{
            quote: <>“My favorite way to master a language.”</>,
            author: (
              <>
                — Pranjal Paliwal, $35k winner of{" "}
                <a
                  href="https://hackatom.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  HackAtom 2021
                </a>
              </>
            ),
          }}
        />
        <FeatureCard />
        <Testimonial
          course="redis"
          author={{
            name: "Charles Guo",
            image: "/for/avatar-charles-guo.png",
            role: "Engineer, Scala Team",
            company: "stripe",
          }}
          testimonial={{
            title: "The redis challenge was extremely fun.",
            content: (
              <>
                I ended up having to read Redis protocol specification doc
                pretty carefully in its entirety! The result felt like
                lightly-guided independent study, if that makes sense. (Which,
                again, was lots of fun)
              </>
            ),
          }}
        />
        <ValuePropositions />
        {/* <CourseCards upcomingOnly title waitlist/> */}
        <Footer />
      </main>
    </div>
  );
}
