import { PrimaryButton } from "components";
import { StackedAvatars } from "./StackedAvatars";
import { TestimonialCard } from "./TestimonialCard";

export { Testimonial };

function Testimonial() {
  return (
    <div>
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-red-700 sm:text-4xl">
          Join the top 1% of Redis pros
        </h2>
        <p className="mt-4 text-lg leading-6 text-black max-w-lg">
          Our learners are constantly telling us how the Build your own X
          concept keeps their curiosity fueled, and confidence growing.
        </p>
        <TestimonialCard />
        <PrimaryButton text="Start Learning →" />
        <div className="inline-flex mt-4 gap-4">
          <StackedAvatars />{" "}
          <p className="text-red-700">Read more testimonials </p>
        </div>
      </div>
    </div>
  );
}
