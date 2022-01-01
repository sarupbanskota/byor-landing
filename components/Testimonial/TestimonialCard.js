export { TestimonialCard };

function TestimonialCard() {
  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-8 py-10 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full border border-gray-50">
      <div>
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <span className="inline-block relative">
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="absolute top-0 right-0 block h-6 w-6 rounded-full ">
              <img
                className="rounded-full"
                src="/icons/logos/redis.svg"
                alt=""
              />
            </span>
          </span>
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
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
            <p className="text-center text-gray-900 text-xs font-semibold uppercase tracking-wide">
              CHARLES GUO, SCALA TEAM AT STRIPE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}