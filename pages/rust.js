import Head from "next/head";
import Link from "next/link";
import {
  CourseCards,
  FeatureCard,
  Hero,
  Testimonial,
  ValuePropositions,
  WaitlistForm,
} from "components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Master Rust with Real Projects</title>
        <link rel="icon" href="/for/favicon.ico" />
      </Head>
      <main className="w-full bg-radial-at-b from-teal-100 via-lime-50 to-white">
        <Hero title={<>The Rust Pro’s <br /> Best Kept Secret.</>}
         subtitle={<>Build a real project. Achieve depth. <br />
          Become your team’s Rust expert.</>
        }
        testimonial={{
          quote: <>“My favorite way to master a language.”</>,
          author: <>— Pranjal Paliwal, $35k winner of{" "}
          <a
            href="https://hackatom.org/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            HackAtom 2021
          </a></>
        }}/>
        <FeatureCard />
        <Testimonial />
        <ValuePropositions />
        {/* <CourseCards upcomingOnly title waitlist/> */}
        <Footer />
      </main>
    </div>
  );
}
