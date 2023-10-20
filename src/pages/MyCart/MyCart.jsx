import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyCartRow from "./MyCartRow";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const url = ` https://server-side-oha3y55br-mostofa-tajs-projects.vercel.app/addCarts?email=${user?.email}`;
  const [add, setAdd] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdd(data));
  }, [add]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          ` https://server-side-oha3y55br-mostofa-tajs-projects.vercel.app/addCarts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = add.filter(() => add._id !== id);
              setAdd(remaining);
            }
          });
      }
    });
  };
  return (
    <div className=" flex items-center justify-center lg:min-h-screen py-10">
      <div>
        {add?.map((item) => (
          <MyCartRow
            key={add._id}
            item={item}
            handleDelete={handleDelete}
          ></MyCartRow>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
