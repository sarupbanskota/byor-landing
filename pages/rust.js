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
        <title>Master Rust with real projects</title>
        <link rel="icon" href="/for/favicon.ico" />
      </Head>
      <main className="w-full">
        <Hero />
        <FeatureCard />
        <Testimonial />
        <ValuePropositions />
        {/* <CourseCards upcomingOnly title waitlist/> */}

      </main>
    </div>
  );
}
