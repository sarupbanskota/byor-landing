import Head from "next/head";
import Link from "next/link";
import { FeatureCard, Hero } from "components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <Hero />
        <FeatureCard />
      </main>
    </div>
  );
}
