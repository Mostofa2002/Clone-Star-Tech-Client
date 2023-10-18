import { useState } from "react";
const ProductAdd = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const Product = ["Phone", "Earphone", "Gpu", "Cpu", "Camera"];
  const AddOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const Brand = ["MSI", "INTEl", "APPLE", "SAMSUNG", "SONY", "GIGABITE"];
  const AddBrand = (event) => {
    setSelectedBrand(event.target.value);
  };
  return (
    <div>
      <div className="mt-8 container mx-auto">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-red-100 rounded-xl shadow-2xl  lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-red-700">
            Add Your Favorite Product To Enjoy More
          </h1>

          <form className="mt-6">
            <div className="flex-1">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Product Image URL
              </label>
              <input
                type="text"
                placeholder="Enter Product Image URL"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Choose The Brand
              </label>
              <input
                type="text"
                value={selectedBrand}
                onChange={AddBrand}
                list="Brand"
                placeholder="Select Brand"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <datalist id="Brand">
                {Brand.map((ser, i) => (
                  <option key={i} value={ser} />
                ))}
              </datalist>
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Choose The Product Type
              </label>
              <input
                type="text"
                value={selectedOption}
                onChange={AddOption}
                list="Product"
                placeholder="Select Product Type"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <datalist id="Product">
                {Product.map((ser, i) => (
                  <option key={i} value={ser} />
                ))}
              </datalist>
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Ticket Price
              </label>
              <input
                type="text"
                placeholder="Enter Ticket Price"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Short Description
              </label>
              <input
                type="text"
                placeholder="Enter Short Description Of Product"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-5 flex-1">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Rating
              </label>
              <input
                type="text"
                placeholder="Enter  Rating"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex lg:flex-row-reverse flex-col-reverse justify-center lg:gap-10">
              <button className=" px-6 py-3 mt-6 text-lg font-bold hover:bg-black text-white btn bg-red-600">
                Add Product
                <i className="-mt-[10px] fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
