import { Footer, PrimaryButton } from "components";
import Head from "next/head";
import Script from "next/script";

export default function Fact() {
  return (
    <>
      <Head>
        <title>Build your own X. Master any language.</title>
        <link rel="icon" href="/for/favicon.ico" />
        <meta name="title" content="Git Trivia #547" />
        <meta name="description" content="Torvalds built Git over the weekend" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codecrafters.io/" />
        <meta
          property="og:title"
          content="Torvalds built Git over the weekend"
        />
        <meta
          property="og:description"
          content="Torvalds built Git over the weekend"
        />
        <meta
          property="og:image"
          content="https://codecrafters.io/for/facts/git-weekend.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://codecrafters.io" />
        <meta
          property="twitter:title"
          content="Torvalds built Git over the weekend"
        />
        <meta
          property="twitter:description"
          content="Torvalds built Git over the weekend"
        />
        <meta
          property="twitter:image"
          content="https://codecrafters.io/for/facts/git-weekend.png"
        />
      </Head>
      <h1 className="text-4xl lg:text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-center mt-16">
        Git Trivia #547.
      </h1>
      <main className="w-full h-full flex flex-col-reverse lg:flex-row p-12 justify-center items-center">
        <div class="mr-12 lg:border lg:border-0 lg:border-r-[1px] lg:border-black lg:pr-12">
          <div class="lg:max-w-[400px]">
            <p>
              Torvalds wanted a BitKeeper-like DVCS for the kernel, but no
              available systems met his needs.
            </p>
            <p>
              <br /> He wanted patching under three seconds, and added three
              more goals:
              <br />
              <br />
              <ul class="list-disc pl-8 ">
                <li>Support a distributed, BitKeeper-like workflow</li>
                <li>
                  Include very strong safeguards against corruption, either
                  accidental or malicious
                </li>
                <li>
                  Take Concurrent Versions System (CVS) as an example of what
                  not to do; if in doubt, do the exact opposite
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="mb-12 lg:mb-0">
          <div class="flex flex-col justify-center">
            <div className="atvImg w-[430px] h-[258px]">
              <img src="https://user-images.githubusercontent.com/3149580/162380490-8383aa1a-079c-4f4b-a2ce-93a431d2892c.png" />
              <div
                className="atvImg-layer"
                data-img="https://user-images.githubusercontent.com/3149580/162380490-8383aa1a-079c-4f4b-a2ce-93a431d2892c.png"
              ></div>
              <div
                className="atvImg-layer"
                data-img="https://user-images.githubusercontent.com/3149580/162380490-8383aa1a-079c-4f4b-a2ce-93a431d2892c.png"
              ></div>
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <a
              class="p-2 px-4 rounded border border-black text-black hover:bg-black hover:text-white transition duration-300"
              href="https://news.ycombinator.com"
            >
              Tweet the photo →
            </a>
          </div>
        </div>
      </main>

      <div class="bg-radial-at-b from-teal-200 via-lime-50 to-white text-center lg:text=left lg:mt-12">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            <span class="block">The curious hacker's <br class="lg:hidden"/>best kept secret.</span>
          </h2>
          <div class="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
            <PrimaryButton
              text="Try the Git challenge →"
              color="black"
              link={"https://app.codecrafters.io/courses/git/overview"}
            />
          </div>
        </div>
      </div>
      <Footer light />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: 'function atvImg(){function e(e,t,a,r,n,o){var i=l.scrollTop||s.scrollTop,d=l.scrollLeft,c=t?e.touches[0].pageX:e.pageX,m=t?e.touches[0].pageY:e.pageY,v=a.getBoundingClientRect(),f=a.clientWidth||a.offsetWidth||a.scrollWidth,g=a.clientHeight||a.offsetHeight||a.scrollHeight,h=320/f,u=.52-(c-v.left-d)/f,p=.52-(m-v.top-i)/g,y=m-v.top-i-g/2,E=c-v.left-d-f/2,C=(u-E)*(.07*h),I=(y-p)*(.1*h),N="rotateX("+I+"deg) rotateY("+C+"deg)",x=Math.atan2(y,E),b=180*x/Math.PI-90;0>b&&(b+=360),-1!=a.firstChild.className.indexOf(" over")&&(N+=" scale3d(1.07,1.07,1.07)"),a.firstChild.style.transform=N,o.style.background="linear-gradient("+b+"deg, rgba(255,255,255,"+(m-v.top-i)/g*.4+") 0%,rgba(255,255,255,0) 80%)",o.style.transform="translateX("+u*n-.1+"px) translateY("+p*n-.1+"px)";for(var L=n,S=0;n>S;S++)r[S].style.transform="translateX("+u*L*(2.5*S/h)+"px) translateY("+p*n*(2.5*S/h)+"px)",L--}function t(e,t){t.firstChild.className+=" over"}function a(e,t,a,r,n){var l=t.firstChild;l.className=l.className.replace(" over",""),l.style.transform="",n.style.cssText="";for(var s=0;r>s;s++)a[s].style.transform=""}var r=document,n=r.documentElement,l=r.getElementsByTagName("body")[0],s=r.getElementsByTagName("html")[0],o=window,i=r.querySelectorAll(".atvImg"),d=i.length,c="ontouchstart"in o||navigator.msMaxTouchPoints;if(!(0>=d))for(var m=0;d>m;m++){var v=i[m],f=v.querySelectorAll(".atvImg-layer"),g=f.length;if(!(0>=g)){for(;v.firstChild;)v.removeChild(v.firstChild);var h=r.createElement("div"),u=r.createElement("div"),p=r.createElement("div"),y=r.createElement("div"),E=[];v.id="atvImg__"+m,h.className="atvImg-container",u.className="atvImg-shine",p.className="atvImg-shadow",y.className="atvImg-layers";for(var C=0;g>C;C++){var I=r.createElement("div"),N=f[C].getAttribute("data-img");I.className="atvImg-rendered-layer",I.setAttribute("data-layer",C),I.style.backgroundImage="url("+N+")",y.appendChild(I),E.push(I)}h.appendChild(p),h.appendChild(y),h.appendChild(u),v.appendChild(h);var x=v.clientWidth||v.offsetWidth||v.scrollWidth;v.style.transform="perspective("+3*x+"px)",c?(o.preventScroll=!1,function(r,n,l,s){v.addEventListener("touchmove",function(t){o.preventScroll&&t.preventDefault(),e(t,!0,r,n,l,s)}),v.addEventListener("touchstart",function(e){o.preventScroll=!0,t(e,r)}),v.addEventListener("touchend",function(e){o.preventScroll=!1,a(e,r,n,l,s)})}(v,E,g,u)):!function(r,n,l,s){v.addEventListener("mousemove",function(t){e(t,!1,r,n,l,s)}),v.addEventListener("mouseenter",function(e){t(e,r)}),v.addEventListener("mouseleave",function(e){a(e,r,n,l,s)})}(v,E,g,u)}}};atvImg();',
        }}
      />
    </>
  );
}
