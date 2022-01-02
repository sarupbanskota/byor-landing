import { FooterBottom } from "./FooterBottom";
import { FooterNavigation } from "./FooterNavigation";

export { Footer };

function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 pb-0 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <FooterNavigation />
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
