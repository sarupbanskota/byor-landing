import Image from "next/image";

export { TestimonialCard };

function TestimonialCard({ author, testimonial, course }) {
  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-8 pt-8 pb-4 text-left overflow-hidden shadow-xl transform transition-all mt-8 sm:align-middle sm:max-w-md sm:w-full border border-gray-50">
      <div>
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full">
          <span className="inline-block relative">
            <Image
              src={author.image}
              alt={author.name}
              width={96}
              height={96}
              className="rounded-full bg-gradient-to-br from-red-100"
            />
            <span className="absolute top-[16px] right-[-26px] block h-12 w-12 rounded-full ">
              <Image
                className="rounded-full"
                src={`/for/logo/${course}.svg`}
                alt={`${course} logo`}
                width={35}
                height={31}
                
              />
            </span>
          </span>
        </div>
        <div className="mt-3 text-center sm:mt-8">
          <h3 className="text-lg leading-6 font-medium text-black">
            {testimonial.title}
          </h3>
          <div className="mt-6">
            <p className="text-md text-gray-500">{testimonial.content}</p>
          </div>
          <div className="mt-4">
            <p className="text-center font-bold tracking-wide flex flex-col items-center justify-center">
              <span>
                {author.name} — {author.role}
              </span>{" "}
              <Image
                src={`/for/logo/${author.company}-colored.svg`}
                alt=""
                width={90}
                height={64}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
