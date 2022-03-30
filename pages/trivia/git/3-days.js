export default function Fact() {
  return (
    <main className="w-full h-full bg-radial-at-b from-teal-100 via-lime-50 to-white flex flex-col justify-top items-center p-12">
      <h1 class="text-4xl tracking-tight font-extrabold mt-8 mb-4">
        Git Trivia #262
      </h1>
      <div class="tilt-card-container p-48">
        <div class="tilt-card cursor-pointer">
          <div class="hover-point"></div>
          <div class="hover-point"></div>
          <div class="hover-point"></div>
          <div class="hover-point"></div>
          <div class="hover-point"></div>
          <div class="hover-point"></div>
          <div class="hover-point"></div>
          <div class="hover-point"></div>
          <div class="tilt-card-contents flex flex-col justify-center min-h-full rounded rounded-xl bg-black text-white">
            <p class="p-8 text-2xl text-center font-extrabold">
              Torvalds built Git over a weekend.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center">
        <a
          class="p-2 px-4 rounded border border-black text-black mr-2"
          href="https://news.ycombinator.com"
        >
          Discuss on HN
        </a>
        <a
          class="p-2 px-4 rounded border border-black bg-black text-white mr-2"
          href="https://news.ycombinator.com"
        >
          TIL? Tweet it →
        </a>
      </div>

      <div class="lg:w-1/3 py-8">
        <p>
          Torvalds wanted a BitKeeper-like distributed system for the kernel, 
          but none of the available systems met his needs.
          <br/><br/>
        </p>
        <p>
          He cited an example of a SCM system needing 30s to apply a patch 
          and update all associated metadata, and noted that this would 
          not scale to the needs of Linux kernel development, where 
          synchronizing with fellow maintainers could
          require 250 such actions at once. 
          
          <br/><br/> For his design criterion, he
          specified patching should take no more than three seconds, and
          added three more goals:
          <br/><br/>
          <ul class="list-disc pl-8 ">
            <li>Take Concurrent Versions System (CVS) as an example of what not to do; if in doubt, do the exact opposite</li>
            <li>Support a distributed, BitKeeper-like workflow</li>
            <li>Include very strong safeguards against corruption, either accidental or malicious</li>
          </ul>
        </p>
      </div>
    </main>
  );
}
