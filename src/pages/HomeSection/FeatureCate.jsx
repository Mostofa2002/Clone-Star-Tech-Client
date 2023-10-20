import { useEffect, useState } from "react";
import Cate from "./Cate";

const FeatureCate = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data1.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div className="py-10">
      <h1 className="text-center text-5xl font-bold dark:text-white">
        Featured Category
      </h1>
      <p className="text-center text-3xl py-2  dark:text-white">
        Get Your Desired Product from Featured Category!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:mx-48 gap-10 py-10">
        {data?.map((data) => (
          <Cate key={data.id} data={data}></Cate>
        ))}
      </div>
    </div>
  );
};

export default FeatureCate;
