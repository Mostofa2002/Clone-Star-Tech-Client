import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-5xl font-medium text-blue-500 dark:text-blue-400">
              SORRY!
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Currently no data available!!
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              We understand that you rely on our products, and we deeply regret
              that we are currently unable to meet your needs. We take our
              commitment to serving our customers seriously, and we recognize
              that we have fallen short of your expectations in this regard.
            </p>

            <div className="flex items-center max-w-5xl mt-6 gap-x-3 mx-auto ">
              <Link to="/">
                <button className=" w-full px-6 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0  hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Take me home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoData;
