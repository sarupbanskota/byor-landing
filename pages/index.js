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
  VideoBox,
  VideoPlayerCSS
} from "components";
import { useRef } from "react";

export default function Home() {

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: 'muted',
    controls: false,
    responsive: true,
    loop: true,
    fluid: true,
    sources: [{
      src: 'https://user-images.githubusercontent.com/3149580/163636092-60bf5e22-cb4c-4f05-a17f-516b88a77a1a.mp4',
      type: 'video/mp4'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Build your own X. Master any language.</title>
        <link rel="icon" href="/for/favicon.ico" />
        <meta name="title" content="Build your own X. Master any language." />
        <meta
          name="description"
          content="Build Git, Docker, Redis & SQLite from scratch."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codecrafters.io/" />
        <meta property="og:title" content="Build your own X. Master any language." />
        <meta
          property="og:description"
          content="Build Git, Docker, Redis & SQLite from scratch."
        />
        <meta
          property="og:image"
          content="https://codecrafters.io/for/for/landing-og-index.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://codecrafters.io" />
        <meta property="twitter:title" content="Build your own X. Master any language." />
        <meta
          property="twitter:description"
          content="Build Git, Docker, Redis & SQLite from scratch."
        />
        <meta
          property="twitter:image"
          content="https://codecrafters.io/for/for/landing-og-index.png"
        />
      </Head>
      <main className="w-full bg-radial-at-b from-teal-100 via-lime-50 to-white">
        <Hero
          title={
            <>
              Deep dive projects <br />
              for curious hackers.
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
        <div className="hidden md:block px-48 bg-white">
          <VideoBox options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        
        <div className="md:hidden"><FeatureCard /></div>
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
