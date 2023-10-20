import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddCart = () => {
  const data = useLoaderData();
  const { type, description, name, photo, _id, price } = data;
  const { user } = useContext(AuthContext);
  // handle form
  const addCart = (e) => {
    e.preventDefault();
    const form = e.target;

    const UserName = form.UserName.value;
    const email = user?.email;

    const item = {
      price,
      UserName,
      email,
      productId: _id,
      photo,
      Product: name,
    };
    console.log(item);
    // backEnd
    fetch(
      " https://server-side-oha3y55br-mostofa-tajs-projects.vercel.app/addCarts",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(item),
      }
    )
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
    <div className="flex items-center justify-center py-20 ">
      <div className="card lg:w-[500px] h-[780px] rounded-xl  shadow-xl dark:bg-white">
        <div className="text-center rounded-t-xl  py-3 bg-blue-500">
          <h1 className="text-2xl font-semibold text-center text-white">
            {name}
          </h1>
        </div>

        <div className=" mt-10">
          <figure>
            <img className="w-1/2 h-[70%] " src={photo} alt="Shoes" />
          </figure>
          <p className="ml-6 mt-5 font-bold">
            Type: <span className="font-medium text-black/50">{type}</span>{" "}
          </p>
          <p className="ml-6 mt-1 text-justify font-bold">
            Description:{" "}
            <span className="font-medium text-black/50">{description}</span>
          </p>
          <div className="ml-4">
            <form onSubmit={addCart}>
              <div className="form-control mr-3">
                <label className="label">
                  <span className="label-text text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="UserName"
                  placeholder="name"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control mr-3 ">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                  defaultValue={user?.email}
                />
              </div>

              <div className="flex justify-center items-center md:gap-12 gap-1 lg:gap-28 mt-10">
                <input
                  className="btn w-1/2 bg-sky-600 text-white"
                  type="submit"
                  value="Add Cart"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
