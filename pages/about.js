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
  TestimonialGroup
} from "components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Projects for hackers</title>
        <link rel="icon" href="/for/favicon.ico" />
      </Head>
      <main className="w-full bg-radial-at-t from-black to-gray-900">
        <Hero
          hideCourses
          hideLogos
          dark
          title={
            <>
              A community of hackers
              <br />
              who dig one level deeper.
              <br />
            </>
          }
          subtitle={
            <>
              We celebrate curiosity, growth, and learning by doing.
              <br className="hidden md:block" />
              Because hands-on experience is special.
            </>
          }
          testimonial={{
            quote: <>“What I cannot create, I do not understand”</>,
            author: <>— Richard Feynman</>,
          }}
        />
        <TestimonialGroup />
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
