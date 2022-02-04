import Head from "next/head";
import Link from "next/link";
import {
  CourseCards,
  FeatureCard,
  Hero,
  StatsLarge,
  TestimonialCloud,
  ValuePropositions,
  WaitlistForm,
  Footer,
  Team,
} from "components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Projects for hackers</title>
        <link rel="icon" href="/for/favicon.ico" />
      </Head>
      <main className="w-full bg-radial-at-b from-teal-400 via-lime-50 to-white">
        <Hero
          hideCourses
          hideLogos
          dark
          title={
            <>
              Built for Explorers of Code.
              <br />
              By Hackers who like to Hack.
              <br />
            </>
          }
          subtitle={
            <>
              Because what you experience through building is special.
              <br />
              We celebrate curiosity, growth, and community.
            </>
          }
          testimonial={{
            quote: <>“What I cannot create, I do not understand”</>,
            author: <>— Richard Feynman</>,
          }}
        />
        <TestimonialCloud />
        <Team />
        {/* <FeatureCard /> */}
        {/* <Testimonial whiteBg={true}/> */}
        {/* <ValuePropositions /> */}
        {/* <CourseCards upcomingOnly title waitlist/> */}
        <Footer light />
      </main>
    </div>
  );
}
