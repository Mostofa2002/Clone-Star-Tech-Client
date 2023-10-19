import { Link } from "react-router-dom";

const SpecificBrand = ({ items }) => {
  const { photo, name, price, brand, rating, type, _id } = items || {};

  return (
    <div className="card lg:w-[500px] h-[690px] rounded-xl  shadow-xl">
      <div className="text-center rounded-t-xl  py-3 bg-blue-500">
        <h1 className="text-2xl font-semibold text-center text-white">
          {name}
        </h1>
      </div>

      <div className=" mt-10">
        <figure>
          <img className="w-1/2 h-[70%] " src={photo} alt="Shoes" />
        </figure>
        <h2 className="card-title font-normal ml-6 mt-10">
          Product Brand: {brand}
        </h2>
        <h2 className="card-title font-normal ml-6 mt-5">
          Product Type: {type}
        </h2>
        <h2 className="card-title font-normal ml-6 mt-5">
          Product Price: ${price}
        </h2>
        <h2 className="card-title font-normal ml-6 mt-5">
          Product Rating: {rating}
        </h2>
        <div className="flex justify-center items-center md:gap-12 gap-1 lg:gap-28 mt-10">
          <Link to={`/addCart/${_id}`}>
            <button className="btn bg-blue-500 text-white ">
              View Details
            </button>
          </Link>
          <Link to="/update">
            <button className="btn bg-sky-600 text-white">
              Update Content
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecificBrand;
