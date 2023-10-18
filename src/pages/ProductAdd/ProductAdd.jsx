import { useState } from "react";
import Swal from "sweetalert2";

const ProductAdd = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const Product = ["Phone", "Earphone", "Gpu", "Cpu", "Camera"];
  const AddOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const Brand = ["ASUS", "INTEl", "APPLE", "SAMSUNG", "SONY", "GIGABITE"];
  const AddBrand = (event) => {
    setSelectedBrand(event.target.value);
  };
  const HandelAddProduct = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const description = from.description.value;
    const brand = from.brand.value;
    const type = from.type.value;
    const price = from.price.value;
    const rating = from.rating.value;
    const photo = from.photo.value;

    const addProduct =
      { name, description, brand, type, price, rating, photo } || {};
    console.log(addProduct);

    // form to database
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "SuccessFull",
            text: "Product added successfully",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <div className="mt-8 container mx-auto py-10">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-red-100 rounded-xl shadow-2xl  lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-red-700">
            Add Your Favorite Product To Enjoy More
          </h1>

          <form onSubmit={HandelAddProduct} className="mt-6">
            <div className="flex gap-1">
              {/* product name */}
              <div className="flex-1 form-control ">
                <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                  Product Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Product Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* choose the brand */}
              <div className="flex-1  form-control ">
                <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                  Choose The Brand
                </label>
                <input
                  name="brand"
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
            </div>
            <div className="flex gap-1">
              {/* Product Type */}
              <div className="flex-1 form-control 5">
                <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                  Product Type
                </label>
                <input
                  name="type"
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
              {/* Product price */}
              <div className="flex-1  form-control ">
                <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                  Product Price
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="Enter Product Price"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex gap-1">
              {/* description */}
              <div className="flex-1 form-control ">
                <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                  Short Description
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Enter Short Description Of Product"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* rating */}
              <div className=" form-control flex-1">
                <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                  Rating
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="Enter  Rating"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            {/* photo url */}
            <div className="flex-1 form-control">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Product Image
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter Product Image URL"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex lg:flex-row-reverse flex-col-reverse justify-center lg:gap-10">
              <input
                className=" px-6 py-3 mt-6 text-lg font-bold hover:bg-black text-white btn bg-red-600"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
