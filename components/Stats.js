export { Stats };

function Stats({ attempts, level }) {
  return (
    <div className="text-2xl font-bold mt-6 py-6 md:py-8">
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <div className="flex gap-4 items-center flex-col md:flex-row">
          <div>
            {" "}
            <img src="/icons/target.svg" width={38} height={38} alt="target" />
          </div>
          <p>334 Attemts</p>
        </div>
        <div>
          <span className="bg-red-700 rounded-md text-white px-2 py-1">
            Intermediate
          </span>
        </div>
      </div>
      <div className="inline-block mt-8 bg-white p-6 border border-red-600 text-center md:text-left">
        <p className="">
          <span className="inline-flex items-center">
            <svg
              className="-ml-0.5 mr-1.5 h-4 w-4 text-green-400 inline"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            @mykhailoklym94
          </span>{" "}
          <span className="font-normal">completed Stage 3</span>
        </p>
      </div>
    </div>
  );
}
