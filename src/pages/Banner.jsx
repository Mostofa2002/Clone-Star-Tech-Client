const Banner = () => {
  return (
    <div className="lg:flex dark:bg-gray-800 lg:mr-36 mt-10">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold  dark:text-white lg:text-4xl">
            Buy Your New{" "}
            <span className="text-blue-600 dark:text-blue-400">Products</span>
          </h2>

          <p className="mt-4 text-sm dark:text-white  lg:text-base">
            Star Tech is the most popular Laptop Brand Shop in BD. Star Tech
            Laptop Shop has the perfect device, whether you are a freelancer,
            office goer, or student. Gamers love our collection of Gaming
            Laptops because we always bring the latest laptops in Bangladesh.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <a
              href="#"
              className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Get Started
            </a>
            <a
              href="#"
              className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-64 lg:w-1/2 lg:h-auto ">
        <img
          className="rounded-xl"
          src="https://i.ibb.co/c2bw5kB/Rise-of-Star-Tech-1-1.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
