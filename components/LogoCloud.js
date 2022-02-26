export { LogoCloud };

import { ImageGrid } from "./ImageGrid";
import CompaniesData from '../data/Companies'


function LogoCloud() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-center text-gray-400 text-sm tracking-wide pb-12">
          Our learners work at top teams, schools, and crypto projects
        </h2>
        <ImageGrid images={CompaniesData} />
      </div>
    </div>
  );
}
