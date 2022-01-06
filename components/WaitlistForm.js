export { WaitlistForm };

function WaitlistForm() {
  return (
    <div className="mx-auto max-w-md px-4 sm:max-w-3xl lg:max-w-7xl">
      <div className="relative px-4 py-4 my-8 overflow-hidden sm:px-12 sm:py-20 bg-gray-100 rounded-md">
        <form className="sm:flex items-center justify-center">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-5 py-3 placeholder-gray-400 focus:ring-gray-900 focus:border-gray-900 sm:max-w-xs border border-gray-300 rounded-md"
            placeholder="name@example.com"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-500 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Join waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
