export default function Fact() {
  return (
    <main className="w-full h-full to-white p-12">
      <div className="lg:flex justify-around">
        <div class="lg:w-1/2">
          <h1 class="text-4xl tracking-tight font-extrabold mt-8 mb-4">
            Git Trivia #262
          </h1>

          <div class="lg:w-2/3 py-8 font-['Arial']">
            <p>
              Torvalds wanted a BitKeeper-like distributed system for the
              kernel, but none of the available systems met his needs.
              <br />
              <br />
            </p>
            <p>
              He cited an example of a SCM system needing 30s to apply a patch
              and update all associated metadata, and noted that this would not
              scale to the needs of Linux kernel development, where
              synchronizing with fellow maintainers could require 250 such
              actions at once.
              <br />
              <br /> For his design criterion, he specified patching should take
              no more than three seconds, and added three more goals:
              <br />
              <br />
              <ul class="list-disc pl-8 ">
                <li>
                  Take Concurrent Versions System (CVS) as an example of what
                  not to do; if in doubt, do the exact opposite
                </li>
                <li>Support a distributed, BitKeeper-like workflow</li>
                <li>
                  Include very strong safeguards against corruption, either
                  accidental or malicious
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div>
          <div class="bg-black h-64 w-64 flex flex-col justify-center">
            <p class="p-8 text-2xl text-center font-extrabold text-white">
              Torvalds built Git over a weekend.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
