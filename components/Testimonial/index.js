import { PrimaryButton } from "components";
import { StackedAvatars } from "./StackedAvatars";
import { TestimonialCard } from "./TestimonialCard";

export { Testimonial };

function Testimonial({author, course, testimonial}) {
  return (
    <div>
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          It’s The Joy of Programming
        </h2>
        <p className="mt-4 text-lg leading-6 text-black max-w-lg">
          Our learners are always telling us how the Build your own X series
          takes them further in their programing journey.
        </p>
        <TestimonialCard author={author} course={course} testimonial={testimonial}/>
        <div className="mt-8 flex flex-col">
        <PrimaryButton
          text="Try the Redis challenge →"
          color="black"
          link={"https://app.codecrafters.io/courses/redis"}
        />
        <a
          href="/for/about"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inline-flex mt-4 gap-2 items-center">
            <StackedAvatars />{" "}
            <p className="text-sm">Read more testimonials </p>
          </div>
        </a>
        </div>
      </div>
    </div>
  );
}
