import Script from "next/script";

export default function Fact() {
  return (
    <main className="w-full h-full to-white p-12">
      <div className="lg:flex justify-around">
        <div class="lg:w-1/2 px-12 border ">
          <h1 class="text-4xl tracking-tight font-extrabold mt-8 mb-4">
            Git Trivia #262
          </h1>

          <div class="lg py-8 font-['Arial']">
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

        <div class="mt-24">
          <div class="flex flex-col justify-center">
            <div className="atvImg w-[538px] h-[323px]">
              <img src="https://user-images.githubusercontent.com/3149580/162334573-e44d2316-4e95-47cb-8392-27e3519e778c.png" />

              <div
                className="atvImg-layer"
                data-img="https://user-images.githubusercontent.com/3149580/162334573-e44d2316-4e95-47cb-8392-27e3519e778c.png"
              ></div>
              <div
                className="atvImg-layer"
                data-img="https://user-images.githubusercontent.com/3149580/162334573-e44d2316-4e95-47cb-8392-27e3519e778c.png"
              ></div>
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <a
              class="p-2 px-4 rounded border border-black bg-black text-white"
              href="https://news.ycombinator.com"
            >
              Tweet the photo →
            </a>
          </div>
        </div>
      </div>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: 'function atvImg(){function e(e,t,a,r,n,o){var i=l.scrollTop||s.scrollTop,d=l.scrollLeft,c=t?e.touches[0].pageX:e.pageX,m=t?e.touches[0].pageY:e.pageY,v=a.getBoundingClientRect(),f=a.clientWidth||a.offsetWidth||a.scrollWidth,g=a.clientHeight||a.offsetHeight||a.scrollHeight,h=320/f,u=.52-(c-v.left-d)/f,p=.52-(m-v.top-i)/g,y=m-v.top-i-g/2,E=c-v.left-d-f/2,C=(u-E)*(.07*h),I=(y-p)*(.1*h),N="rotateX("+I+"deg) rotateY("+C+"deg)",x=Math.atan2(y,E),b=180*x/Math.PI-90;0>b&&(b+=360),-1!=a.firstChild.className.indexOf(" over")&&(N+=" scale3d(1.07,1.07,1.07)"),a.firstChild.style.transform=N,o.style.background="linear-gradient("+b+"deg, rgba(255,255,255,"+(m-v.top-i)/g*.4+") 0%,rgba(255,255,255,0) 80%)",o.style.transform="translateX("+u*n-.1+"px) translateY("+p*n-.1+"px)";for(var L=n,S=0;n>S;S++)r[S].style.transform="translateX("+u*L*(2.5*S/h)+"px) translateY("+p*n*(2.5*S/h)+"px)",L--}function t(e,t){t.firstChild.className+=" over"}function a(e,t,a,r,n){var l=t.firstChild;l.className=l.className.replace(" over",""),l.style.transform="",n.style.cssText="";for(var s=0;r>s;s++)a[s].style.transform=""}var r=document,n=r.documentElement,l=r.getElementsByTagName("body")[0],s=r.getElementsByTagName("html")[0],o=window,i=r.querySelectorAll(".atvImg"),d=i.length,c="ontouchstart"in o||navigator.msMaxTouchPoints;if(!(0>=d))for(var m=0;d>m;m++){var v=i[m],f=v.querySelectorAll(".atvImg-layer"),g=f.length;if(!(0>=g)){for(;v.firstChild;)v.removeChild(v.firstChild);var h=r.createElement("div"),u=r.createElement("div"),p=r.createElement("div"),y=r.createElement("div"),E=[];v.id="atvImg__"+m,h.className="atvImg-container",u.className="atvImg-shine",p.className="atvImg-shadow",y.className="atvImg-layers";for(var C=0;g>C;C++){var I=r.createElement("div"),N=f[C].getAttribute("data-img");I.className="atvImg-rendered-layer",I.setAttribute("data-layer",C),I.style.backgroundImage="url("+N+")",y.appendChild(I),E.push(I)}h.appendChild(p),h.appendChild(y),h.appendChild(u),v.appendChild(h);var x=v.clientWidth||v.offsetWidth||v.scrollWidth;v.style.transform="perspective("+3*x+"px)",c?(o.preventScroll=!1,function(r,n,l,s){v.addEventListener("touchmove",function(t){o.preventScroll&&t.preventDefault(),e(t,!0,r,n,l,s)}),v.addEventListener("touchstart",function(e){o.preventScroll=!0,t(e,r)}),v.addEventListener("touchend",function(e){o.preventScroll=!1,a(e,r,n,l,s)})}(v,E,g,u)):!function(r,n,l,s){v.addEventListener("mousemove",function(t){e(t,!1,r,n,l,s)}),v.addEventListener("mouseenter",function(e){t(e,r)}),v.addEventListener("mouseleave",function(e){a(e,r,n,l,s)})}(v,E,g,u)}}};atvImg();',
        }}
      />
    </main>
  );
}
