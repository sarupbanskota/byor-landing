import Head from "next/head";
import Link from "next/link";
import {
  CourseCards,
  FeatureCard,
  Hero,
  StatsLarge,
  Testimonial,
  ValuePropositions,
  WaitlistForm,
  Footer,
} from "components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Projects for hackers</title>
        <link rel="icon" href="/for/favicon.ico" />
      </Head>
      <main className="w-full bg-radial-at-b from-teal-100 via-lime-50 to-white">
        <Hero
          title={
            <>
              Deep Dive Projects. <br />
              For Curious Hackers.
            </>
          }
          subtitle={
            <>
              The adventure you always wanted. <br /> In the language you wanted
              to master.
            </>
          }
          testimonial={{
            quote: <>“What I cannot create, I do not understand”</>,
            author: <>— Richard Feynman</>,
          }}
        />
        <FeatureCard />
        <Testimonial
          whiteBg={true}
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
        {/* <ValuePropositions /> */}
        {/* <CourseCards upcomingOnly title waitlist/> */}
        <Footer light />
      </main>
    </div>
  );
}
