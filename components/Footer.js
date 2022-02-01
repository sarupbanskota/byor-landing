import { FooterBottom } from "./FooterBottom";
import { FooterNavigation } from "./FooterNavigation";

export { Footer };

function Footer() {
  return (
    <footer className="bg-radial-at-b from-teal-100 via-lime-50 to-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-8 md:px-64 lg:py-16 margin-auto">
        <div className="xl:grid xl:gap-8">
          <div className="grid grid-cols-2 gap-8">
            <FooterNavigation />
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
