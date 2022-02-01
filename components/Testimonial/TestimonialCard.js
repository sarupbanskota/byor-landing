export { TestimonialCard };

function TestimonialCard() {
  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-8 pt-8 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle sm:max-w-md sm:w-full border border-gray-50">
      <div>
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full">
          <span className="inline-block relative">
            <img
              className="rounded-full bg-gradient-to-br from-red-100"
              src="/for/avatar-charles-guo.png"
              alt=""
            />
            <span className="absolute top-[16px] right-[-26px] block h-12 w-12 rounded-full ">
              <img
                className="rounded-full"
                src="/for/logo/redis.svg"
                alt=""
              />
            </span>
          </span>
        </div>
        <div className="mt-3 text-center sm:mt-8">
          <h3 className="text-lg leading-6 font-medium text-black">
            The redis challenge was extremely fun.
          </h3>
          <div className="mt-6">
            <p className="text-md text-gray-500">
              I ended up having to read Redis protocol specification doc pretty
              carefully in its entirety! The result felt like lightly-guided
              independent study, if that makes sense. (Which, again, was lots of
              fun)
            </p>
          </div>
          <div className="mt-4">
            <p className="text-center font-bold tracking-wide flex flex-col items-center justify-center">
              <span>Charles Guo — Engineer, Scala Team</span> <img className="h-16" src="/for/logo/stripe-colored.svg"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
